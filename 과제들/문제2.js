var sum=24000;
document.getElementById("sum").innerHTML=sum;
    var check_pic=document.querySelector("#pickle");
    var check_chil=document.querySelector("#chilli");
    var check_def=document.querySelector("#defil");
    var check_cheese=document.querySelector("#cheesestick");
    var check_corn=document.querySelector("#cornsal");

    check_pic.addEventListener("click",function(){
        if(check_pic.checked==true){
            sum=sum+800;
        }else{
            sum=sum-800;
        }
        document.getElementById("sum").innerHTML=sum;
    });

    check_chil.addEventListener("click",function(){
        if(check_chil.checked==true){
            sum=sum+300;
        }else{
            sum=sum-300;
        }
        document.getElementById("sum").innerHTML=sum;
    });

    check_def.addEventListener("click",function(){
        if(check_def.checked==true){
            sum=sum+200;
        }else{
            sum=sum-200;
        }
        document.getElementById("sum").innerHTML=sum;
    });

    check_cheese.addEventListener("click",function(){
        if(check_cheese.checked==true){
            sum=sum+4800;
        }else{
            sum=sum-4800;
        }
        document.getElementById("sum").innerHTML=sum;
    });

    check_corn.addEventListener("click",function(){
        if(check_corn.checked==true){
            sum=sum+2400;
        }else{
            sum=sum-2400;
        }
        document.getElementById("sum").innerHTML=sum;
    });
