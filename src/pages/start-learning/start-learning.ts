import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SnippetPage } from '../snippet/snippet'
import { SkillsServiceProvider } from '../../providers/skills-service/skills-service'
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import * as criticalPath from 'critical-path';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-start-learning',
  templateUrl: 'start-learning.html',
  providers: [ SkillsServiceProvider, Slides ]
})


export class StartLearningPage {
  @ViewChild(Slides) slides: Slides; 
  skills = null;
  skill = null;

  tasks = null;
  taskDurations = [];

  duration = null;
  finalResults = null;

  constructor(public navCtrl: NavController, 
              private skillsService: SkillsServiceProvider) {
    let options_1 = {
      "cost": 100,
      "name": "test task 1"
    }

    let task_1 = new criticalPath.Task(options_1)

    let options_2 = {
      "cost": 150,
      "depends": task_1,
      "name": "test task 2"
    }

    let task_2 = new criticalPath.Task(options_2)

    let result = criticalPath.schedule([task_1, task_2], 2)

    console.log(result)

    this.skillsService.getSkills()
      .map(res => res.json())
      .subscribe(result => {
        this.skills = result['skills']
      });
    }
  
  // Disable swiping by default.
  ionViewDidLoad() {
    this.slides.lockSwipes(true);
  }

  /**
  * Function to move to a given slide as shown on the html page.
  * disables swiping so values can be entered.
  *
  * @method goToSlide
  */
  goToSlide(slideNo) {   
    this.slides.lockSwipes(false);
    this.slides.slideTo(slideNo, 500);
    this.slides.lockSwipeToNext(true);
  }

  /**
  * Gets Results
  *
  * @method getResults
  */
  getResults() {
    let allTasks = [];

    for (let i = 0; i < this.tasks.length; i++ ) {
      let newTaskOption;

      newTaskOption = {
          "cost": Number(this.taskDurations[i]),
          "name": this.tasks[i]['description'],
      }

      let newTask = new criticalPath.Task(newTaskOption);
      allTasks.push(newTask);     
    }

    let result = criticalPath.schedule(allTasks, this.duration)
    this.createUserData(result);
    // go to next slide that displays everything
  }

  private addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  private createUserData(tasks) {
    let userData = [];
    let daysToAdd = 0;

    for (let i in tasks) { 
      let date = new Date()
      date = this.addDays(date, daysToAdd);

      let data = {
          "date": date,
          "snippet": null,
          "tasks": [] 
      }

      for (let j in tasks[i]) {
        let task = {
          "task": tasks[i][j].task,
          "completed": false
        }
        data['tasks'].push(task)
      }
      daysToAdd++;
      userData.push(data)
    }

    localStorage.setItem('userData', JSON.stringify(userData))    
  }

  /**
  * Using current information given from past slides, sets
  * values needed to display tasks and task durations
  *
  * @method getTasks
  */
  getTasks() {
    this.goToSlide(2);

    let skillObject = this.getSkillInfo(this.skill)
    this.tasks = skillObject.tasks

    let iterator = this.tasks.length
    while(iterator--) this.taskDurations.push(2);
  }

  /**
  * Opens a given snippet to be edited
  *
  * @method navigateToSnippet
  */
  navigateToSnippet(snippet, index) {
    this.navCtrl.push(SnippetPage, {'snippet': snippet, 'index': index})
  }

  /**
  * Private function that returns a skill object given the 
  * name of the skill
  *
  * @method getSkillInfo
  */
  private getSkillInfo(skill) {
    let skillObject;

    for (let index in this.skills) {
      if (this.skills[index].skill == skill) {
        skillObject = this.skills[index]
      }
    }

    return skillObject;
  }
}
