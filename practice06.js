// 関数を自分で作ってみる！→オリジナルの関数を、ユーザー定義関数と呼ぶ。
function decoratedTxt(food) {
    return `★★★${food}★★★`
}

let response = decoratedTxt('杏仁豆腐');
console.log(response);

function sample1(drink) {
    // 引数に渡した値を変数drinkに格納し、変数drinkを使って、処理を行っている！
    return `${drink}は美味い！`;
}

let sampleResponse1 = sample1('芋焼酎');
console.log(sampleResponse1);

function sample2(age) {
    if (age >= 18) {
        return `${age}歳は、18歳以上ですので、入場料は、1,500円です。`
    }　else if (9 <= age && age <= 17) {
        // 2つ以上の値の比較をして、その間の範囲を条件にする場合、&&で連結して表現する。
        return `${age}歳は、9歳以上17歳以下ですので、入場料は、1,000円です。`
    } else {
        return `${age}歳は、無料招待の対象です。`
    }
}

let sampleResponse2 = sample2(5);
let sampleResponse2_2 = sample2(25);
let sampleResponse2_3 = sample2(16);
console.log(sampleResponse2);
console.log(sampleResponse2_2);
console.log(sampleResponse2_3);

function sample3(itemObj) {
    // 引数に、オブジェクトを渡すパターン。
    // 渡されたオブジェクトのプロパティ(名前と値の1セット)から、名前と値を取得してみる処理。
    return `${itemObj.item}は、${itemObj.price}円です。`
}

let aboutItem = {item: 'Mac Book Pro', price: '240,000'}

let sampleResponse3 = sample3(aboutItem);
// ユーザー定義関数sample3の引数には、オブジェクトであるaboutItemを渡している。
console.log(sampleResponse3);

function sample4(item1, item2, item3) {
    return `${item1.item}は、${item1.price}円、${item2.item}は、${item2.price}円、${item3.item}は、${item3.price}円です。`
}

let items = [
    {item: 'トマト', price: 98},
    {item: 'キャベツ', price: 158},
    {item: '大根', price: 190}
]

let sampleResponse4 = sample4(...items);
console.log(sampleResponse4);