import Route from '@ember/routing/route';
import services from 'gridium/services';

export default class ServicesShowRoute extends Route {

  model(params) {
    let bill = services.data.filter(bill => bill.id === params.id);
    return bill.firstObject;
  }
}
