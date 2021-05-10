// for...in文
/*
    for (変数 in オブジェクト) {
        繰り返す処理
    }
    オブジェクトのプロパティを用いて、繰り返し処理を行う。
    変数に、オブジェクトのプロパティ名を入れる。
    繰り返されるごとに、オブジェクトが持つプロパティの名前が、変数部分に格納される。
    (プロパティ：名前と値の1セット。)
    配列には非推奨。
*/

function sample1() {
    for (const item in items) {
        console.log(`${item}：${items[item]}`);
    }
}

let items = {name: "チョコレートアソート6種パック", price: 150};

let sampleResponse1 = sample1(items);

// for...of文
/*
    for (変数 of 配列)　{
        繰り返す処理
    }
    反復可能オブジェクトの要素を変数に入れて、繰り返し処理を行う。
    主に、配列の要素の繰り返しで使われる。
    反復可能オブジェクトとは、配列などの、反復動作を持つオブジェクトのこと。Objectは含まれない。
    そのため、Objectは、for...inで処理できるが、for...ofでは処理できない。
*/

function sample2() {
    for (list of lists) {
        console.log(list);
    }
}

let lists = ["ピーチ", "アップル", "パイナップル", "グレープ"];

let sampleResponse2 = sample2(lists);