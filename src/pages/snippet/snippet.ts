import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-snippet',
  templateUrl: 'snippet.html',
})


export class SnippetPage {
  snippet = ""
  name = "untitled"
  index = -1;

  constructor(public navCtrl: NavController,
              private navParams: NavParams) {
    let data = navParams.get('snippet')

    if (data != undefined) {
      this.snippet = data['snippet']
      this.name = data['name']
      this.index = navParams.get('index')
    }
  }

   /**
   * Saves current snippet with given input on html
   * @method saveSnippet
   */
  public saveSnippet() {
    let data = JSON.parse(localStorage.getItem('userData'))

    if (data != undefined) {
      if (this.index != -1) {
        console.log(this.index)
        console.log(data["snippets"][this.index])
        data["snippets"][this.index]["name"] = this.name;
        data["snippets"][this.index]["snippet"] = this.snippet;
      } else {
        data['snippets'].push({"name": this.name, "snippet": this.snippet})
      }

      localStorage.setItem('userData', JSON.stringify(data))
    } else {
      data = {
        "snippets": [{
          "name": this.name,
          "snippet": this.snippet
        }]
      }

      localStorage.setItem('userData', JSON.stringify(data))
    }
  }
}
