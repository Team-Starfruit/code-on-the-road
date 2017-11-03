import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-snippets',
  templateUrl: 'snippets.html',
})


export class SnippetsPage implements OnInit{

  constructor(public navCtrl: NavController) {}

  snippets = null;

  ngOnInit() {
  	let data = JSON.parse(localStorage.getItem('userData'))

  	if (data != undefined) {
  		this.snippets = data['snippets']
  	}
  }
}
