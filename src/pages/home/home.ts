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
  	}
  	console.log(this.userData)
  }

  parseUserData(data) {
  	var userData = []

  	for (i in data) {
  		// incomplete object with current date
  		// iterate through tasks and if there are incomplete ones
  		// then just append it
  		// then append to userdata
  		
  		var incompleteObject
  	}
  }

  createSnippet() {
  	this.navCtrl.push(SnippetPage)
  }

  startLearning() {
  	this.navCtrl.push(StartLearningPage)
  }
}
