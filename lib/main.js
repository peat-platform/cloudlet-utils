/**
 * Created by jhanges on 10/02/2014.
 */
'use strict';

var minify = require('jsonminify');
var crypto = require('crypto');

function _sort(json, depth, til)
{
   if(depth > til){
      throw new Error('Maximum object depth reached');
   }
   if(typeof json !== 'object' || Array.isArray(json)){
      return json;
   }
   var r = {}
   Object.getOwnPropertyNames(json).sort().forEach(function(e)
   {
      r[e] = _sort(json[e], depth + 1, til);
   });
   return r;
}

function sort(json)
{
   return _sort(json, 0, 4);
}

function norm(json)
{

   return minify(JSON.stringify(sort(json)));
}

function hash(json)
{
   var n = norm(json);
   return crypto.createHash('md5').update(n).digest('hex') + '-' + n.length;
}

exports.hash = hash;
exports.sort = sort;
exports.norm = norm;