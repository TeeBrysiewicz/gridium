import Route from '@ember/routing/route';
import services from 'gridium/services';

export default class ServicesRoute extends Route {

  model() {
    return services;
  }
}
