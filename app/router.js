import EmberRouter from '@ember/routing/router';
import config from 'gridium/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('services', function () {
    this.route('show', { path: '/:id' });
  });
  this.route('meters');
});
