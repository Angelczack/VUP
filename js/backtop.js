window.onload=function(){
    var btn=document.getElementById("btn");
     var timex=null;
    var pagelookup=document.documentElement.clientHeight;
    btn.onscroll=function(){
        var backup=document.body.scrollTop;
        if(backup>=pagelookup)
        {
            btn.style.display="block";
        }
        else
        {
            btn.style.display="none";
        }
    }
     btn.onclick=function(){
         timex=setInterval(
             function(){
                 var backup=document.body.scrollTop;
                 var speedtop=backup/5;
                 document.body.scrollTop=backup-speedtop;
                 if(backup==0){
                    clearInterval(timex); 
                 }
             },30);
        }
    }
    onload();
    onclick();
  