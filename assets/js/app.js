$(document).ready(function(){


  setInterval( function() {
  
    var hours = new Date().getHours();
    var mins  = new Date().getMinutes();
    var secs  = new Date().getSeconds();
    
    var hdegree = hours * 30 + (mins / 2);
    var mdegree = mins * 6;
    var sdegree = secs * (360/60);
    
    var hrotate = "rotate(" + hdegree + "deg)";
    var mrotate = "rotate(" + mdegree + "deg)";
    var srotate = "rotate(" + sdegree + "deg)";
    
    $("#hour").css({
      "-webkit-transform" : hrotate
    });
    
    $("#minute").css({
      "-webkit-transform" : mrotate
    });
    
    $("#second").css({
      "-webkit-transform" : srotate
    });
    
  }, 1000 );



});
