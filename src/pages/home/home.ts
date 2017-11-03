import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})


export class HomePage {
  snippetArea = ""
  snippetName = "untitled"
  constructor(public navCtrl: NavController) {}

  public saveSnippet() {
    console.log(this.snippetArea)
    console.log(this.snippetName)

    let data = JSON.parse(localStorage.getItem('userData'))

    if (data != undefined) {
      data['snippets'].push({"name": this.snippetName, "snippet": this.snippetArea})
      localStorage.setItem('userData', JSON.stringify(data))

    } else {
      data = {
        "snippets": [{
          "name": this.snippetName,
          "snippet": this.snippetArea
        }]
      }

      localStorage.setItem('userData', JSON.stringify(data))
    }
  }
}
