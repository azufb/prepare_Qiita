// 配列の処理
// 要素の追加と削除


// .push()
/*
配列の末尾に要素を追加する。
元の配列.push(追加したい要素);
*/
let array1 = ["わらびもち", "大福", "みたらし団子"];
let array1_2 = array1.push("柏餅");
console.log(array1);
console.log(array1_2); // 要素が追加された配列の要素数が返ってくる。

// .pop()
/*
配列の末尾の要素を取り除く。
元の配列.pop();
*/
let array2 = ["コーヒー", "オレンジジュース", "りんごジュース"];
let array2_2 = array2.pop();
console.log(array2);
console.log(array2_2); // 取り除かれた要素が返ってくる。

// .unshift()
/*
配列の先頭に要素を追加する。
元の配列.unshift(追加したい要素);
*/
let array3 = ["チョコレート", "源氏パイ", "パックンチョ"];
let array3_2 = array3.unshift("おせんべい");
console.log(array3);
console.log(array3_2); // 要素が追加された配列の要素数が返ってくる。

// .shift()
/*
配列の先頭から要素を取り除く。
元の配列.shift();
*/
let array4 = ["ティラミス", "ショートケーキ", "モンブラン", "ホットケーキ"];
let array4_2 = array4.shift();
console.log(array4);
console.log(array4_2); // 取り除かれた要素が返ってくる。

// 要素としてオブジェクトを追加できるのか？？
let array5 = ["マグロ", "さんま", "いか", "サーモン", "真鯛"];
let obj = {name: "いくら", price: 298};
let array5_2 = array5.push(obj);
console.log(array5);
console.log(array5_2); // オブジェクトが追加された配列の要素数

let array5_3 = array5.pop();
console.log(array5);
console.log(array5_3);

let array6 = ["にんじん", "レタス", "白菜", "かぼちゃ"];
let obj2 = {name: "きゅうり", price: 130 };
let array6_2 = array6.unshift(obj2);
console.log(array6);
console.log(array6_2); // オブジェクトが追加された配列の要素数

let array6_3 = array6.shift();
console.log(array6);
console.log(array6_3);