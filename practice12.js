// 配列の中に特定の要素が含まれているかどうかを判定してみる。

// includes()
/*
特定の要素が含まれているかどうかをtrueかfalseで返す。
*/

let sampleArray1 = ["あ", "い", "う", "え", "お"];
let sampleResponse1 = sampleArray1.includes("え");
console.log(sampleResponse1);
let sampleResponse1_2 = sampleArray1.includes("e");
console.log(sampleResponse1_2);

// indexOf()
/*
特定の要素が含まれていた場合、その要素が存在する最初の位置(インデックス番号)を返す。
含まれていない場合は、-1を返す。
先頭から数えるよ！
*/

let sampleArray2 = ["apple", "banana", "lemon", "cucumber", "melon"];
let sampleResponse2 = sampleArray2.indexOf("cucumber");
console.log(sampleResponse2);
let sampleResponse2_2 = sampleArray2.indexOf("orange");
console.log(sampleResponse2_2);

// lastIndexOf()
/*
特定の要素が含まれていた場合、その要素が存在する最後の位置(インデックス番号)を返す。
含まれていない場合は、-1を返す。
先頭から数えるよ！
*/

let sampleArray3 = ["Japan", "Germany", "France", "USA", "Japan", "Spain"];
let sampleResponse3 = sampleArray3.lastIndexOf("Japan");
console.log(sampleResponse3);
let sampleResponse3_2 = sampleArray3.lastIndexOf("Canada");
console.log(sampleResponse3_2);

// find()
/*
引数に渡されたテスト関数を満たす最初の要素を返す。
見つからなければ、undefinedを返す。
*/

let sampleArray4 = [500, 1000, 10000, 100, 50, 10, 5];
let sampleResponse4 = sampleArray4.find(elm => elm <= 10*5);
console.log(sampleResponse4);
let sampleResponse4_2 = sampleArray4.find(elm => elm > 100000);
console.log(sampleResponse4_2);


// findIndex()
/*
引数に渡されたテスト関数を満たす最初の要素の位置(インデックス番号)を返す。
見つからなければ、-1を返す。
*/

let sampleArray5 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
let sampleResponse5 = sampleArray5.findIndex(elm => elm > 2*7);
console.log(sampleResponse5);
let sampleResponse5_2 = sampleArray5.findIndex(elm => elm > 7*7);
console.log(sampleResponse5_2);