# 使用 mongodb 的網誌系統

```
PS D:\ccc\course\se\se\10-system\01-classic\mongoose> mongo blog
MongoDB shell version v3.6.3
connecting to: mongodb://127.0.0.1:27017/blog
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
> db.posts.find()
{ "_id" : ObjectId("5ddddc15427b351face83042"), "title" : "aaa", "body" : "aaaaa", "created_at" : ISODate("2019-11-27T02:14:45.265Z") }
{ "_id" : ObjectId("5ddddc1a427b351face83043"), "title" : "bbb", "body" : "bbbbb", "created_at" : ISODate("2019-11-27T02:14:50.276Z") }
{ "_id" : ObjectId("5ddddc1e427b351face83044"), "title" : "ccc", "body" : "ccccc", "created_at" : ISODate("2019-11-27T02:14:54.644Z") }
{ "_id" : ObjectId("5ddddc2f05ec761b2ca0dea3"), "title" : "ddd", "body" : "ddddd", "created_at" : ISODate("2019-11-27T02:15:11.653Z") }
>
```

