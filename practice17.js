let sampleStr = 'Hello world, hello JavaScript';
console.log(sampleStr.split()); // 全体
console.log(sampleStr.split(' ')); // スペース
console.log(sampleStr.split(',')); // カンマ
console.log(sampleStr.split('')); // 1文字
console.log(sampleStr.split('', 5));

let sampleArry = ['あいうえお', 'かきくけこ', 'さしすせそ'];
console.log(sampleArry.join());
console.log(typeof sampleArry.join());
console.log(sampleArry.join(''));
console.log(typeof sampleArry.join(''));
console.log(sampleArry.join(' '));
console.log(typeof sampleArry.join(' '));

let VUE_APP_ENV_DATA =
  'https://www.google.com/chrome/,https://www.mozilla.org/ja/firefox/,https://www.microsoft.com/ja-jp/edge';
console.log(VUE_APP_ENV_DATA.split(','));
