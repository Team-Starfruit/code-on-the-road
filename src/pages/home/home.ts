import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SnippetPage } from '../snippet/snippet'
import { StartLearningPage } from '../start-learning/start-learning'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})


export class HomePage {
  userData = null;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidEnter() {
  	let data = JSON.parse(localStorage.getItem('userData'))  

  	if (data != null) {
  		this.userData = data;
      console.log(this.userData)
  	}
  }

  createSnippet(dayIndex?, taskIndex?) {
    if(dayIndex != undefined   && taskIndex != undefined  ){
      this.navCtrl.push(SnippetPage, {'userDataIndex': [dayIndex, taskIndex]});
    } else {
      this.navCtrl.push(SnippetPage) 
    }
  }

  startLearning() {
  	this.navCtrl.push(StartLearningPage)
  }
}
