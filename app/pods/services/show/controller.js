import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import services from 'gridium/services';

export default class ServicesShowController extends Controller {
  @tracked serviceData;
  @tracked model;

  constructor() {
    super(...arguments);
  }

  get arrayData() {
    return Object.entries(this.model.attributes);
  }
}
