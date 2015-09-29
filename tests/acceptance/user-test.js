import Ember from 'ember';
import { module, test } from 'qunit';

import { make } from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';

import startApp from 'test-browserfiy/tests/helpers/start-app';
var App;

module('User View', {
  setup: function () {
    Ember.run(function () {
      App = startApp();
      TestHelper.setup();
    });
  },
  teardown: function () {
    Ember.run(function () {
      TestHelper.teardown();
      App.destroy();
    });
  }
});


module('Acceptance | user view', {
  beforeEach: function() {
    this.application = startApp();
    TestHelper.setup();
  },

  afterEach: function() {
    TestHelper.teardown();
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /user', function(assert) {
  var user = make('user');
  visit('/user/' + user.id);

  andThen(function() {
    var username = find('.username').text();
    assert.equal(username, user.get('name'));
    assert.equal(currentURL(), '/user/1');
  });
});
