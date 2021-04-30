// if文

/*
if文によって、条件によって、処理を変化させることができる。
*/
function sample1(height) {
    if (height >= 102) {
        // trueのとき
        console.log(`${height}cmは、102cm以上なので、このアトラクションに乗ることができます。`);
    } else {
        // falseのとき
        console.log(`申し訳ございません。${height}cmは、102cm未満ですので、このアトラクションに乗ることができません。`);
    }
}

let sampleResponse1 = sample1(155.7);
let sampleResponse1_2 = sample1(90.3);

// else ifで、前の条件がfalseだったとき、別の条件を提示することができる！
function sample2(score) {
    if (score >= 80) {
        // 「scoreが80以上」がtrueのとき
        console.log(`あなたは、${score}点だったので、成績は、Aです。`);
    } else if (score >= 60) {
        // 「scoreが60以上80未満」がtrueのとき
        console.log(`あなたは、${score}点だったので、成績は、Bです。`);
    } else if (score >= 40) {
        // 「scoreが40以上60未満」がtrueのとき
        console.log(`あなたは、${score}点だったので、成績は、Cです。補習対象です。教室の掲示板を確認してください。`);
    } else {
        // 上の条件3つ全てに対し、falseのとき ＝ scoreが40未満のとき
        console.log(`あなたは、${score}点でした。コース変更対象です。講義後に事務室に来てください。`);
    }
}

let sampleResponse2 = sample2(23);
let sampleResponse2_2 = sample2(55);
let sampleResponse2_3 = sample2(78);
let sampleResponse2_4 = sample2(90);

// switch文
/*
値に応じて処理を行う
*/

function sample3(item) {
    switch (item) {
        case 'Aセット':
            // 引数に渡されたitemがAセットのとき
            console.log('Aセットは、サラダとドリンクが付いて980円です。');
            break;
        case 'Bセット':
            // 引数に渡されたitemがBセットのとき
            console.log('Bセットは、サラダとドリンク、デザートが付いて1050円です。');
            break;
        case 'キッズセット':
            // 引数に渡されたitemがキッズセットのとき
            console.log('キッズセットは、お子様プレートに選べるおもちゃが付いて780円です。');
            break;
        default:
            // 上の条件3つ全てに対し、どれにも当てはまらなかったとき
            console.log('ランチタイムは、単品ではご注文頂けません。セットプランの中からお選びください。');
            break;
    }
}

let sampleResponse3 = sample3('Bセット');
let sampleResponse3_2 = sample3('キッズセット');
let sampleResponse3_3 = sample3('Aセット');
let sampleResponse3_4 = sample3('煮込みハンバーグ');

// 例外処理
/*
例外が発生しそうな処理をtry{}内に書き、例外が発生すると、catch{}内に書いた処理を実行する。
例外をキャッチ(catch)する。
*/

function sample4(reigai) {
    function sample4_1(reigai) {
        console.log(reigai.toString());
    }
    sample4_1(reigai);
}

try {
    console.log('例外処理');
    sample4(null);
} catch {
    console.log('nullは処理できません。');
}
