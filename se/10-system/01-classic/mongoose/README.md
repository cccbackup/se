
```
PS D:\ccc\course\se\se\10-system\01-classic\mongoose> mongo test
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/test
MongoDB server version: 3.6.3
Server has startup warnings:
2019-11-26T17:26:41.019-0700 I CONTROL  [initandlisten]
2019-11-26T17:26:41.019-0700 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2019-11-26T17:26:41.020-0700 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2019-11-26T17:26:41.020-0700 I CONTROL  [initandlisten]
2019-11-26T17:26:41.021-0700 I CONTROL  [initandlisten] ** WARNING: This server is bound to localhost.
2019-11-26T17:26:41.021-0700 I CONTROL  [initandlisten] **          Remote systems will be unable to connect to this server.
2019-11-26T17:26:41.022-0700 I CONTROL  [initandlisten] **          Start the server with --bind_ip <address> to specify which IP
2019-11-26T17:26:41.022-0700 I CONTROL  [initandlisten] **          addresses it should serve responses from, or with --bind_ip_all to
2019-11-26T17:26:41.022-0700 I CONTROL  [initandlisten] **          bind to all interfaces. If this behavior is desired, start the
2019-11-26T17:26:41.023-0700 I CONTROL  [initandlisten] **          server with --bind_ip 127.0.0.1 to disable this warning.
2019-11-26T17:26:41.023-0700 I CONTROL  [initandlisten]
2019-11-26T17:26:41.024-0700 I CONTROL  [initandlisten]
2019-11-26T17:26:41.044-0700 I CONTROL  [initandlisten] ** WARNING: The file system cache of this machine is configured to be greater than 40% of the total memory. This can lead to increased memory pressure and poor performance.
2019-11-26T17:26:41.045-0700 I CONTROL  [initandlisten] See http://dochub.mongodb.org/core/wt-windows-system-file-cache
2019-11-26T17:26:41.045-0700 I CONTROL  [initandlisten]
> db.Cat.find()
> db.Cat.find({})
> db.cat.find()
> db.cat.find({})
> db.Cat.find()
> showdbs
2019-11-27T08:39:14.055+0800 E QUERY    [thread1] ReferenceError: showdbs is not defined :
@(shell):1:1
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
test    0.000GB
> use test
switched to db test
> db.Cat.find()
> show table
2019-11-27T08:39:41.037+0800 E QUERY    [thread1] Error: don't know how to show [table] :
shellHelper.show@src/mongo/shell/utils.js:953:11
shellHelper@src/mongo/shell/utils.js:706:15
@(shellhelp2):1:1
> db.getCollectionNames()
[ "cats" ]
> db.cats.find()
{ "_id" : ObjectId("5dddc3049959c214e83ba8e5"), "name" : "Zildjian", "__v" : 0 }
{ "_id" : ObjectId("5dddc3e81cd580161cfed7a0"), "name" : "Zildjian", "__v" : 0 }
{ "_id" : ObjectId("5dddc41baf638b07545ce0ed"), "name" : "Zildjian", "__v" : 0 }
{ "_id" : ObjectId("5dddc449572b6926149fae6a"), "name" : "Zildjian", "__v" : 0 }
{ "_id" : ObjectId("5dddc4597ac82a21b08b00e0"), "name" : "Zildjian", "__v" : 0 }
{ "_id" : ObjectId("5dddc4ee5315ad0ab4105a7c"), "name" : "Zildjian", "__v" : 0 }
{ "_id" : ObjectId("5dddc528335fa015e4ae88a7"), "name" : "Zildjian", "__v" : 0 }
>
```