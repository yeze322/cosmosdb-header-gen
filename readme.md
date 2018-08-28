#### Usage

```javascript
import { generateCosmosDBHeaders } from 'cosmosdb-header-gen'

let headers = generateCosmosDBHeaders('GET', 'docs', 'dbs/{dbname}/colls/{collectioname}', '{yourMasterKey}');
```

#### Example result headers:
```json
{
  'Content-Type': 'application/json',
  'Authorization': 'type%3Dmaster%26ver%3D1.0%26sig%3Df1Uw5FGQwE4N4pw8sbCkHZCi32zxVLSg%',
  'x-ms-version': '2017-02-22',
  'x-ms-date': 'Thu, 05 Jul 2018 09:37:39 GMT',
};
```