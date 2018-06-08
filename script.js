function isItOpen (){
  //Variables
  var weekTimes = [
    {closesAt: 1.5, opensAt: 10.5}, //Sunday
    {closesAt: 1, opensAt: 10.5},
    {closesAt: 1, opensAt: 10.5},
    {closesAt: 1, opensAt: 10.5},
    {closesAt: 1, opensAt: 10.5},
    {closesAt: 1, opensAt: 10.5},
    {closesAt: 1.5, opensAt: 10.5}, //Saturday
  ];
  var theDays = [
    {fromDate:"December 31, 2018 7:00:00", toDate: "January 1, 2019 10:30:00", message: "Happy New Year!"},
    {fromDate:"January 2, 2019 10:30:00", toDate: "January 3, 2019 10:30:00", message: "Happy New Year!"}
  ];
  var closedText = "<font color='red'>Closed</font>";
  var openText = "<font color='green'>Open</font>";

  //Constants
  var theDate = new Date();
  function theTime(){
    return (theDate.getHours() + (theDate.getMinutes()/60) + (theDate.getSeconds()/(60*60)));
  };
  function fetchTime(nextDay){
    var z = new Date();
    if(nextDay == 1){
      z.setTime(theDate.getTime() + (24*60*60*1000));
    }
    z.setHours(weekTimes[z.getDay()].closesAt/1);
    z.setMinutes((weekTimes[z.getDay()].closesAt-Math.floor(weekTimes[z.getDay()].closesAt))*60);
    z.setSeconds(0);
    return z;
  }
  function getDateString(){
    return ((theDate.getMonth() + 1) + "-" + theDate.getDate() + "-" + theDate.getFullYear());
  }

  //Logic
  for (i=0; i<theDays.length; i++){
    var a = new Date(theDays[i].fromDate);
    var b = new Date(theDays[i].toDate);
    if(theDate.getMonth() == a.getMonth() && theDate.getDate() == a.getDate() && theDate.getFullYear() == a.getFullYear() && theDate.getTime() < a.getTime()){
      document.getElementById("fillme").innerHTML = openText;
      countMeDown(a);
      return;
    }
    else if (theDate.getTime() > a && theDate.getTime() < b){
      document.getElementById("fillme").innerHTML = closedText + "<br />" + theDays[i].message;
      return;
    }
  }
  if (theTime() >= weekTimes[theDate.getDay()].closesAt && theTime() < weekTimes[theDate.getDay()].opensAt){
    document.getElementById("fillme").innerHTML = closedText;
  }
  else {
    document.getElementById("fillme").innerHTML = openText;
    if (theTime() > weekTimes[theDate.getDay()].opensAt){
      countMeDown(fetchTime(1));
    }
    else {
      countMeDown(fetchTime(0));
    }
  }
}

function countMeDown(countDownTime){  
  var theInterval = setInterval (function(){
    var currentDate = new Date();
    var timer = (countDownTime - currentDate.getTime())/1000;
    var hours = Math.floor(timer/(60*60));
    var minutes = Math.floor(timer%(60*60)/60);
    var seconds = Math.floor(timer%(60*60)%60);
    document.getElementById("timeleft").innerHTML = hours + "h " + minutes + "m " + seconds + "s";
    if (timer <= 0.4){
      document.getElementById("fillme").innerHTML = closedText;
      document.getElementById("timeleft").innerHTML = "0h 0m 0s";
      clearInterval(theInterval);
    }
  }, 1000);
}

isItOpen();
