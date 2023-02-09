import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import meters from 'gridium/meters';

export default class MetersController extends Controller {
  @tracked meterData;

  constructor() {
    super(...arguments);
    let data = meters.data.firstObject.attributes.readings.kw;
    let arr = Object.entries(data);
    this.meterData = arr;
  }
}
