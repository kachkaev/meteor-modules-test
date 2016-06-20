import { Meteor } from 'meteor/meteor';

import { fortytwo } from '/imports/fortytwo.js';

Meteor.startup(() => {
  console.log('fortytwo is ' + fortytwo);
  // code to run on server at startup
});
