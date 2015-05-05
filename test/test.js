var openi_utils = require('../lib/main.js')


for (var i = 0; i < 10; i++){
   console.log(openi_utils.randomHash())
}


for (var i = 0; i < 10; i++){
   console.log(openi_utils.generateUUID("object"))
}


for (var i = 0; i < 10; i++){
   console.log(openi_utils.generateUUID("attachment"))
}



console.log(openi_utils.isCloudletId("https://dev.openi-ict.eu/api/v1/objects/c_897b0ef002da79321dcb0d681cb473d0"))
console.log(openi_utils.isCloudletId("c_897b0ef002da79321dcb0d681cb473d0"))


console.log(openi_utils.extractCloudletId("https://dev.openi-ict.eu/api/v1/objects/c_897b0ef002da79321dcb0d681cb473d0/0031c89e-72be-42f3-c0e9-58e20bcedb53"))
console.log(openi_utils.extractCloudletId("https://dev.openi-ict.eu/api/v1/objects/c_897b0ef002da79321dcb0d681cb473d0"))
console.log(openi_utils.extractCloudletId("https://dev.openi-ict.eu/api/v1/objects/c_897b0ef002da79321dcb0d681cb4730/asd"))
console.log(openi_utils.extractCloudletId("c_897b0ef002da79321dcb0d681cb473d0"))



console.log(openi_utils.isTypeId("https://dev.openi-ict.eu/api/v1/types/t_5d94e8484c8d18aa243fc210a0fc395a-1334"))
console.log(openi_utils.isTypeId("t_5d94e8484c8d18aa243fc210a0fc395a-1334"))
console.log(openi_utils.isTypeId("t_5d94e8484c8d18aa243fc210a0fc395a-1334 "))


console.log(openi_utils.extractTypeId("https://dev.openi-ict.eu/api/v1/objects/c_897b0ef002da79321dcb0d681cb473d0/0031c89e-72be-42f3-c0e9-58e20bcedb53"))
console.log(openi_utils.extractTypeId("https://dev.openi-ict.eu/api/v1/types/t_5d94e8484c8d18aa243fc210a0fc395a-1334"))
console.log(openi_utils.extractTypeId("t_5d94e8484c8d18aa243fc210a0fc395a-1334"))


console.log(openi_utils.isObjectId("https://dev.openi-ict.eu/api/v1/objects/c_897b0ef002da79321dcb0d681cb473d0/0031c89e-72be-42f3-c0e9-58e20bcedb53"))
console.log(openi_utils.isObjectId("0031c89e-72be-42f3-c0e9-58e20bcedb53"))
console.log(openi_utils.isObjectId("ab1d1210-283c-407d-87d9-b88cf218379a"))


console.log(openi_utils.extractObjectId("https://dev.openi-ict.eu/api/v1/objects/c_897b0ef002da79321dcb0d681cb473d0/0031c89e-72be-42f3-c0e9-58e20bcedb53"))
console.log(openi_utils.extractObjectId("https://dev.openi-ict.eu/api/v1/objects/c_897b0ef002da79321dcb0d681cb473d0"))
console.log(openi_utils.extractObjectId("https://dev.openi-ict.eu/api/v1/objects/c_897b0ef002da79321dcb0d681cb4730/acb62b21-4653-4966-b2f8-eeee8507f816"))
console.log(openi_utils.extractObjectId("0031c89e-72be-42f3-c0e9-58e20bcedb53"))

console.log(openi_utils.isAttachmentId("https://dev.openi-ict.eu/api/v1/objects/c_897b0ef002da79321dcb0d681cb473d0/0031c89e-72be-42f3-c0e9-58e20bcedb53"))
console.log(openi_utils.isAttachmentId("0031c89e-72be-42f3-c0e9-58e20bcedb53"))
console.log(openi_utils.isAttachmentId("ab1d1210-283c-407d-87d9-b88cf218379a"))


console.log(openi_utils.extractAttachmentId("https://dev.openi-ict.eu/api/v1/objects/c_897b0ef002da79321dcb0d681cb473d0/0031c89e-72be-42f3-c0e9-58e20bcedb53"))
console.log(openi_utils.extractAttachmentId("https://dev.openi-ict.eu/api/v1/objects/c_897b0ef002da79321dcb0d681cb473d0"))
console.log(openi_utils.extractAttachmentId("https://dev.openi-ict.eu/api/v1/objects/c_897b0ef002da79321dcb0d681cb4730/acb62b21-4653-4966-b2f8-eeee8507f816"))
console.log(openi_utils.extractAttachmentId("0031c89e-72be-42f3-c0e9-58e20bcedb53"))


console.log(openi_utils.getCloudletId("eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI3OTBjZDk4Mi00MzU3LTQ0YWUtOTkzYi01MTljN2ZiODk4ZWEiLCJzdWIiOiIyNGFjYTVmNS0xMWFhLTRmYmEtYTBlMC0zZWU4MDY3ZjVkMTIiLCJzY29wZSI6WyJvcGVuaWQiXSwiY2xpZW50X2lkIjoiYWR2X3NlIiwiY2lkIjoiYWR2X3NlIiwidXNlcl9pZCI6IjI0YWNhNWY1LTExYWEtNGZiYS1hMGUwLTNlZTgwNjdmNWQxMiIsInVzZXJfbmFtZSI6ImFkdjEiLCJlbWFpbCI6ImVtYWlsQGV4YW1wbGUub3JnIiwiaWF0IjoxNDE0MTg5NDc0LCJleHAiOjE0MTQyMzI2NzQsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91YWEvb2F1dGgvdG9rZW4iLCJhdWQiOlsib3BlbmlkIl19.iLVESEtkGkFc_KZQH-p2V7P0PgF8aH2vZDcyOM_ZID-RwZc4ZSdYd4T9wsviEaRyETFcHGI-1rVu3s7Yho4rtA"))