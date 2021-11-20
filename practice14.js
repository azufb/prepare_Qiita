let drinkMenu = [
  'コーヒー',
  '紅茶',
  '緑茶',
  'ほうじ茶',
  'フラペチーノ',
  'カフェオレ',
];
console.log(drinkMenu.indexOf('ほうじ茶'));
console.log(`ほうじ茶は${drinkMenu.indexOf('ほうじ茶')}番目です。`);

console.log(drinkMenu.indexOf('ウーロン茶'));
console.log(drinkMenu.indexOf('オレンジジュース'));
console.log(drinkMenu.indexOf('フラペチーノ', 3));

let puddingMenu = [
  'こだわりプリン',
  '生クリームプリン',
  'まぼろしプリン',
  'ミルクプリン',
  'ごまプリン',
];
console.log(puddingMenu.includes('まぼろしプリン'));
console.log(puddingMenu.includes('抹茶プリン'));
console.log(puddingMenu.includes('ごまプリン', 3));
