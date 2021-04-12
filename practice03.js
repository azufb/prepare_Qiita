// 正規表現
/* 正規表現とは
文字と記号を使って、パターンを指定し、そのパターンに合った文字を検索をする。
文字列だけでなく、数字も検索対象に含まれる。
書き方には、「正規表現リテラル」と「new RegExp()を使う」の2種類がある。

「正規表現リテラル」
/パターン/フラグ

「new RegExp()」
new RegExp('パターン', 'フラグ');

パターン指定で使われる記号(正規表現パターン)
ABC
「ABC」と言う文字列
[ABC]
A、B、Cのいずれか1文字
[^ABC]
A、B、C以外のいずれか1文字
[A-Z]
A〜Zの間の1文字
A|B|C
A、B、Cのいずれか
[0-9]
0〜9のいずれか

(量指定)
X*
0文字以上のX
X?
0または1文字のX
X+
1文字以上のX
X{n}
Xとn回一致
X{n,}
Xとn回以上一致
X{m,n}
Xとm〜n回一致

(位置指定)
^
行の先頭に一致
$
行の末尾に一致

(文字セット)
.
任意の1文字に一致
\w
大文字/小文字の英字、数字、アンダースコアに一致。([A-Za-z0-9_]と同意。)
\W
文字以外に一致([^\w]と同意。)
\d
数字に一致([0-9]と同意。)
\D
数字以外に一致([^0-9]と同意。)
\n
改行に一致
\r
復帰(キャリッジリターン)に一致
\t
タブ文字に一致
\s
空白文字に一致([\n\r\t\v\f]と同意。)
\S
空白以外の文字に一致([^\s]と同意。)
\〜
「〜」で表される文字
*/

var p = /[0-9]/;
var str = 'テレフォンショッピング!午後3時までにお電話頂いた方には、割引！お電話は、0120-123-456まで！'
var result = p.exec(str);
console.log(result);

var q = new RegExp('[0-9]', 'gi');
var str = 'テレフォンショッピング!午後3時までにお電話頂いた方には、割引！お電話は、0120-123-456まで！'
var result2 = q.exec(str);
console.log(result2);

let r = /[0-9]/gi;
var str = 'テレフォンショッピング!午後3時までにお電話頂いた方には、割引！お電話は、0120-123-456まで！'
let result3 = str.match(r);
console.log(result3);

let result4 = str.match(q);
console.log(result4);

let sample5 = /。|$/;
let txt = 'こんにちは。';
result5 = txt.replace(sample5, '、JavaScriptよ！');
console.log(result5);

let sample6 = new RegExp('。', 'gi');
txt = 'こんにちは。';
result6 = txt.replace(sample6, '、JavaScriptよ！');
console.log(result6);