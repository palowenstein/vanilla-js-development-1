const address = document.getElementById('place');
const vidPlayer = document.getElementById('hls-example');
const m3u8 = document.getElementById('sourceUrl');
const forward = document.getElementById('next');
const backward = document.getElementById('previous');
let index = 0;

let places = [
  'port de plaisance de Paris-arsenal',
  'arc de triomphe',
  'tour eiffel',
  'maison de la radio - la défense',
  'la tour eiffel',
  'palais garnier',
  'hôtel de ville',
];

let urls = [
  'https://deliverys3.joada.net/contents/encodings/live/e6b6f1cd-ae5d-40f2-3032-3630-6d61-63-a744-dbccb109af26d',
  'https://deliverys4.joada.net/contents/encodings/vod/b3a842da-6f7b-430c-3638-3330-6d61-63-a7b7-7f5240db3337d',
  'https://deliverys4.joada.net/contents/encodings/vod/523aca9d-e3f5-4e82-3638-3330-6d61-63-9f33-f77d84eaea46d',
  'https://deliverys2.joada.net/contents/encodings/live/281ee296-7a47-402e-3738-3330-6d61-63-8239-bef0f6a83debd',
  'https://deliverys3.joada.net/contents/encodings/live/47fcda1a-38f6-4fb2-3938-3330-6d61-63-bb4b-5df88851d8b7d',
  'https://deliverys4.joada.net/contents/encodings/vod/eff97941-d655-4816-3638-3330-6d61-63-98b9-3da11ef7dfedd',
  'https://deliverys4.joada.net/contents/encodings/vod/d3cac2f0-1ff2-458a-3638-3330-6d61-63-bddb-c2be01e7481ed',
];

console.log(`places= ${places}`);
console.log(`urls= ${urls}`);
address.textContent = places[0];
m3u8.setAttribute('src', `${urls[0]}/master.m3u8`);

console.log(`mux[0]= ${m3u8.src}`);

function nextIndex() {
  index++;
  (index %= places.length), (index %= urls.length);
  address.textContent = places[index];
  m3u8.setAttribute('src', `${urls[index]}/master.m3u8`);
  vidPlayer.load();

  console.log('forward');
  console.log(`place[1-7]= ${places[index]}`);
  console.log(`mux[1-7]= ${m3u8.src}`);
  console.log(`vidPlayer= ${vidPlayer.load()}`);
}

function previousIndex() {
  index--;
  (index %= places.length), (index %= urls.length);
  address.textContent = places[index];
  m3u8.setAttribute('src', `${urls[index]}/master.m3u8`);
  vidPlayer.load();

  console.log('backward');
  console.log(`place[1-7]= ${places[index]}`);
  console.log(`mux[1-7]= ${m3u8.src}`);
  console.log(`vidPlayer= ${vidPlayer.load()}`);
}

forward.addEventListener('click', nextIndex);
backward.addEventListener('click', previousIndex);

/*
'port de plaisance de paris-arsenal',
https://deliverys3.joada.net/contents/encodings/live/e6b6f1cd-ae5d-40f2-3032-3630-6d61-63-a744-dbccb109af26d/master.m3u8
'arc de triomphe',
https://deliverys4.joada.net/contents/encodings/vod/b3a842da-6f7b-430c-3638-3330-6d61-63-a7b7-7f5240db3337d/master.m3u8
'tour eiffel',
https://deliverys4.joada.net/contents/encodings/vod/523aca9d-e3f5-4e82-3638-3330-6d61-63-9f33-f77d84eaea46d/master.m3u8
'maison de la radio - la défense',
https://deliverys2.joada.net/contents/encodings/live/281ee296-7a47-402e-3738-3330-6d61-63-8239-bef0f6a83debd/master.m3u8
'la tour eiffel',
https://deliverys3.joada.net/contents/encodings/live/47fcda1a-38f6-4fb2-3938-3330-6d61-63-bb4b-5df88851d8b7d/master.m3u8
'palais garnier',
https://deliverys4.joada.net/contents/encodings/vod/eff97941-d655-4816-3638-3330-6d61-63-98b9-3da11ef7dfedd/master.m3u8
'hôtel de ville',
https://deliverys4.joada.net/contents/encodings/vod/d3cac2f0-1ff2-458a-3638-3330-6d61-63-bddb-c2be01e7481ed/master.m3u8
*/
