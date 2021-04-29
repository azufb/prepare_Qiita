// 関数を自分で作ってみる！→オリジナルの関数を、ユーザー定義関数と呼ぶ。
function decoratedTxt(food) {
    return `★★★${food}★★★`
}

let response = decoratedTxt('杏仁豆腐');
console.log(response);