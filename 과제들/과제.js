var now = new Date();
    var year = prompt('생년 입력', '');
    var month = prompt('몇월', '');
    var day = prompt('몇일', '');
    var before = new Date(month+' '+ day+','+year);
    var life = now.getTime() - before.getTime();

    var after1 = new Date();
    after1.setTime(before.getTime());
    //100일 뒤
    var life2 = before.getTime()+(100*24*60*60*1000);
    var after3 = new Date(life2);
    //밀리초 표기니까 24*60*60*1000 로 나눈다
    life = Math.floor(life / (24* 60* 60* 1000));
    