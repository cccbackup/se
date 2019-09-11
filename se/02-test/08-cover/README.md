# 練習 -- instanbul (nyc)

* 參考: https://istanbul.js.org/docs/tutorials/mocha/

Coverage Test

```
PS D:\ccc\course\se\se\02-test\08-cover> npm i
npm WARN npm npm does not support Node.js v10.16.0
npm WARN npm You should probably upgrade to a newer version of node as we
npm WARN npm can't make any promises that npm will work with this version.
npm WARN npm Supported releases of Node.js are the latest release of 4, 6, 7, 8, 9.
npm WARN npm You can find the latest version at https://nodejs.org/
npm WARN ccclodash@0.0.1 No repository field.

added 154 packages in 23.942s
PS D:\ccc\course\se\se\02-test\08-cover> npm run coverage
npm WARN npm npm does not support Node.js v10.16.0
npm WARN npm You should probably upgrade to a newer version of node as we
npm WARN npm can't make any promises that npm will work with this version.
npm WARN npm Supported releases of Node.js are the latest release of 4, 6, 7, 8, 9.
npm WARN npm You can find the latest version at https://nodejs.org/

> ccclodash@0.0.1 coverage D:\ccc\course\se\se\02-test\08-cover
> nyc mocha



  ccclodash
    chunk
      √ _.chunk(['a', 'b', 'c', 'd'], 2) equalTo [ [ 'a', 'b' ], [ 'c', 'd' ] ]
      √ _.chunk(['a', 'b', 'c', 'd'], 3) equalTo [ [ 'a', 'b', 'c' ], [ 'd' ] ]
      √ _.chunk(['a', 'b', 'c', 'd'], 3) notEqualTo [ [ 'a', 'b'], ['c' , 'd' ] ]

  ccclodash
    compact
      √ _.compact([0, 1, false, 2, '', 3]) equalTo [ 1, 2, 3 ]

  ccclodash
    concat
      √ _.concat(array, 2, [3], [[4]]) equalTo [1, 2, [3], [[4]]]
      √ _.concat(array, 2, [3], [[4]]) equalTo [ 1, 2, 3 ]


  6 passing (101ms)

---------------|----------|----------|----------|----------|-------------------|
File           |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
---------------|----------|----------|----------|----------|-------------------|
All files      |      100 |      100 |      100 |      100 |                   |
 08-cover      |      100 |      100 |      100 |      100 |                   |
  ccclodash.js |      100 |      100 |      100 |      100 |                   |
 08-cover/lib  |      100 |      100 |      100 |      100 |                   |
  chunk.js     |      100 |      100 |      100 |      100 |                   |
  compact.js   |      100 |      100 |      100 |      100 |                   |
  concat.js    |      100 |      100 |      100 |      100 |                   |
---------------|----------|----------|----------|----------|-------------------|
```

