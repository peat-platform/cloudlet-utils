/*
 * dbc
 *
 *
 * Copyright (c) 2013 dmccarthy dbenson
 */

'use strict';
var loglet      = require('loglet');
loglet          = loglet.child({component: 'dbc'});

module.exports = (function() {
   return {
      assert: function(arg, errorMessage) {
         if (!arg) {
            loglet.error(errorMessage);
            throw errorMessage;
         }
      },
      hasMember: function(obj, memberName) {
         if (!obj.hasOwnProperty(memberName)) {
            loglet.error('DBC violation: Object is missing member: %s', memberName);
            throw new Error('DBC violation: Object is missing member: ' + memberName);

         }
      },
      hasMemberIn: function(obj, memberName, memberValues) {
         if (!obj.hasOwnProperty(memberName)) {
            loglet.error('Object is missing member: %s', memberName);
            throw new Error('Object is missing member: ' + memberName);
         }
         else if (-1 === memberValues.indexOf(obj[memberName])) {
            loglet.error('DBC violation: Object member ( %s ) should be one of the following: %s', memberName, memberValues);
            throw new Error('DBC violation: Object member (' + memberName + ') should be one of the following: '
               + memberValues);
         }
      },
      conditionalHasMember: function(obj, memberName, condition) {
         if (condition){
            if (!obj.hasOwnProperty(memberName)) {
               loglet.error('DBC violation: Object is missing member: %s', memberName);
               throw new Error('DBC violation: Object is missing member: ' + memberName);
            }
         }
      }
   };
}());