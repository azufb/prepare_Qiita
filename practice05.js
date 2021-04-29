// 関数について

/* 関数とは？
関数とは、必要な必要な処理を記述した、オブジェクト。
1つのアプリケーションで言うところの、部品。
1つのアプリケーションを車に例えると...
車全体＝アプリ全体
エンジン(部品)＝関数
ブレーキ(部品)＝関数
アクセル(部品)＝関数
部品がないと、車は動き出すことができない！
関数と言う部品がないと、アプリケーションは動き出すことができない！
*/

/* ビルトインオブジェクト
JavaScriptには、ビルトインオブジェクトの関数が存在する。
代表的なものに、NumberオブジェクトやMathオブジェクトの以下のような関数が挙げられる。
*/

// Number.isNaN(n)
console.log(Number.isNaN(NaN));
console.log(Number.isNaN('7'));


// Number.isFinite(n)

// Number.isInteger(n) 整数であるか判断
console.log(Number.isInteger(5.5));
console.log(Number.isInteger(7));
console.log(Number.isInteger('なな'));

// Math.abs(n) nの絶対値を返す
console.log(Math.abs(-77.5));

// Math.trunc(n) nの整数部分を返す
console.log(Math.trunc(77.5));

// Math.floor(n) n以下の最大の整数を返す 小数点以下を除いたもの
console.log(Math.floor(77.8));

// Math.ceil(n) n以上の最小の整数を返す
console.log(Math.ceil(77.8));
console.log(Math.ceil(77.4));

// Math.round(n) nを四捨五入した整数を返す はみ出た小数点以下を丸める感覚
console.log(Math.round(77.8)); // 78
console.log(Math.round(77.4)); // 77

// Math.max(n1, n2, n3,....,n4) 引数に渡された値の中で最大の値
console.log(Math.max(2, 5, 1, 9, 33, 99, 0, 100, 77, 7));

// Math.max(n1, n2, n3,....,n4) 引数に渡された値の中で最小の値
console.log(Math.min(2, 5, 1, 9, 33, 99, 0, 100, 77, 7));