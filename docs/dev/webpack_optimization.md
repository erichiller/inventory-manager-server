# Webpack Production Optimization


## Chunk size generation comparison 

### With `SplitChunks`
KB              | File Name
----------------|-------------------------------
4,755           | 112.5f27c2d5.js
5,582           | 288.e312c2af.js
1,261           | 399.29ad71ea.js
28,173          | 434.e8ac116f.js
1,233           | 929.7cd711bc.js
3,039           | favicon.png
351,276         | main.536c4bc1.js
2,983           | runtime.21f4bf41.js
5,144,237       | vendor.c9afebfe.js
4,243           | vendor.c9afebfe.js.LICENSE.txt
**Total Size:** | **5,546,782**


### Without `SplitChunks`
KB              | File Name
----------------|-----------------------------
4,754           | 112.f2632284.js
11,637          | 288.c618d10e.js
67,931          | 332.0709f784.js
869,840         | 339.8c85a701.js
1,109           | 339.8c85a701.js.LICENSE.txt
21,395          | 402.c26b285c.js
43,160          | 464.2f646edf.js
460,293         | 519.c8af3f31.js
423,429         | 597.bcbcc54b.js
453             | 597.bcbcc54b.js.LICENSE.txt
29,668          | 622.160ccbbb.js
2,533           | 634.3b28a898.js
147,718         | 637.8a4f8f36.js
348,922         | 689.4ca2fa06.js
46,637          | 737.a74b9de3.js
11,641          | 895.7e5cc130.js
465             | index.html
3,038,304       | main.5dc9b677.js
2,679           | main.5dc9b677.js.LICENSE.txt
**Total Size:** | **5,532,568**
