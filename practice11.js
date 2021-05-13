// 配列自体に処理を加える。

// .join()
/*
配列の要素を全て連結し、文字列にして返す。
カンマ、または指定した文字列で、区切ることができる。引数に何も指定しないと、カンマで区切られることになる。

配列.join();
*/

let array1 = ["あ", "い", "う", "え", "お"];
let array1_2 = array1.join(); // 引数に何も指定していないので、カンマで区切られる。
let array1_3 = array1.join("-");
console.log(array1);
console.log(array1_2);
console.log(array1_3);

// .fill()
/*
要素を指定した要素で、置き換える。
指定した範囲のインデックスの要素を置き換える。
引数にインデックス番号を指定しなければ、最初から最後まで全ての要素を置き換える。
配列.fill(置き換えたい要素, 開始インデックス, 終了インデックス);
*/

let array2 = ["A", "B", "C", "D", "E", "F", "G"];
let array2_2 = array2.fill("X"); // 引数にインデックス番号が指定されていないので、全てが置き換わる。
let array2_3 = array2.fill("O", 2, 6);
console.log(array2_2);
console.log(array2_3);

// .reverse()
/*
配列の要素の順番を逆にする。
配列.reverse();
*/

let array3 = ["い", "ろ", "は", "に", "ほ", "へ", "と"];
let array3_2 = array3.reverse();
console.log(array3_2);