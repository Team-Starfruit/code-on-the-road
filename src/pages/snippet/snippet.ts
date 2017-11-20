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

  userData = [];
  userDataIndex = null;

  taskName = null;

  constructor(public navCtrl: NavController,
              private navParams: NavParams) {
    let data = navParams.get('snippet')
    let userDataIndex = navParams.get('userDataIndex')

    if (data != undefined) {
      this.snippet = data['snippet']
      this.name = data['name']
      this.index = navParams.get('index')

      if (data['userDataIndex'] != undefined) {
        this.userDataIndex = data['userDataIndex'];
        this.userData = JSON.parse(localStorage.getItem('userData'))
        this.taskName = this.userData[this.userDataIndex[0]].tasks[this.userDataIndex[1]].task.name
      }
    }

    if (userDataIndex != undefined) {
      this.userDataIndex = userDataIndex;
      this.userData = JSON.parse(localStorage.getItem('userData'))
      this.taskName = this.userData[userDataIndex[0]].tasks[userDataIndex[1]].task.name
    }
  }

   /**
   * Saves current snippet with given input on html
   * @method saveSnippet
   */
  public saveSnippet() {
    let data = JSON.parse(localStorage.getItem('snippetData'))

    if (data != undefined) {
      if (this.index != -1) {
        data["snippets"][this.index]["name"] = this.name;
        data["snippets"][this.index]["snippet"] = this.snippet;

        if (this.userDataIndex != undefined) {
          data["userDataIndex"] = this.userDataIndex;
          this.userData[this.userDataIndex[0]].tasks[this.userDataIndex[1]].completed = true;
          localStorage.setItem('userData', JSON.stringify(this.userData));
        }
      } else {
        if (this.userDataIndex != undefined) {
          data['snippets'].push({"name": this.name,
                                "snippet": this.snippet,
                                 "userDataIndex": this.userDataIndex})

          this.userData[this.userDataIndex[0]].tasks[this.userDataIndex[1]].completed = true;
          localStorage.setItem('userData', JSON.stringify(this.userData));
        } else {
          data['snippets'].push({"name": this.name, "snippet": this.snippet})
        }
      }

      localStorage.setItem('snippetData', JSON.stringify(data))
    } else {
      data = {
        "snippets": [{
          "name": this.name,
          "snippet": this.snippet
        }]
      }

      localStorage.setItem('snippetData', JSON.stringify(data))
    }
  }
}
