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
     img: "https://i.imgur.com/925rNef.png",
     singer: "2016"
   },
   {
     name: "Whistle",
     path: "http://docs.google.com/uc?export=open&id=1jyaJi1uTF4Ues-LouSAxE9KoH8TIVuAG",
     img: "https://i.vimeocdn.com/video/585679807_1280x720.jpg",
     singer: "2016"
   },
   {
     name: "Playing With Fire",
     path: "http://docs.google.com/uc?export=open&id=1k1NJvUCDCBfDPaZ1_VAWUvZOBKA3Jk2V",
     img: "https://is4-ssl.mzstatic.com/image/thumb/Video118/v4/a1/e4/95/a1e495c4-76da-c99b-ad92-1a9d627ac9fb/KRZ351600028.jpg/1920x1080mv.jpg",
     singer: "2016"
   },
   {
     name: "Stay",
     path: "http://docs.google.com/uc?export=open&id=1jiTwPgP2j4FUROyaEcDRlaOdUt-9vN3K",
     img: "https://static.wikia.nocookie.net/blinks/images/1/16/BLACKPINK_-_%27STAY%27_M_V/revision/latest/top-crop/width/450/height/450?cb=20170218191827",
     singer: "2016"
   },
   {
     name: "As if it's your last",
     path: "http://docs.google.com/uc?export=open&id=1nLXLPZGtJUrkdChYf0WJFH3CegSIbn0P",
     img: "https://thebiaslistcom.files.wordpress.com/2017/06/blackpink-as-if-its-your-last.jpg",
     singer: "2017"
   },
   {
	name: "DU-DDU-DU-DDU",
	path: "http://docs.google.com/uc?export=open&id=1hiJrAvKCLrA_cu2Hlz3oRDvS-O4dXl7w",
	img: "https://portalpopline.com.br/wp-content/uploads/2020/12/blackpink-2.jpg",
	singer: "2018"
  },
  {
	name: "Forever Young",
	path: "http://docs.google.com/uc?export=open&id=1f0SFLw-ck0CQL9xigM3oipth3Do4OLSz",
	img: "https://www.sbs.com.au/popasia/sites/sbs.com.au.popasia/files/styles/full/public/blackpink_3.jpg?itok=ghj3j9Ld&mtime=1529454531",
	singer: "2018"
  },
  {
	name: "Really Really",
	path: "http://docs.google.com/uc?export=open&id=1joefzueBimsK3T0qrQpsBvNCD5Qnp-dj",
	img: "https://i1.wp.com/blackpinkupdate.com/wp-content/uploads/2019/09/3-Photos-BLACKPINK-Summer-Diary-2019-in-Hawaii.jpg?fit=1080%2C720&ssl=1",
	singer: "2018"
  },
  {
	name: "See You Later",
	path: "http://docs.google.com/uc?export=open&id=1jn-p_z-hTuRxT3uK5GNy3ZupN_X4vaNq",
	img: "https://0.soompi.io/wp-content/uploads/2019/08/27235036/blackpink-111.jpg",
	singer: "2018"
  },
  {
	name: "Kiss and Makeup",
	path: "http://docs.google.com/uc?export=open&id=1EqX2gyjypwcJlANe_QpRrsafJYGZUuEf",
	img: "https://i.pinimg.com/originals/62/4d/27/624d27ecd36cd093773a1690d131e9f2.jpg",
	singer: "Dua Lipa (2018)"
  },
  {
	name: "So Hot",
	path: "http://docs.google.com/uc?export=open&id=1jkfd8o5Meaba4cUmHYffcP2rVSpLkMKy",
	img: "https://pbs.twimg.com/media/DSalaWTVQAAfvvJ.jpg",
	singer: "2019"
  },
  {
	name: "Solo",
	path: "http://docs.google.com/uc?export=open&id=1_hOjVFz_ZzqtFQ8mdHdWwLxB1puUXwhc",
	img: "https://malaysia-grlk5lagedl.stackpathdns.com/production/malaysia/images/1542093224773529-j17.jpg?w=1900&fit=crop&crop=faces&auto=%5B%22format%22%2C%20%22compress%22%5D&cs=srgb",
	singer: "Jennie (2019)"
  },
 
  {
   name: "Kill This Love",
   path: "http://docs.google.com/uc?export=open&id=1jphJkCxfsx7wqWzSwZ9KIjGvUTnC69b_",
   img: "https://static.billboard.com/files/media/blackpink-kill-this-love-MV-2019-billboard-1548-768x433.jpg",
   singer: "2019"
 },
 {
   name: "Don't Know What To Do",
   path: "http://docs.google.com/uc?export=open&id=1lIKL8HkROOzbe0NuYP2YuwxV90KHwiRU",
   img: "http://s8.picofile.com/file/8356707450/maxresdefault.jpg",
   singer: "2019"
 },
 {
	name: "Hope Not",
	path: "http://docs.google.com/uc?export=open&id=1-7Sram2Mh7OhYCRAsdEcHnzq_ZnoiNkR",
	img: "https://i0.wp.com/starmometer.com/wp-content/uploads/2019/02/04.jpg?w=1000&ssl=1",
	singer: "2019"
  },
  {
	name: "How You Like That",
	path: "http://docs.google.com/uc?export=open&id=1-yav-MvmLq6jOS_zui3lWP5cY-sghIkm",
	img: "https://ss-images.saostar.vn/w800/pc/1596897301918/blackpink-1(2).jpeg",
	singer: "2019"
  },
  {
	name: "Sour Candy",
	path: "http://docs.google.com/uc?export=open&id=1yUYXUP0B-Mz8TfE_NOxPaAU-zp3yrBby",
	img: "https://i.ytimg.com/vi/wgwMzdNneyI/maxresdefault.jpg",
	singer: "Lady Gaga (2020)"
  },
  {
	name: "Ice Cream",
	path: "http://docs.google.com/uc?export=open&id=1sR_Ui74voYsHA1UfanQ67IcW0ZREsdWq",
	img: "https://sm.mashable.com/t/mashable_in/photo/default/ice-cream-blackpink-and-selena-gomez-whip-up-the-only-treat_r8zd.h960.jpg",
	singer: "Selena Gomez (2020)"
  },
  {
	name: "Lovesick Girls",
	path: "http://docs.google.com/uc?export=open&id=1seOH82-Zeki3y89shw1TV9S7TsriUWLZ",
	img: "https://imgix.bustle.com/uploads/image/2020/10/2/52312c03-29ea-4655-80c7-540b828e568d-blackpink-the-album-lovesick-girls-video.jpg?w=1020&h=574&fit=crop&crop=faces&auto=format%2Ccompress",
	singer: "2020"
  },
  {
	name: "Pretty Savage",
	path: "http://docs.google.com/uc?export=open&id=1sUX7MA-Jar6NBe6scY4CyApRufDOWS97",
	img: "https://cdn0-production-images-kly.akamaized.net/EsbzQY8-jJnNInMHkr93_p5g45o=/673x379/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3265127/original/065247200_1602493244-bp2.jpg",
	singer: "2020"
  },
  {
	name: "Crazy Over You",
	path: "http://docs.google.com/uc?export=open&id=1rn6JHXJnrTfwu7Ynz2ZLX6S3wPYkugk_",
	img: "https://thehoneypop.com/wp-content/uploads/2020/10/Sans-titre-19.png",
	singer: "2020"
  },
  {
	name: "Love To Hate Me",
	path: "http://docs.google.com/uc?export=open&id=1sCCGOYiojbjPZn5evMeYjimd45nj2Y_A",
	img: "https://imgix.bustle.com/uploads/image/2021/2/1/a6a99936-ac8d-45af-ab8c-70b8361af462-the-show-12.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
	singer: "2020"
  },
  {
	name: "Bet You Wanna",
	path: "http://docs.google.com/uc?export=open&id=1s0mOEsomI2nS5uw1VYwvqCNIlOfUCA92",
	img: "https://thatgrapejuice.net/wp-content/uploads/2020/10/cardi-b-thatgrapejuice-blackpink-bet-wanna-1280x720.jpeg",
	singer: "Cardi B (2020)"
  },
  {
	name: "Gone",
	path: "http://docs.google.com/uc?export=open&id=1-6DqkR01S4AnpTBD19W_fwE8nhPVHnvt",
	img: "https://billboardvn.vn/wp-content/uploads/2021/01/rose-1.jpg",
	singer: "Ros&eacute;  (2021)"
  },
  {
	name: "On The Ground",
	path: "http://docs.google.com/uc?export=open&id=1-1Ak4-WAg8l7_PPhmrMKaElPe3C1D77D",
	img: "https://www.vagalume.com.br/dynimage/news44104-big.jpg",
	singer: "Ros&eacute;  (2021)"
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