const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const milliSecond = document.querySelector('.millisecond');


const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

const body = document.querySelector('body');

const bodyColorArray = [
	'rgba(48, 217, 88, .5)',
	'rgba(220, 53, 69, .5)',
	'rgba(239, 234, 60, .5)'
];


let min = 0;
let sec = 0;
let millisec = 0;

startBtn.addEventListener('click', function(){
	
	startBtn.style.pointerEvents = 'none';
	startBtn.classList.add('active');
	resetBtn.classList.add('active');

	body.style.backgroundColor = bodyColorArray[0];
	let secTime = setInterval(function(){ 
		sec++;	
		
		if(sec < 10){
			second.innerHTML = '0' + sec;
		}else{
			second.innerHTML = sec;
		}

		if(sec === 60){
			sec = 0;
			min++

			if(min < 10){
				minute.innerHTML = '0' + min;
			}else{
				minute.innerHTML = sec;
			}
		}
		
	}, 1000);

	let millisecTime = setInterval(function(){ 
		millisec++;	
		
		if(millisec < 10){
			milliSecond.innerHTML = '0' + millisec;
		}else{
			milliSecond.innerHTML = millisec;
		}

		if(millisec === 10){
			millisec = 0;
		}
		
	}, 100);

	stopBtn.addEventListener('click', ()=>{
		clearInterval(secTime);
		clearInterval(millisecTime);
		startBtn.style.pointerEvents = 'all';
		startBtn.classList.remove('active');
		stopBtn.classList.add('active');

		body.style.backgroundColor = bodyColorArray[1];
	});

	resetBtn.addEventListener('click', ()=>{
		min = 0;
		sec = 0;
		millisec = 0;
		minute.innerHTML = '00';
		second.innerHTML = '00';
		milliSecond.innerHTML = '00';
		startBtn.style.pointerEvents = 'all';
		startBtn.classList.remove('active');
		stopBtn.classList.remove('active');
		resetBtn.classList.add('active');
		body.style.backgroundColor = bodyColorArray[2];

		clearInterval(secTime);
		clearInterval(millisecTime);
	});		
	stopBtn.classList.remove('active');
	resetBtn.classList.remove('active');
});
