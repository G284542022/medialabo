// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する


// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b1 = document.querySelector('button#print');
b1.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    kaisu = kaisu + 1;

    let yoso = Number(document.querySelector('input[name="yoso"]').value);
    
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する



    // let yoso = 4;

    
    let span1 = document.querySelector('span#kaisu');
    // let p1 = document.createElement('p');
    span1.textContent = kaisu;
    let span2 = document.querySelector('span#answer');
    // // let p2 = document.createElement('p');
    span2.textContent = yoso;
    let p = document.querySelector('p#result');
    
    console.log(kaisu + "回目の予想:" + yoso);
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
    if (kaisu>3) {
        p.textContent = ("答えは " + kotae + " でした。ゲームはすでに終わっています。");
    } else {

        if (kotae === yoso) {
            p.textContent = ("正解です。おめでとう！");
        } else if (kaisu === 3) {
            p.textContent = ("まちがい。残念でした答えは " + kotae + " です。")
    
        }else if (kotae < yoso) {
             p.textContent = ("まちがい。答えはもっと小さいですよ");
        }else if (kotae > yoso) {
            p.textContent = ("まちがい。答えはもっと大きいですよ");
        }
    }
}
  

  
