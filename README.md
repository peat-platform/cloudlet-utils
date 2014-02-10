# openi-cloudlet-utils

Utils for the OPENi Cloudlet Platform

## Getting Started
Install the module with: `npm install git+ssh://git@gitlab.openi-ict.eu:openi-cloudlet-utils.git`

To build the project enter the following commands.

Note: npm install is only required the first time the module is built or if a new dependency is added. There are a number of grunt tasks that can be executed including: test, cover, default and jenkins. The jenkins task is executed on the build server, if it doesn't pass then the build will fail.

```bash
git clone git@gitlab.openi-ict.eu:openi-cloudlet-utils.git
cd openi-cloudlet-utils
npm install
grunt jenkins
```

## Documentation


## Examples

```javascript

var openi_utils  = require('openi-cloudlet-utils');

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

openi_utils.hash(json_1)

\\OUTPUT
\\4542a76906b243bae19fb909b62fc437-161


openi_utils.sort(json_1)

#OUTPUT
{ '@context':
   { abc: { '@id': 'foo', '@type': 'bar' },
     def: { '@id': 'baz', '@type': 'moo' } },
  '@id': '1234',
  '@type': '5678',
  properties: { a: [ '1', '2', '3' ], b: [ 'f', 'g', 'h' ] }
}


openi_utils.norm(json_1)

#OUTPUT
{"@context":{"abc":{"@id":"foo","@type":"bar"},"def":{"@id":"baz","@type":"moo"}},"@id":"1234","@type":"5678","properties":{"a":["1","2","3"],"b":["f","g","h"]}}

```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
**0.1.0** *(10/02/14 johannes.hange@fokus.fraunhofer.de)* Includes Hashing function.

## License
Copyright (c) 2013 OPENi
Licensed under the MIT license.
