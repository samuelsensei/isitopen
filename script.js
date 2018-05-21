function betterWork(){
  var theDate = new Date();
  var theDateString = (theDate.getMonth() + 1) + "-" + theDate.getDate() + "-" + theDate.getFullYear();
  var Dates = [
    ["11-23-2017", "11-24-2017", "Happy New Year", 0, 0],
    ["5-5-2018", "5-6-2018", "Happy New Year", 18, 0]
  ];
  
  for (i=0; i<Dates.length; i++){
    if (Dates[i][0] == theDateString){ //if day of
      if (Dates[i][3] > 0){ //if special timing
        if ((theDate.getHours() == 10 && theDate.getMinutes() >= 30) || (theDate.getHours() >= 11 && theDate.getHours() < Dates[i][3]) || (theDate.getHours() == Dates[i][3] && theDate.getMinutes() < Dates[i][4])){ //if during special hours
          document.getElementById("fillme").innerHTML = "<font color='green'>Open</font>";
          //countdown from appointed time
          var theSeconds = (theDate.getHours() * 60 * 60) + (theDate.getMinutes() * 60) + (theDate.getSeconds());
          var theSeconds = (Dates[i][3] * 60 * 60) + (Dates[i][4] * 60) - theSeconds;
          countMeDown(theSeconds);
        }
        else if (theDate.getHours() >= Dates[i][3] && theDate.getMinutes() >= Dates[i][4]){ //if after special hours
          document.getElementById("fillme").innerHTML = "<font color='red'>Closed</font><br />";
          document.getElementById("fillme").innerHTML += Dates[i][2];
          return;
        }
      }
      else if ((theDate.getHours() == 10 && theDate.getMinutes() >= 30) || (theDate.getHours() >= 11)){
        document.getElementById("fillme").innerHTML = "<font color='red'>Closed</font><br />";
        document.getElementById("fillme").innerHTML += Dates[i][2];
        return;
      }
    }
    else if (Dates[i][1] == theDateString){ //if day after
      if (theDate.getHours() < 2){
        document.getElementById("fillme").innerHTML = "<font color='red'>Closed</font><br />";
        document.getElementById("fillme").innerHTML += Dates[i][2];
        return;
      }
    }
  }  
  if ((theDate.getHours() == 1 && theDate.getMinutes() >= 30) || (theDate.getHours() == 10 && theDate.getMinutes() < 30) || (theDate.getHours() >=2 && theDate.getHours() < 10)){
    document.getElementById("fillme").innerHTML = "<font color='red'>Closed</font>";
  }
  else if (theDate.getHours() == 1 && theDate.getMinutes() < 30){
    if (theDate.getDay() == 0 || theDate.getDay() == 6){
      document.getElementById("fillme").innerHTML = "<font color='green'>Open</font>";
      //countdown from 30 minutes
      var theSeconds = (theDate.getHours() * 60 * 60) + (theDate.getMinutes() * 60) + (theDate.getSeconds());
      var theSeconds = 3600 - theSeconds + (60*30);
      countMeDown(theSeconds);
    }
    else {
      document.getElementById("fillme").innerHTML = "<font color='red'>Closed</font>";
    }
  }
  else if (theDate.getHours() < 1) {    
    if (theDate.getDay() == 0 || theDate.getDay() == 6){
      document.getElementById("fillme").innerHTML = "<font color='green'>Open</font>";
      //countdown+30
      var theSeconds = (theDate.getHours() * 60 * 60) + (theDate.getMinutes() * 60) + (theDate.getSeconds());
      var theSeconds = 3600 - theSeconds + (60*30);
      countMeDown(theSeconds);
    }
    else {
      document.getElementById("fillme").innerHTML = "<font color='green'>Open</font>";
      //countdown regular
      var theSeconds = (theDate.getHours() * 60 * 60) + (theDate.getMinutes() * 60) + (theDate.getSeconds());
      var theSeconds = 3600 - theSeconds;
      countMeDown(theSeconds);
    }
  }
  else if ((theDate.getHours() == 10 && theDate.getMinutes() >= 30) || (theDate.getHours() >= 11)) {    
    if (theDate.getDay() == 5 || theDate.getDay() == 6){
      document.getElementById("fillme").innerHTML = "<font color='green'>Open</font>";
      //countdown+1:30
      //86400 seconds in 24 hours
      var theSeconds = (theDate.getHours() * 60 * 60) + (theDate.getMinutes() * 60) + (theDate.getSeconds());
      var theSeconds = 86400 - theSeconds + (90*60);
      countMeDown(theSeconds);
    }
    else {
      document.getElementById("fillme").innerHTML = "<font color='green'>Open</font>";
      //countdown+1:00
      var theSeconds = (theDate.getHours() * 60 * 60) + (theDate.getMinutes() * 60) + (theDate.getSeconds());
      var theSeconds = 86400 - theSeconds + (60*60);
      countMeDown(theSeconds);
    }
  }
  
  function countMeDown(timeLeft){  
    var endDate = theDate.getTime() + (timeLeft*1000);
    var theInterval = setInterval (function(){
      var currentDate = new Date();
      var timer = (endDate - currentDate.getTime())/1000;
      var hours = Math.floor(timer/(60*60));
      var minutes = Math.floor(timer%(60*60)/60);
      var seconds = Math.floor(timer%(60*60)%60);
      document.getElementById("timeleft").innerHTML = hours + "h " + minutes + "m " + seconds + "s";
      if (timer <= 0.4){
        document.getElementById("fillme").innerHTML = "<font color='red'>Closed</font>";
        document.getElementById("timeleft").innerHTML = "0h 0m 0s";
        clearInterval(theInterval);
      }
    }, 1000);
  }
}  
  
    /*
    if day of and special timing
      >= 10:30am and < special timing
        open
        count down from appointed time
      >= special timing
        closed
        quote
    if day of and past 1/1:30
      closed
      say quote
    if day after and before 1:30am
      closed
      say quote
  */
 
  /*
  if (time is between 1:30am and 10:30am){
    closed
  }
  else if (time is between 1 and 1:30am){
    if day (saturday or Sunday){
      open
      countdown 30-minutes
    }
    else {
      closed
    }
  }
  else if (time is between 12am and 1am){
    if day (saturday or Sunday){
      open
      countdown +30min
    }
    else {
      open
      countdown regular
    }
  }
  else if (time is between 10:30am and 12am){
    if day(friday or saturday){
      open
      countdown +1:30
    }
    else {
      open countdown +1:00
    }
  }
  */










function letsWork(){
  var theDate = new Date;
  //NORMAL DAYS
  if (theDate.getDay() == 1 || 2 || 3 || 4 || 5) {
    if (theDate.getHours >= 1 && theDate.getHours < 10){
      document.getElementById("fillme").innerHTML = "<font color='red'>Closed</font>";
    }
    else if (theDate.getHours >= 10 && theDate.getHours < 11 && theDate.getMinutes < 30){
      document.getElementById("fillme").innerHTML = "<font color='red'>Closed</font>";
    }
    else {
      document.getElementById("fillme").innerHTML = "<font color='green'>Open</font>";
    }
  }  
  else if (theDate.getDay() == 6 || 7) {
    if (theDate.getHours >= 2 && theDate.getHours < 10){
      document.getElementById("fillme").innerHTML = "<font color='red'>Closed</font>";
    }
    else if (theDate.getHours >= 10 && theDate.getHours < 11 && theDate.getMinutes < 30){
      document.getElementById("fillme").innerHTML = "<font color='red'>Closed</font>";
    }    
    else if (theDate.getHours >= 1 && theDate.getHours < 2 && theDate.getMinutes >= 30){
      document.getElementById("fillme").innerHTML = "<font color='red'>Closed</font>";
    }
    else {
      document.getElementById("fillme").innerHTML = "<font color='green'>Open</font>";
    }
  }
  
/*
    if (day=monday,tuesday,wednesday,thursday,friday){
      if (time=1am-10:30am){
        closed
      }
      else{
        open
      }
    }
    else if (day=saturday,Sunday){
      if (time=1:30am-10:30am){
        closed
      }
      else {
        open
      }
    }
    document.getElementById("fillme").innerHTML = theDate;
*/
  
}


betterWork();