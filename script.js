//your JS code here. If required.
let para = document.querySelector("#timer");
function currentTime(){
	let hour = date.getHours()
	let min = date.getMinutes()
	let sec = date.getSeconds()
	let time = hour+":"+min+":"+sec
	let day = date.getDay()
	let month = date.getMonths()
	let year = date.getFullYear()
	let arrayOfTime = convertTime(hour, min, sec)
	for(i=0; i<=2; i++){
		arrayOfTime[i]=addZero(arrayOfTime[i])
	}
	let time = `${arrayOfTime[0]}:${arrayOfTime[1]}:${arrayOfTime[2]} ${arrayOfTime[3]}`

	para.innerHTML =`${month}/ ${day}/ ${year}, ${time}`
}
setInterval(currentTime,1000)

function convertTime(hr, min, sec){
	if(hr>12){
		hr=hr-12
		return [hr,min,sec,"pm"]
	}
	else if(hr==0){
		
		return [12,min,sec,"AM"]
	}
	else if(hr<12){
		
		return [hr,min,sec,"AM"]
	}
	else if(hr==12){
		
		return [hr,min,sec,"pm"]
	}
}

function addZero(k){
	if(k<10){
		return "0"+k
	}
	else{
		return k
	}
}
