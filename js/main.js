// // let p = document.getElementById("text");
// // let textlists = [
// //     "Hello world",
// //     "This is my App",
// //     "How are you?",
// //     "Hello Hello"
// // ];

// // let checkTexts = [];
// // console.log("checkTexts");
// // function createText() {
// //     let rnd = Math.floor(Math.random() * textlists.length);
// //     p.textContent = '';
// //     checkTexts = textlists[rnd].split('').map(function (value) {
// //         let span = document.createElement("span");
// //         span.textContent = value;
// //         p.appendChild(span);

// //         return span;
// //     });
// // }
// // console.log("span");





// // console.log(checkTexts);

// // p.textContent = textlists[0];

// // document.addEventListener("keydown", keyDown);

// // function keyDown(e) {
// //     if (e.key === checkTexts[0]) {
// //         checkTexts[0].className = "add-blue";

// //         checkTexts.shift();
// //         if (!checkTexts.length) createText();
// //     }
// // }

// let p = document.getElementById('text');

// //タイピングする文字列をここで用意しておく
// let textLists = [
//     'Hello World',
//     'This is my App',
//     'How are you?',
//     'Hello Hello',
//     'I love JavaScript!',
//     'Good morning',
//     'I am Japanese',
//     'Let it be'
// ];
// let checkTexts = [];


// createText();

// function createText() {
//     //文字列をランダムに取得する
//     let rnd = Math.floor(Math.random() * textLists.length);

//     //前の文字列を削除してから次の文字列を表示する
//     p.textContent = '';

//     //文字列を1文字ずつに分解して、それぞれにspanタグを挿入する
//     checkTexts = textLists[rnd].split('').map(function (value) {
//         let span = document.createElement('span');

//         span.textContent = value;
//         p.appendChild(span);

//         return span;
//     });
// }

// document.addEventListener('keydown', keyDown);


// function keyDown(e) {

//     //キーボードからの入力は「e.key」に格納されている
//     if (e.key === checkTexts[0].textContent) {
//         checkTexts[0].className = 'add-blue';

//         //0番目の配列要素を削除して、次の1文字を比較対象にする
//         checkTexts.shift();

//         //配列要素が空っぽになったら次の問題を出す
//         if (!checkTexts.length) createText();
//     }
// }
// // 制限時間
// const Time = document.getElementById('timer');
// let TIME = 20;

// const countdown = setInterval(function () {


//     Time.textContent = '制限時間：' + --TIME + '秒';
//     if (TIME <= 0) finish();

// }, 1000)






let start = Date.now(); // 開始時間を覚える

let timer = setInterval(function () {
    // 開始からの経過時間は？
    let timePassed = Date.now() - start;

    if (timePassed >= 2000) {
        clearInterval(timer); // 2秒後にアニメーションが終了
        ;
    }

timePassed 時点のアニメーションを描画
    draw(timePassed);

}, 20);

// timePassed は 0 から 2000 まで進む
// なので、left は 0px から 400px になります
function draw(timePassed) {
    hado.style.left = timePassed / 1.2 + 'px';
}

const subject = document.getElementById('subject');
const timer = document.getElementById('timer');
const form = document.forms.typing;
const textList = [
    'Hello World',
    'Good',
    'I love JavaScript',
    'This is MyApp',
    'Welcome'
];

// const rnd = Math.floor(Math.random() * textList.length);

// subject.textContent = textList[rnd];

function init() {
    const rnd = Math.floor(Math.random() * textList.length);

    subject.textContent = textList[rnd];
    form.input.value = '';
    form.input.focus()
}
console.log(rnd);

let TIME = 20;
let count = 0;
let state = true;

const countdown = setInterval(function () {
    timer.textContent = '制限時間：' + --TIME + '秒';
    if (TIME <= 0) finish();
}, 1000);


form.btn.addEventListener('click', function (e) {
    if (!state) return;

    if (form.input.value === subject.textContent) {
        count++;
        init();
    } else {
        subject.textContent = '間違いです！';
        setTimeout(function () { init() }, 1000)
    }
});

init();

// function init() {
//     const rnd = Math.floor(Math.random() * textList.length);

//     subject.textContent = textList[rnd];
//     form.input.value = '';
//     form.input.focus();
// }

function finish() {
    clearInterval(countdown);
    subject.textContent = '正解数は' + count + '個でした！';
    state = false;
}