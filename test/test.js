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