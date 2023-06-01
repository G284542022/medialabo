// let data = {
//   "coord": {
//     "lon": 116.3972,
//     "lat": 39.9075
//   },
//   "weather": [
//     {
//       "id": 803,
//       "main": "Clouds",
//       "description": "曇りがち",
//       "icon": "04d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 9.94,
//     "feels_like": 8.65,
//     "temp_min": 9.94,
//     "temp_max": 9.94,
//     "pressure": 1022,
//     "humidity": 14,
//     "sea_level": 1022,
//     "grnd_level": 1016
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 2.65,
//     "deg": 197,
//     "gust": 4.84
//   },
//   "clouds": {
//     "all": 53
//   },
//   "dt": 1646542386,
//   "sys": {
//     "type": 1,
//     "id": 9609,
//     "country": "CN",
//     "sunrise": 1646520066,
//     "sunset": 1646561447
//   },
//   "timezone": 28800,
//   "id": 1816670,
//   "name": "北京市",
//   "cod": 200
// };

//tosiにユーザーが入力した都市名を入れる
let i = document.querySelector('button#print');
i.addEventListener('click', sendRequest);


//都市名をidに変換したい
// let data1 = [
// {name:'カイロ', id:'360630'},
// {name:'モスクワ', id:'524901'},
// {name:'ヨハネスブルク',id:'993800'},
// {name:'北京',id:'1816670'},
// {name:'東京',id:'1850147'},
// {name:'シンガポール',id:'1880252'},
// {name:'シドニー',id:'2147714'},
// {name:'ロンドン',id:'2643743'},
// {name:'パリ',id:'2968815'},
// {name:'リオデジャネイロ',id:'3451189'},
// {name:'ニューヨーク',id:'5128581'},
// {name:'ロサンゼルス',id:'5368361'},
// ]

let toshi = [];
toshi['カイロ'] = '360630';
toshi['モスクワ'] = '524901';
toshi['ヨハネスブルク'] = '993800';
toshi['北京'] = '1816670';
toshi['東京'] = '1850147';
toshi['シンガポール'] = '1880252';
toshi['シドニー'] = '2147714';
toshi['ロンドン'] = '2643743';
toshi['パリ'] = '2968815';
toshi['リオデジャネイロ'] = '3451189';
toshi['ニューヨーク'] = '5128581';
toshi['ロサンゼルス'] = '5368361';



// 通信を開始する処理
function sendRequest() {

  let tosi = document.querySelector('input[name="tosi"]').value
console.log(tosi);

  
  let id = toshi[tosi];
  
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+ id + '.json';

  console.log(url);
  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }
  console.log(data.weather[0].description);
  console.log(data.main.temp_max);
  console.log(data.main.temp_min);

  let weather = document.querySelector('span#weather');
  weather.textContent = (data.weather[0].description);
  let temp_max = document.querySelector('span#temp_max');
  temp_max.textContent = (data.main.temp_max); 
  let temp_min = document.querySelector('span#temp_min');
  temp_min.textContent = (data.main.temp_min);
}



// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}

