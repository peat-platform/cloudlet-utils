/**
 * Created by dconway on 02/09/15.
 */
'use strict';

var cloudlet  = require('../lib/cloudlet/main.js');
var dbc       = require('../lib/dbc/main');
var loglet    = require('../lib/loglet/main');
var tracklet  = require('../lib/tracklet/main');
var crypto    = require('crypto');

var assert = require('chai').assert;

describe('DBC Tests', function(){
   describe('assert',function(){
      it('should pass assert for not equals check', function () {
         try{
            dbc.assert('a' != 'b','error')
         }catch(e){
            assert(e === undefined,'There should not be an error thrown')
         }
      });
      it('should pass assert for equals check', function () {
         try{
            dbc.assert('a' == 'a','error')
         }catch(e){
            assert(e === undefined,'There should not be an error thrown')
         }
      });
      it('should throw error for not equals check', function () {
         try{
            dbc.assert('a' != 'a','error')
         }catch(e){
            assert(e == 'error','There should be an error thrown')
         }
      });
      it('should throw for equals check', function () {
         try{
            dbc.assert('a' == 'b','error')
         }catch(e){
            assert(e == 'error','There should be an error thrown')
         }
      });
   });
   describe('hasMember',function(){
      it('should pass', function () {
         try{
            dbc.hasMember({'a':'b'},'a')
         }catch(e){
            assert(e === undefined,'There should not be an error thrown')
         }
      });
      it('should fail', function () {
         try{
            dbc.hasMember({'a':'b'},'b')
         }catch(e){
            assert(e.toString().indexOf('Object is missing member: b') !== -1,'There should be an error thrown')
         }
      });
   });
   describe('hasMemberIn',function(){
      it('should pass with member in array', function () {
         try{
            dbc.hasMemberIn({'a':'b'},'a',['a','b'])
         }catch(e){
            assert(e === undefined,'There should not be an error thrown')
         }
      });
      it('should fail with no member in object', function () {
         try{
            dbc.hasMemberIn({'a':'b'},'b',['a','b'])
         }catch(e){
            assert(e.toString().indexOf('Object is missing member:') !== -1,'There should be an error thrown')
         }
      });
      it('should fail with no member in array', function () {
         try{
            dbc.hasMemberIn({'a':'b'},'a',['c'])
         }catch(e){
            assert(e.toString().indexOf('should be one of the following') !== -1,'There should be an error thrown')
         }
      });
   });
   describe('conditionalHasMember',function(){
      it('should pass with true condition', function () {
         try{
            dbc.conditionalHasMember({'a':'b'},'a', 'a'==='a')
         }catch(e){
            assert(e === undefined,'There should not be an error thrown')
         }
      });
      it('should fail with true condition', function () {
         try{
            dbc.conditionalHasMember({'a':'b'},'b', 'a' === 'a')
         }catch(e){
            assert(e.toString().indexOf('Object is missing member') !== -1,'There should not be an error thrown')
         }
      });
      it('should fail with false condition', function () {
         try{
            dbc.conditionalHasMember({'a':'b'},'a', 'a' != 'a')
         }catch(e){
            assert(e.toString().indexOf('Object is missing member') !== -1,'There should not be an error thrown')
         }
      });
   })
});

describe('Cloudlet Tests', function(){
   var cloudletID     = "c_897b0ef002da79321dcb0d681cb473d0";
   var cloudletURL    = "https://dev.peat-platform.org/api/v1/objects/c_897b0ef002da79321dcb0d681cb473d0";
   var typeID         = "t_5d94e8484c8d18aa243fc210a0fc395a-1334";
   var typeURL        = "https://dev.peat-platform.org/api/v1/types/t_5d94e8484c8d18aa243fc210a0fc395a-1334";
   var objectID       = "0b1d1210-283c-407d-87d9-b88cf218379a";
   var objectURL      = "https://dev.peat-platform.org/api/v1/objects/c_897b0ef002da79321dcb0d681cb473d0/0031c89e-72be-42f3-c0e9-58e20bcedb53";
   var attachmentID   = "a031c89e-72be-42f3-c0e9-58e20bcedb53";
   var attachmentURL  = "https://dev.peat-platform.org/api/v1/attachments/c_897b0ef002da79321dcb0d681cb473d0/a031c89e-72be-42f3-c0e9-58e20bcedb53";
   var subscriptionID = "s_5d94e8484c8d18aa243fc210a0fc395a-1334";

   describe('Cloudlet IDs',function() {
      it('should return true for CloudletId', function () {
         assert(cloudlet.isCloudletId(cloudletID))
      });
      it('should extract cloudletID from URL', function () {
         var extractedCloudlet = cloudlet.extractCloudletId(cloudletURL);
         assert(cloudlet.isCloudletId(extractedCloudlet))
      });
      it('should return false for CloudletId with whitespaces', function () {
         assert.isFalse(cloudlet.isCloudletId(" "+cloudletID+ " "))

      });
      it('should return null for incorrect ID', function () {
         assert.isNull(cloudlet.extractCloudletId(typeID))

      });
      it('should return CloudletId from authtoken', function () {

      });
   });
   describe('Type IDs',function() {
      it('should return true for TypeID', function () {
         assert(cloudlet.isTypeId(typeID))
      });
      it('should extract typeID from URL', function () {
         var extractedType = cloudlet.extractTypeId(typeURL);
         assert(cloudlet.isTypeId(extractedType))
      });
      it('should return false for TypeID with whitespaces', function () {
         assert.isFalse(cloudlet.isTypeId(" "+typeID+ " "))

      });
      it('should return null for incorrect ID', function () {
         assert.isNull(cloudlet.extractTypeId(objectID))

      });
   });
   describe('Object IDs',function() {
      it('should return true for ObjectID', function () {
         assert(cloudlet.isObjectId(objectID))
      });
      it('should extract ObjectID from URL', function () {
         var extractedObject = cloudlet.extractObjectId(objectURL);
         assert(cloudlet.isObjectId(extractedObject))
      });
      it('should return false for ObjectID with whitespaces', function () {
         assert.isFalse(cloudlet.isObjectId(" "+objectID+ " "))

      });
      it('should return null for incorrect ID', function () {
         assert.isNull(cloudlet.extractObjectId(attachmentID))
      });
      it('should return generated ObjectID', function () {
         var objid = cloudlet.generateUUID("object");
         assert(cloudlet.isObjectId(objid))
      });
   });
   describe('Attachment IDs',function() {
      it('should return true for AttachmentID', function () {
         assert(cloudlet.isAttachmentId(attachmentID))
      });
      it('should extract AttachmentID from URL', function () {
         var extractedAttachment = cloudlet.extractAttachmentId(attachmentURL);
         assert(cloudlet.isAttachmentId(extractedAttachment))
      });
      it('should return false for AttachmentID with whitespaces', function () {
         assert.isFalse(cloudlet.isAttachmentId(" "+attachmentID+ " "))

      });
      it('should return null for incorrect ID', function () {
         assert.isNull(cloudlet.extractAttachmentId(cloudletID))
      });
      it('should return generated AttachmentID', function () {
         var attid = cloudlet.generateUUID("attachment");
         assert(cloudlet.isAttachmentId(attid))
      });
   });
   describe('Subscriptions IDs',function() {
      it('should return true for SubscriptionID', function () {
         assert(cloudlet.isSubscriptionId(subscriptionID))
      });
      it('should return false for SubscriptionID with whitespaces', function () {
         assert.isFalse(cloudlet.isSubscriptionId(" "+subscriptionID+ " "))

      });
   });
   describe('JSON Functions',function() {
      var json = {"z":1, "a":2, "c": 3};
      var nestedJSON = {"w":json,"b":{"t":1,"e":{"v":1,"f":2}}};
      var throwJSON = {"w":{"b":{"t":1,"e":{"v":1,"f":{"g":4}}}}};

      it('should return sorted JSON', function () {
         var sorted = cloudlet.sort(json);
         assert('{"a":2, "c":3, "z": 1}', sorted, "JSON should be sorted")
      });
      it('should return sorted nested JSON', function () {
         var pSorted = cloudlet.sort(nestedJSON);
         assert('{ "b": { "e": { "f": 2, "v": 1 }, "t": 1 }, "w": { "a": 2, "c": 3, "z": 1 } }', pSorted, "JSON should be sorted")
      });
      it('should throw nested JSON Error', function () {
         try{
            cloudlet.sort(throwJSON)
         }catch(e){
            assert("Maximum object depth reached", e.message, "Error should be depth Error")
         }
      });
      it('should minify JSON', function () {
         var minify = cloudlet.norm(json);
         assert('{"z":1,"a":2,"c":3}',minify,"JSON should be minfied")
      });
      it('should return hash of JSON', function () {
         var jsonHash = cloudlet.hash(json);
         var hash = crypto.createHash('md5').update(cloudlet.norm(json)).digest('hex') + '-' + cloudlet.norm(json).length;
         assert(jsonHash === hash, "Hashes should be equal");
      });
   });
   it("should return true for Array", function(){
      assert(cloudlet.isArray(["1","2","3"]))
   });
   it("should return false for not Array", function(){
      assert.isFalse(cloudlet.isArray("hello"))
   });

   describe("DataFormatter", function(){
      describe("Type Helper", function(){
         it("should process type", function(){

         })
      });
   });
});

describe('Loglet Tests', function(){
   var logger;
   it("should create logger", function(){
      logger = loglet.createLogger("test", "info","./testLog.log");
      assert.notEqual(undefined, logger, "Logger should not be undefined")
   })
});
