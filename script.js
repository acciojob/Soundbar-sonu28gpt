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

for(let el of btns){
	el.addEventListener('click',()=>{
		stopAudio();
		currentAudio=new Audio(`sounds/${el.textContent}`);
		currentAudio.play();
		
	})
}
