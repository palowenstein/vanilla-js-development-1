const address = document.getElementById('place');
const vidPlayer = document.getElementById('hls-example');
const mp4 = document.getElementById('sourceUrl');
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
  'assets/vids/1_port_de_plaisance_de_paris_arsenal_1080.mp4',
  'assets/vids/2_arc_de_triomphe_720.mp4',
  'assets/vids/3_tour_eiffel_720.mp4',
  'assets/vids/4_maison_de_la_radio_la_defense_480b.mp4',
  'assets/vids/5_la_tour_eiffel_1050_03min20.mp4',
  'assets/vids/6_palais_garnier_720.mp4',
  'assets/vids/7_hotel_de_ville_720.mp4',
];

console.log(`places= ${places}`);
console.log(`urls= ${urls}`);
address.textContent = places[0];
mp4.setAttribute('type', 'video/mp4');
mp4.setAttribute('src', urls[0]);

console.log(`mux[0]= ${mp4.src}`);
console.log(`urls[0]= ${urls[0]}`);

function nextIndex() {
  index++;
  (index %= places.length), (index %= urls.length);
  address.textContent = places[index];
  // The following doesn't work: mp4.setAttribute('src', urls[index]); vidPlayer.appendChild(mp4);
  // Instead, load the src parameter directly into the video tag for the *next* video to load/append.
  vidPlayer.setAttribute('src', urls[index]);
  vidPlayer.load();

  console.log(`forward-place[1-7]= ${places[index]}`);
  console.log(`forward-mux[1-7]= ${mp4.src}`);
}

function previousIndex() {
  index--;
  (index %= places.length), (index %= urls.length);
  address.textContent = places[index];
  // The following doesn't work: mp4.setAttribute('src', urls[index]); vidPlayer.appendChild(mp4);
  // Instead, load the src parameter directly into the video tag for the *previous* video to load/append.
  vidPlayer.setAttribute('src', urls[index]);
  vidPlayer.load();

  console.log(`backward-place[1-7]= ${places[index]}`);
  console.log(`backward-mux[1-7]= ${mp4.src}`);
}

forward.addEventListener('click', nextIndex);
backward.addEventListener('click', previousIndex);
