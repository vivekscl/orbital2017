import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, ModalController, ViewController, NavParams, PopoverController } from 'ionic-angular';
import { ActivityPage } from '../activity/activity';
import { AlternativesPage } from '../alternatives/alternatives';
import { ActivityProvider } from '../../providers/activity/activity';
import { AlternativeModel } from '../../app/models/alternative-model';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { InvitePage } from '../invite/invite';
import { HomePage } from '../home/home';
import { PopoverPage } from '../popover/popover';
import { AuthProvider } from '../../providers/auth/auth';
import { PlansProvider } from '../../providers/plans/plans';
/**
 * Generated class for the TemplatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'template'
})
@Component({
  selector: 'page-template',
  templateUrl: 'template.html',
})
export class TemplatePage {
  plan: any = this.navParams.data;
  user: any;
  username: any;
  plansID: string;
  activities: any[] = [];
  comment: string = '';
  comments: any[] = [];
  likes:number = 0;
  days:number = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, 
    public viewCtrl: ViewController, public activityService: ActivityProvider,public planService: PlansProvider,
    public popoverCtrl: PopoverController, 
    public authService: AuthProvider,
    public storage: Storage) {
    this.storage.get('currUser').then(data => {
        console.log(data);
        console.log(this.plan);
        this.user = data; 
        this.username = this.user.email.split("@")[0];
      });
  }

  ionViewWillLoad() {
    this.storage.get('currUser').then(user => {
      console.log(user);
        this.authService.getUser(user.result.user._id).subscribe(data => {
          console.log(data.plans[data.plans.length-1]);
          this.plansID = data.plans[data.plans.length-1];
          //console.log(this.plansID);
          this.planService.getPlan(this.plansID).subscribe(data => {       
            this.plan = data


            var actlength = data.activities.length;

            //console.log("hi");
            //console.log("ur act length "+ data.activities.length);

            //this.activities = data.activities;
            for(var i2 = 0; i2 < actlength; i2++){
              this.activityService.getActivity(data.activities[i2]).subscribe(dat => {



                // for(var i2 = 0; i2 < actlength; i2++){

                //   console.log("i cmae here " + i2);
                //   console.log(data.activities[i2]);
                // }
                // if data exists
                if (dat != null) {
                  // make an empty comments array
                  var commentsArr = [];
                  var j = 0;
                  var datlength = dat.comments.length;
                  // for all comments in the activity, get the data from back end and push it into 
                  // the comments array
                  while (j < datlength) {
                    console.log('variable j: ' + j + ' and comments is: ' + dat.comments[j])
                    this.activityService.getComment(dat.comments[j]).subscribe(comment => {
                      console.log(comment, j);
                      commentsArr.push(comment);

                    })
                    j++;
                  }
                }
                // replace the activity's comments array with the new comments array
                // cuz the current activity's comments array only contain id
                if (dat != null) {
                  dat.comments = commentsArr;
                }
                
                console.log(dat);
                if (dat){
                  this.activities.push(dat);
                  //console.log(this.activities);
                }
              }); 
              
            }
            //console.log(this.activities);
           // console.log(this.plan);
            
          });
        });
      });
      
  }

  delete(chip, index) {
    console.log(chip);
    var commentIndex = this.activities[index].comments.indexOf(chip);
    // send in id of comment and delete it from back end
    this.activityService.deleteComment(chip._id, chip.originActivity);
    if (index > -1) {
      // delete the comment in front end
      this.activities[index].comments.splice(commentIndex,1);
      
    }
  }

  addComment(formValue, index) {
    // formValue is the comment content and we add the username to the formValue object
    formValue.user  = this.username;
    // add the comment content into the activities array for front end
    this.activities[index].comments.push(formValue)
    //console.log('HELLLOOO',this.plan);
    // this is to refresh the actvity id cuz when you create an activity the id has not been included in the front end,
    // so we do this so the front end now has an activity id and we can use that info later
    this.storage.get('currUser').then(user => {
        this.authService.getUser(user.result.user._id).subscribe(data => {
          this.plansID = data.plans[data.plans.length-1];
          this.planService.getPlan(this.plansID).subscribe(data => {       
            this.plan = data
          })
        })
    })
    console.log(this.plan.activities[index])
    // make a new comment which has username, content, and the activity ID it is under
    let newComment = {
      user:this.username,
      comment:formValue.comment,
      originActivity:this.plan.activities[index]
    }
    this.activityService.createAndAddComment(newComment, this.plan.activities[index]); 
    // this.activities[index].addComment(formValue);
    this.comment = ''
  }
  increase(index) {
    // increase likes for front end
    this.activities[index].likes++;
    let lik = {
      likes: this.activities[index].likes
    }
    // send likes to back end and update the activity
    this.activityService.addLikes(this.activities[index]._id,lik)
  }

  launchActivityPage() {

  	let modal = this.modalCtrl.create(ActivityPage);

  	modal.onDidDismiss(activity => {
      if(activity){
        //console.log(activity)
        //let currActivity = new AlternativeModel(activity, [], 0, []);
        this.activities.push(activity);
        //console.log(currActivity);
        //console.log(this.activities);
        this.activityService.createActivity(activity, this.plansID);        
      }
    });

  	modal.present();
  }

  launchAnotherPage(index) {

    let modal = this.modalCtrl.create(ActivityPage);

    modal.onDidDismiss(activity => {
      if(activity){
        activity.originActivity = this.activities[index]._id;
        this.activities[index].alternatives.push(activity);
        console.log(this.activities[index]);
        this.activityService.addAlternative(activity, this.activities[index]._id);      
      }
    });

    modal.present();
  }

  launchAlternativesPage(index) {

    let modal = this.modalCtrl.create(AlternativesPage, this.activities[index]);

    modal.present();
  }

  deleteActivity(activity){
 
    //Remove locally
      let index = this.activities.indexOf(activity);
 
      if(index > -1){
        this.activities.splice(index, 1);
      }   
 
    //Remove from database
    this.activityService.deleteActivity(activity._id);
  }

  editActivity(activity){

    let modal = this.modalCtrl.create(ActivityPage);

    modal.onDidDismiss(activity => {
      if(activity){
        //console.log(activity)
        let currActivity = new AlternativeModel(activity, [], 0, []);
        this.activities.push(currActivity);
        //console.log(currActivity);
        //console.log(this.activities);
        this.activityService.createActivity(activity, this.plansID);        
      }
    });

    modal.present();

    this.activityService.editActivity(activity._id);
  }

}
