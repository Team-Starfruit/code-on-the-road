import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SnippetPage } from '../snippet/snippet'
import { SkillsServiceProvider } from '../../providers/skills-service/skills-service'
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-snippets-list',
  templateUrl: 'snippets-list.html',
  providers: [ SkillsServiceProvider ]
})


export class SnippetsListPage {
  snippets = null;

  constructor(public navCtrl: NavController, 
              private skillsService: SkillsServiceProvider) {}

   /**
   * Ionic specific function to work around angular caching
   * @method ionViewDidEnter
   */
  ionViewDidEnter() {
    let data = JSON.parse(localStorage.getItem('snippetData'))

    if (data != undefined) {
      this.snippets = data['snippets']
    }

    // let test = this.skillsService.getSkills()
    //   .map(res => res.json())
    //   .subscribe(result => {
    //     console.log(result)
    // });
    
  }

   /**
   * Opens a given snippet to be edited
   * @method navigateToSnippet
   */
  navigateToSnippet(snippet, index) {
    this.navCtrl.push(SnippetPage, {'snippet': snippet, 'index': index})
  }
}
