import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SnippetPage } from '../snippet/snippet'
import { SkillsServiceProvider } from '../../providers/skills-service/skills-service'
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-start-learning',
  templateUrl: 'start-learning.html',
  providers: [ SkillsServiceProvider, Slides ]
})


export class StartLearningPage {
  @ViewChild(Slides) slides: Slides;
  skill = null;
  duration = null;
  
  constructor(public navCtrl: NavController, 
              private skillsService: SkillsServiceProvider) {}


    // let test = this.skillsService.getSkills()
    //   .map(res => res.json())
    //   .subscribe(result => {
    //     console.log(result)
    // });
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
    this.slides.lockSwipes(true);
  }

  goToSlide(slideNo) {   
    this.slides.lockSwipes(false);
    this.slides.slideTo(slideNo, 500);
    this.slides.lockSwipes(true);
  }

   /**
   * Opens a given snippet to be edited
   * @method navigateToSnippet
   */
  navigateToSnippet(snippet, index) {
    this.navCtrl.push(SnippetPage, {'snippet': snippet, 'index': index})
  }
}
