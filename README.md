Peaple Parser
=============
Installation
------------
```
npm install
npm install -g jasmine
npm install -g jasmine-node
```
CLI App
-----------------
To use the CLI app run the following command after installation:

```
./scripts ./spec/data/bsv ./spec/data/csv ./spec/data/ssv
```

API App
--------
To run the API app run the following command:

```
npm start
```

Once the server is started you can run the following commands to hit the various API endpoings:

```
curl 'http://localhost:8888/records/gender'
```
```
curl 'http://localhost:8888/records/name'
```
```
curl 'http://localhost:8888/records/birthdate'
```
```
curl 'http://localhost:8888/records'
```
```
curl -d '{"lastname":"Rick","firstname":"James","gender":"female","color":"plum","birthdate":"1/26/1934"}' -H "Content-Type: application/json" http://localhost:8888/records
```




Testing
-------
```
npm test
```