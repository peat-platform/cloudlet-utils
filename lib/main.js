/**
 * Created by jhanges on 10/02/2014.
 */
'use strict';

var minify    = require('jsonminify');
var crypto    = require('crypto');
var formatter = require('./dataFormatter.js');


var cloudletPatternMatch     = new RegExp(/^c_[a-z0-9]{32}$/);
var cloudletPatternExtract   = new RegExp(/c_[a-z0-9]{32}/);

var typePatternMatch         = new RegExp(/^t_[a-z0-9]{32}-[0-9]{1,10}$/);
var typePatternExtract       = new RegExp(/t_[a-z0-9]{32}-[0-9]{1,10}/);

var objectPatternMatch       = new RegExp(/^0[a-f,0-9]{7}-[a-f,0-9]{4}-4[a-f,0-9]{3}-[a-f,0-9]{4}-[a-f,0-9]{12}$/);
var objectPatternExtract     = new RegExp(/0[a-f,0-9]{7}-[a-f,0-9]{4}-4[a-f,0-9]{3}-[a-f,0-9]{4}-[a-f,0-9]{12}/);

var attachmentPatternMatch   = new RegExp(/^a[a-f,0-9]{7}-[a-f,0-9]{4}-4[a-f,0-9]{3}-[a-f,0-9]{4}-[a-f,0-9]{12}$/);
var attachmentPatternExtract = new RegExp(/a[a-f,0-9]{7}-[a-f,0-9]{4}-4[a-f,0-9]{3}-[a-f,0-9]{4}-[a-f,0-9]{12}/);



function _sort(json, depth, til) {
   if (depth > til) {
      throw new Error('Maximum object depth reached');
   }
   if (typeof json !== 'object' || Array.isArray(json)) {
      return json;
   }
   var r = {};
   Object.getOwnPropertyNames(json).sort().forEach(function(e) {
      r[e] = _sort(json[e], depth + 1, til);
   });
   return r;
}

function sort(json) {
   return _sort(json, 0, 4);
}

function norm(json) {
   return minify(JSON.stringify(sort(json)));
}

function hash(json) {
   var n = norm(json);
   return crypto.createHash('md5').update(n).digest('hex') + '-' + n.length;
}


function randomHash() {
   var date   = (new Date()).valueOf().toString();
   var random = Math.random().toString();

   return crypto.createHash('md5').update(date + random).digest('hex');
}


var getCloudletId = function(auth_token){

   var cidObj  = {
      user_id : auth_token.user_id,
      seed    : "Beware of Greeks bearing gifts"
   };

   var normObj = norm(cidObj);
   var str     =  "c_" + crypto.createHash('md5').update(normObj).digest('hex');

   return str;
};


var extractCloudletId = function(path){

   var result = cloudletPatternExtract.exec(path);

   return (null !== result) ? result[0] : null;

};


var extractTypeId = function(path){

   var result = typePatternExtract.exec(path);

   return (null !== result) ? result[0] : null;

};


var extractObjectId = function(path){

   var result = objectPatternExtract.exec(path);

   return (null !== result) ? result[0] : null;
};


var extractAttachmentId = function(path){

   var result = attachmentPatternExtract.exec(path);

   return (null !== result) ? result[0] : null;
};


var isAttachmentId = function(path){

   return attachmentPatternMatch.test(path);
};


var isObjectId = function(path){

   return objectPatternMatch.test(path);
};


var isTypeId = function(path){

   return typePatternMatch.test(path);

};


var isCloudletId = function(path){

   return cloudletPatternMatch.test(path);

};


var isArray = function(obj){
   return Object.prototype.toString.call( obj ) === '[object Array]';
};


var generateUUID = function(type) {

   var str = "9xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";

   switch (type) {
      case "object":
         str = '0xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
         break;
      case "attachment":
         str = 'axxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
         break;
   }

   var date = new Date().getTime();

   var uuid = str.replace(/[xy]/g, function(c) {
      var r = (date + Math.random()*16)%16 | 0;
      date = Math.floor(date/16);
      return (c ==='x' ? r : (r&0x7|0x8)).toString(16);
   });

   return uuid;
};

module.exports.hash           = hash;
module.exports.sort           = sort;
module.exports.norm           = norm;
module.exports.randomHash     = randomHash;
module.exports.typeHelper     = formatter.typeHelper;
module.exports.objectHelper   = formatter.objectHelper;
module.exports.cloudletHelper = formatter.cloudletHelper;
module.exports.typeStats      = formatter.typeStats;
module.exports.generateUUID   = generateUUID;
module.exports.getCloudletId  = getCloudletId;

module.exports.isCloudletId        = isCloudletId;
module.exports.isObjectId          = isObjectId;
module.exports.isAttachmentId      = isAttachmentId;
module.exports.extractAttachmentId = extractAttachmentId;
module.exports.extractObjectId     = extractObjectId;
module.exports.extractCloudletId   = extractCloudletId;
module.exports.extractTypeId       = extractTypeId;
module.exports.isTypeId            = isTypeId;
module.exports.isArray             = isArray;
