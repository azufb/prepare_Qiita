// スプレッド構文のPractice!

// 関数を作る。引数として渡された値を表示するもの。
function setOrder(order1, order2, order3, order4) {
    document.write(`${order1}, ${order2}, ${order3}, ${order4}`);
}

// 配列を作る。
const orders = ['ホットコーヒー', 'アイスコーヒー', '紅茶', 'ほうじ茶'];

// 関数を呼び出して実行。引数には、配列ordersの要素を渡す。
setOrder(...orders);

/*
スプレッド構文とは、関数に値を渡すときに、配列を展開して渡す方法。
関数に引数が複数ある時に、配列の要素を1つずつ取り出して渡すのは、面倒...
スプレッド構文を使うことで、配列の要素を1つずつ渡すことができる！

スプレッド構文の書き方
関数名(...配列名);

配列の要素をそのまま、関数に引数として渡すときなど、スプレッド構文を使えば、簡単にできる！
*/

// 残余引数
// スプレッド構文に似たものに、「残余引数」というものがある！

// 関数を作る。引数として渡された値を表示するもの。
function setOrder2(firstOrder, ...restOrder) {
    document.write(`${firstOrder}`);
    document.write(`${restOrder}`);
    console.log(firstOrder);
    console.log(restOrder);
}

// 関数を呼び出して、実行する。複数の値を引数として渡す。
setOrder2('ホットコーヒー', 'アイスコーヒー', '紅茶', 'ほうじ茶');

function setOrder3(...restOrder) {
    document.write(restOrder);
    console.log(restOrder);
}

setOrder3('ホットコーヒー', 'アイスコーヒー', '紅茶', 'ほうじ茶', 'キャラメルマキアート', 'エスプレッソ', 'いちごミルク', 'バナナジュース', '抹茶');

/*
残余引数とは、渡される引数の数がわからない場合、それらをまとめて配列として受け取ることができる。

残余引数の書き方
function 関数名(...残余引数) {
    処理
}

呼び出し時
関数名(任意の数の引数1, 任意の数の引数2, 任意の数の引数3, ....., 任意の数の引数n);
*/