// for文

/*
繰り返し処理を行いたいときに使う。

for (初期化式; 条件式; 変化式) {
    繰り返し実行したい処理
}

初期化式 = 処理を始める前の初期状態。
条件式 = 処理を繰り返す条件。条件がfalseとなれば、処理は終了される。
変化式 = 処理を行う条件を変更する。処理が終わるごとに行う。
*/

function sample1() {
    for (let i=0; i<=10; i++) {
        result = i*2;
        console.log(result);
    }
}

let sampleResponse1 = sample1();

// 配列の要素を取り出してみた。
function sample2(foods) {
    for (let i=0; i<foods.length; i++) {
        console.log(foods[i]);
    }
}

let items = ['チョコレート', 'バナナ', 'クッキー', 'バニラエッセンス'];
let sampleResponse2 = sample2(items);


function sample3(obj) {
    for (let i=0; i<obj.length; i++) {
        console.log(
            `近所の${obj[i].store}で買った「${obj[i].name}」は${obj[i].price}円やったで〜。`
        )
    }
}

let itemList = [
    {
        store: 'マイナスイオン',
        name: 'サーモン',
        price: 280
    },
    {
        store: 'カトーヨーカドー',
        name: 'きゅうり5本',
        price: 108
    },
    {
        store: 'ワーソン',
        name: '特上牛カルビ弁当',
        price: 498
    },
    {
        store: 'ブラザーマート',
        name: 'お父さん食堂の軟骨の唐揚げ',
        price: 350
    },
    {
        store: 'ムーンドラッグ',
        name: 'リージョンマアム',
        price: 85
    }
]

let sampleResponse3 = sample3(itemList);

// while
/*
指定した条件になるまで繰り返し。
while = 〜まで
*/

function sample4() {
    let i=0;
    while (i<=10) {
        console.log(i);
        i++;
    }
}

let sampleResponse4 = sample4();

function sample5() {
    let i=1;
    do {
        console.log(i);
        i++;
    } while (i<=0)
}

let sampleResponse5 = sample5();