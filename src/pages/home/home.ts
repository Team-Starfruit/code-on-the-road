import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SnippetPage } from '../snippet/snippet'
import { StartLearningPage } from '../start-learning/start-learning'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})


export class HomePage {

  constructor(public navCtrl: NavController) {}

  createSnippet() {
  	this.navCtrl.push(SnippetPage)
  }

  startLearning() {
  	this.navCtrl.push(StartLearningPage)
  }
}
