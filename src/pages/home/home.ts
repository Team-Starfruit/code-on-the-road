import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HackerEarthServiceProvider } from '../../providers/hackerearth-service/hackerearth-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HackerEarthServiceProvider]
})


export class HomePage {
  snippetArea = ""

  constructor(public navCtrl: NavController, 
  			  public hackerEarthService: HackerEarthServiceProvider) {}

  public test() {
  	this.hackerEarthService.runSnippet('PYTHON', this.snippetArea)
  	.subscribe(res => {
  		console.log(res)
  	});
  }
}
