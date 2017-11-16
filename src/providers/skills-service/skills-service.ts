import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SkillsServiceProvider {

  constructor(private http: Http) { }

  /**
   * Gets all the skills listed in the skills.json file
   * @method getSkills
   * @return observable with response
   */
  getSkills() {
    return this.http.get("assets/json/skills.json")
  }
}
