import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SnippetPage } from '../snippet/snippet'

@Component({
  selector: 'page-snippets-list',
  templateUrl: 'snippets-list.html',
})


export class SnippetsListPage {
  snippets = null;

  constructor(public navCtrl: NavController) {}

   /**
   * Ionic specific function to work around angular caching
   * @method ionViewDidEnter
   */
  ionViewDidEnter() {
    let data = JSON.parse(localStorage.getItem('userData'))

    if (data != undefined) {
      this.snippets = data['snippets']
    }
  }

   /**
   * Opens a given snippet to be edited
   * @method navigateToSnippet
   */
  navigateToSnippet(snippet, index) {
    this.navCtrl.push(SnippetPage, {'snippet': snippet, 'index': index})
  }
}
