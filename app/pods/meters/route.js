import Route from '@ember/routing/route';
import meters from 'gridium/meters';

export default class MetersRoute extends Route {

  model() {
    return meters;
  }
}
