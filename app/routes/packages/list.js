import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    query: {
      replace: true
    }
  },

  model: function() {
    return this.get('store').find('package');
  },

  setupController: function(controller, model) {
    this._super.apply(this, arguments);
    this.controllerFor('application').set('packageCount', model.get('length'));
  }
});
