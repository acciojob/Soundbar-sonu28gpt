//your JS code here. If required.
let btns=document.querySelectorAll('.btn');

let currentAudio=null
function stopAudio(){
	if(currentAudio){
		currentAudio.pause();
		currentAudio.currentTime=0;
		currentAudio=null
	}
}
// let sound1="sound1";
let audio=new Audio('./sounds/applause');
audio.play();
for(let el of btns){
	el.addEventListener('click',()=>{
		stopAudio();
		// alert(`./sounds/${el.textContent}.mp3`)
		currentAudio=new Audio(`sounds/${el.textContent}.mp3`);
		currentAudio.play();
		
	})
}
