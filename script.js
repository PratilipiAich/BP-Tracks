let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "Boombayah",
     path: "http://docs.google.com/uc?export=open&id=1le5oYRWyWafVBmNDIXyzLvXPT1cLEh9P",
     img: "./assets/boombayah.png",
     singer: "08 August, 2016"
   },
   {
     name: "Whistle",
     path: "http://docs.google.com/uc?export=open&id=1jyaJi1uTF4Ues-LouSAxE9KoH8TIVuAG",
     img: "./assets/whistle.jpg",
     singer: "08 August, 2016"
   },
   {
     name: "Playing With Fire",
     path: "http://docs.google.com/uc?export=open&id=1k1NJvUCDCBfDPaZ1_VAWUvZOBKA3Jk2V",
     img: "./assets/playing.jpg",
     singer: "01 November, 2016"
   },
   {
     name: "Stay",
     path: "http://docs.google.com/uc?export=open&id=1jiTwPgP2j4FUROyaEcDRlaOdUt-9vN3K",
     img: "./assets/stay.jpg",
     singer: "01 November, 2016"
   },
   {
     name: "As if it's your last",
     path: "http://docs.google.com/uc?export=open&id=1nLXLPZGtJUrkdChYf0WJFH3CegSIbn0P",
     img: "./assets/as.jpg",
     singer: "22 June, 2017"
   },
   {
	name: "So Hot",
	path: "http://docs.google.com/uc?export=open&id=1jkfd8o5Meaba4cUmHYffcP2rVSpLkMKy",
	img: "./assets/hot.jpg",
	singer: "25 December, 2017"
  },
   {
	name: "DU-DDU-DU-DDU",
	path: "http://docs.google.com/uc?export=open&id=1hiJrAvKCLrA_cu2Hlz3oRDvS-O4dXl7w",
	img: "./assets/du.jpg",
	singer: "15 June, 2018"
  },
  {
	name: "Forever Young",
	path: "http://docs.google.com/uc?export=open&id=1f0SFLw-ck0CQL9xigM3oipth3Do4OLSz",
	img: "./assets/forever.jpg",
	singer: "15 June, 2018"
  },
  {
	name: "Really Really",
	path: "http://docs.google.com/uc?export=open&id=1joefzueBimsK3T0qrQpsBvNCD5Qnp-dj",
	img: "https://i1.wp.com/blackpinkupdate.com/wp-content/uploads/2019/09/3-Photos-BLACKPINK-Summer-Diary-2019-in-Hawaii.jpg?fit=1080%2C720&ssl=1",
	singer: "15 June, 2018"
  },
  {
	name: "See You Later",
	path: "http://docs.google.com/uc?export=open&id=1jn-p_z-hTuRxT3uK5GNy3ZupN_X4vaNq",
	img: "./assets/see.jpg",
	singer: "15 June, 2018"
  },
  {
	name: "Kiss and Makeup",
	path: "http://docs.google.com/uc?export=open&id=1EqX2gyjypwcJlANe_QpRrsafJYGZUuEf",
	img: "./assets/kiss.jpg",
	singer: "Dua Lipa (19 October, 2018)"
  },
  {
	name: "Solo",
	path: "http://docs.google.com/uc?export=open&id=1_hOjVFz_ZzqtFQ8mdHdWwLxB1puUXwhc",
	img: "./assets/solo.jpg",
	singer: "Jennie (16 November, 2019)"
  },
 
  {
   name: "Kill This Love",
   path: "http://docs.google.com/uc?export=open&id=1jphJkCxfsx7wqWzSwZ9KIjGvUTnC69b_",
   img: "./assets/kill.jpg",
   singer: "05 April, 2019"
 },
 {
   name: "Don't Know What To Do",
   path: "http://docs.google.com/uc?export=open&id=1lIKL8HkROOzbe0NuYP2YuwxV90KHwiRU",
   img: "./assets/dont.jpg",
   singer: "05 April, 2019"
 },
 {
	name: "Hope Not",
	path: "http://docs.google.com/uc?export=open&id=1-7Sram2Mh7OhYCRAsdEcHnzq_ZnoiNkR",
	img: "./assets/hope.jpg",
	singer: "05 April, 2019"
  },
  {
	name: "How You Like That",
	path: "http://docs.google.com/uc?export=open&id=1-yav-MvmLq6jOS_zui3lWP5cY-sghIkm",
	img: "./assets/how.jpeg",
	singer: "26 June, 2019"
  },
  {
	name: "Sour Candy",
	path: "http://docs.google.com/uc?export=open&id=1yUYXUP0B-Mz8TfE_NOxPaAU-zp3yrBby",
	img: "https://i.ytimg.com/vi/wgwMzdNneyI/maxresdefault.jpg",
	singer: "Lady Gaga (28 May, 2020)"
  },
  {
	name: "Ice Cream",
	path: "http://docs.google.com/uc?export=open&id=1sR_Ui74voYsHA1UfanQ67IcW0ZREsdWq",
	img: "./assets/sour.jpg",
	singer: "Selena Gomez (28 August, 2020)"
  },
  {
	name: "Lovesick Girls",
	path: "http://docs.google.com/uc?export=open&id=1seOH82-Zeki3y89shw1TV9S7TsriUWLZ",
	img: "./assets/lovesick.jpg",
	singer: "02 October, 2020"
  },
  {
	name: "Pretty Savage",
	path: "http://docs.google.com/uc?export=open&id=1sUX7MA-Jar6NBe6scY4CyApRufDOWS97",
	img: "./assets/pretty.jpg",
	singer: "02 October, 2020"
  },
  {
	name: "Crazy Over You",
	path: "http://docs.google.com/uc?export=open&id=1rn6JHXJnrTfwu7Ynz2ZLX6S3wPYkugk_",
	img: "./assets/crazy.png",
	singer: "02 October, 2020"
  },
  {
	name: "Love To Hate Me",
	path: "http://docs.google.com/uc?export=open&id=1sCCGOYiojbjPZn5evMeYjimd45nj2Y_A",
	img: "./assets/love.jpg",
	singer: "02 October, 2020"
  },
  {
	name: "Bet You Wanna",
	path: "http://docs.google.com/uc?export=open&id=1s0mOEsomI2nS5uw1VYwvqCNIlOfUCA92",
	img: "./assets/bet.jpeg",
	singer: "Cardi B (02 October, 2020)"
  },
  {
	name: "Gone",
	path: "http://docs.google.com/uc?export=open&id=1-6DqkR01S4AnpTBD19W_fwE8nhPVHnvt",
	img: "./assets/gone.jpg",
	singer: "Ros&eacute;  (04 April, 2021)"
  },
  {
	name: "On The Ground",
	path: "http://docs.google.com/uc?export=open&id=1-1Ak4-WAg8l7_PPhmrMKaElPe3C1D77D",
	img: "./assets/ground.jpg",
	singer: "Ros&eacute;  (12 March, 2021)"
  },

 

];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FB78B0";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }