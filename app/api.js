/*Имитация данных приходящих от датчиков*/
class Indicator {
	constructor(id){
		this.id = id.toString();
		this.value = getRandomNum(0, 100);
		this.min = getRandomNum(0, 40);
		this.max = getRandomNum(60, 100);
	}
}
function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
const indicatorSet = {};
for(let i=1; i<=8; i++){
		indicatorSet[i] = new Indicator(i)
	}
	

setInterval(()=>{
		let id = getRandomNum(1,8);
		indicatorSet[id] = new Indicator(id);
		let silo = document.getElementById(id)
		silo.dispatchEvent(new CustomEvent('updateLevel'));
	}, 500)

function getIndicator(id){
	return indicatorSet[id];
}