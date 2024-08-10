//your JS code here. If required.
let para = document.querySelector("#timer");

function currentTime(){
    let date = new Date(); // Declare date object
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDate(); // Use getDate() instead of getDay()
    let month = date.getMonth() + 1; // Use getMonth() and add 1
    let year = date.getFullYear();
    let arrayOfTime = convertTime(hour, min, sec);
    for(let i=0; i<=2; i++){
        arrayOfTime[i]=addZero(arrayOfTime[i]);
    }
    let formattedTime = `${arrayOfTime[0]}:${arrayOfTime[1]}:${arrayOfTime[2]} ${arrayOfTime[3]}` // Rename the variable to avoid name clash

    para.innerHTML =`${month}/ ${day}/ ${year}, ${formattedTime}`;
}

setInterval(currentTime,1000);

function convertTime(hr, min, sec){
    if(hr>12){
        hr=hr-12;
        return [hr,min,sec,"PM"];
    } else if(hr==0){
        return [12,min,sec,"AM"];
    } else if(hr<12){
        return [hr,min,sec,"AM"];
    } else if(hr==12){
        return [hr,min,sec,"PM"];
    }
}

function addZero(k){
    if(k<10){
        return "0"+k;
    } else {
        return k;
    }
}