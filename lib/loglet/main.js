'use strict';

var bunyan       = require('bunyan');
var prettyStream = require('bunyan-prettystream');

var prettyStdOut = new prettyStream();
prettyStdOut.pipe(process.stdout);

var createLogger = function(name, log_level, log_file_name){

   return bunyan.createLogger({
      name   : name,
      src    : true,
      streams: [
         {
            level : log_level,
            path  : log_file_name
         },
         {
            level  : log_level,
            type   : 'raw',
            stream : prettyStdOut
         }
      ]
   });
}


module.exports.createLogger = createLogger;