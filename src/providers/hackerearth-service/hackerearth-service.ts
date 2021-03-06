import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HackerEarthServiceProvider {

  private BASE_URL = 'http://api.hackerearth.com/v3/code/';
  private CLIENT_SECRET = 'f059ca9df9a4abd9043743620eeecd4a9701eee6';

  constructor(public http: Http) { }

  /**
   * Compiles a given code snippet
   * @method compileSnippet
   * @param language programming language
   * @param snippet actual code to compile
   * @return promise with response
   */
  compileSnippet(language, snippet) {
    const body = {
    'client_secret': this.CLIENT_SECRET,
    'async': 0,
    'source': snippet,
    'lang': language,
    'time_limit': 5,
    'memory_limit': 262144,
    }

    return this.http.post(this.BASE_URL + 'compile/', body)
  }

  /**
   * Runs a given code snippet
   * @method runSnippet
   * @param language programming language
   * @param snippet actual code to run
   * @return promise with response
   */
  runSnippet(language, snippet) {
    const body = {
    'client_secret': this.CLIENT_SECRET,
    'async': 0,
    'source': snippet,
    'lang': language,
    'time_limit': 5,
    'memory_limit': 262144,
    }

    return this.http.post(this.BASE_URL + 'run/', body)
  }
}
