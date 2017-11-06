import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SnippetPage } from '../snippet/snippet'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})


export class HomePage {

  constructor(public navCtrl: NavController) {}

  createSnippet() {
  	this.navCtrl.push(SnippetPage)
  }
}
