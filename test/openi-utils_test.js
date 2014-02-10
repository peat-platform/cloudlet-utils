'use strict';


var base_path    = require('./basePath.js');
var openi_utils  = require(base_path + '../lib/main.js');
var json_1 = {
   '@id': '1234',
   '@type': '5678',
   'properties':
   {
      'b': ['f','g','h'],
      'a': ['1','2','3']
   },
   '@context':
   {
      'abc': { '@id': 'foo', '@type': 'bar' },
      'def': { '@id': 'baz', '@type': 'moo' }
   }
};

var json_2 = {
   '@type': '5678',
   '@id': '1234',
   'properties':
   {
      'b': ['f','g','h'],
      'a': ['1','2','3']
   },
   '@context':
   {
      'abc': { '@id': 'foo', '@type': 'bar' },
      'def': { '@id': 'baz', '@type': 'moo' }
   }
};

var json_3 = {
   '@type': '5678',
   '@id': '1234',
   'properties':
   {
      'a': ['1','2','3'],
      'b': ['f','g','h']
   },
   '@context':
   {
      'abc': { '@id': 'foo', '@type': 'bar' },
      'def': { '@id': 'baz', '@type': 'moo' }
   }
};

var json_4 = {
   '@type': '5678',
   '@id': '1234',
   'properties':
   {
      'a': ['1','2','3'],
      'b': ['f','g','h']
   },
   '@context':
   {
      'def': { '@id': 'baz', '@type': 'moo' },
      'abc': { '@id': 'foo', '@type': 'bar' }
   }
};

var json_5 = {
   '@type': '5678',
   '@id': '1234',
   'properties':
   {
      'a': ['1','2','3'],
      'c': ['f','g','h']
   },
   '@context':
   {
      'def': { '@id': 'baz', '@type': 'moo' },
      'abc': { '@id': 'foo', '@type': 'bar' }
   }
};

exports['constuct'] = {


   'test hash' : function (test) {

      test.notEqual(JSON.stringify(json_1),                 JSON.stringify(  json_2));
      test.equals('4542a76906b243bae19fb909b62fc437-161',   openi_utils.hash(json_1));
      test.equals('4542a76906b243bae19fb909b62fc437-161',   openi_utils.hash(json_2));
      test.equals('4542a76906b243bae19fb909b62fc437-161',   openi_utils.hash(json_3));
      test.equals('4542a76906b243bae19fb909b62fc437-161',   openi_utils.hash(json_4));
      test.notEqual('4542a76906b243bae19fb909b62fc437-161', openi_utils.hash(json_5));

      test.done();
   },
   'test sort' : function (test) {

      var obj = {
         'c' : '1',
         'b' : '2',
         'd' : false
      }

      var deepObj = {
         'z' : 20,
         'g' : {
            'h' : {
               'i' : {
                  'j' : {
                     'k' : {
                        'l' : 42
                     }
                  }
               }
            }
         }
      }

      var sorted = openi_utils.sort(obj)

      test.equals('{"b":"2","c":"1","d":false}', JSON.stringify(openi_utils.sort(obj)) );
      test.throws(function () { openi_utils.sort(deepObj) } );
      test.ok(true);
      //test.ok(val.indexOf('test message') > -1, 'log should contain "test message"');
      test.done();
   },
   'test norm' : function (test) {

      test.equal(   '{"@context":{"abc":{"@id":"foo","@type":"bar"},"def":{"@id":"baz","@type":"moo"}},"@id":"1234","@type":"5678","properties":{"a":["1","2","3"],"b":["f","g","h"]}}', openi_utils.norm(json_1));
      test.equal(   openi_utils.norm(json_1), openi_utils.norm(json_2));
      test.notEqual(json_1,                   json_2);

      test.ok(true);
      test.done();
   },
   'test randomHash' : function (test) {

      test.notEqual(openi_utils.randomHash(), openi_utils.randomHash());
      test.equal(   32, openi_utils.randomHash().length);

      test.ok(true);
      test.done();
   }

};
