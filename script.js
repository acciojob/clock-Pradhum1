//your JS code here. If required.
let para = document.querySelector("#timer")
function currentTime(){
	let hour = date.getHours()
	let min = date.getMinutes()
	let sec = date.getSeconds()
	let time = hour+":"+min+":"+sec
	let day = date.getDay()
	let month = date.getMonths()
	let year = date.getFullYear()

	para.innerHTML =`${month}/ ${day}/ ${year}, ${time}`
}
setInterval(currentTime,1000)
