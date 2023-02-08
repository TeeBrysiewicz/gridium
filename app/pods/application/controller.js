import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency-decorators';
import fetch from 'fetch';
import config from 'gridium/config/environment';

export default class ApplicationController extends Controller {
  @tracked data = "foo";

  constructor() {
    super(...arguments);
    this._loadData.perform();
  }

  @task
  *_loadData() {
    let dataUrl = 'https://snapmeter.com/api/public/meters/2080448990211/readings?start=2022-08-01&end=2023-02-01';
    let response = yield fetch(dataUrl, {
      method: 'GET',
      credentials: 'include',
      origin: '*',
      'Access-Control-Allow-Origin': '*',
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    });

    if (!response.ok) {
      return "Error";
    }

    let { data } = yield response.json();
    this.data = data;
  }
}
