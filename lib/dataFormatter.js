/**
 * Created by dmccarthy on 01/09/2014.
 */
'use strict';

var typeHelper = function(db_body, msg) {

   if (msg['content-type'] === "application/json-ld") {

      var context               = db_body.value['@context'];
      db_body.value['@type']    = db_body.value['@reference'];
      db_body.value['@context'] = {};

      for (var i in context) {
         if (context.hasOwnProperty(i)) {
            var entry = context[i];
            var ldEntry = {'@id' : entry['@context_id'], '@type' : entry['@openi_type'] };
            db_body.value['@context'][entry['@property_name']] = ldEntry;
         }
      }

      db_body.value['@reference']     = undefined;
      db_body.value['@location']      = undefined;
      db_body.value['_date_created']  = undefined;
      db_body.value['_date_created '] = undefined;

   }

   if (undefined === db_body.value.id && undefined === db_body.value['@id']){
      db_body.value = { '@id' : db_body.value };
   }

   return db_body.value;
};


var objectHelper = function(db_object, msg) {

   //var type = db_object.value['@openi_type'];

   db_object.value.openi_type = undefined;

   if (msg.filter_show){
      for (var m in db_object.value['@data']){
         if (-1 === msg.filter_show.indexOf(m) ){
            db_object.value['@data'][m] = undefined;
         }
      }
   }

   var resp_obj = db_object.value;

   if (db_object.cas) {
      resp_obj["_revision"] = db_object.cas["0"] + "-" + db_object.cas["1"];
   }

   if (undefined === db_object.value['@id']) {
      resp_obj = { '@id' : db_object.value };
   }

   return resp_obj;
};


var cloudletHelper = function(db_object) {

   if (undefined === db_object.value['id']){
      return { 'id' : db_object.value };
   }

   return { 'id' : db_object.value.id };
};


var typeStats = function(db_object) {
   return db_object;
};


module.exports.typeHelper     = typeHelper;
module.exports.objectHelper   = objectHelper;
module.exports.cloudletHelper = cloudletHelper;
module.exports.typeStats      = typeStats;