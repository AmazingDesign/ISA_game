$(document).ready(function(){
    console.log('jQuery ready!');



    //Główne menu z przyciskami//
    $( "#play" ).click(function() {
        $('#menu').css({'display' : 'none'});
        $('#main').css({'display' : 'block'});

    });
    var $allPoints = '0';
    //setInterwal odpowiada za wykonywanie funkcji co sekunde
    var $food = setInterval(function(){
        //tworze diva o klasie goodFood i przypisuje go do diva glownego/ SPADAJACE JEDZENIE
        $randomDiv = Math.floor(Math.random() * 100);
        if($randomDiv <= 10){
            var $foodItem = $('<div id="goodFood"><img src="img/carrot.png"></div>');
            $('#main').append($foodItem);
        }else if($randomDiv > 10 && $randomDiv <= 20){
            var $foodItem = $('<div id="goodFood"><img src="img/apple.png"></div>');
            $('#main').append($foodItem);
        }else if($randomDiv > 20 && $randomDiv <= 30){
            var $foodItem = $('<div id="goodFood"><img src="img/brocly.png"></div>');
            $('#main').append($foodItem);
        }else if($randomDiv > 30 && $randomDiv <= 40){
            var $foodItem = $('<div id="goodFood"><img src="img/fish.png"></div>');
            $('#main').append($foodItem);
        }else if($randomDiv > 40 && $randomDiv <= 50){
            var $foodItem = $('<div id="goodFood"><img src="img/banana.png"></div>');
            $('#main').append($foodItem);
        }else if($randomDiv > 50 && $randomDiv <= 60){
            var $foodItem = $('<div id="goodFood"><img src="img/avokado.png"></div>');
            $('#main').append($foodItem);
        }else if($randomDiv > 60 && $randomDiv <= 70) {
            var $foodItem = $('<div id="badFood"><img src="img/burger.png"></div>');
            $('#main').append($foodItem);
        }else if($randomDiv > 70 && $randomDiv <= 80) {
            var $foodItem = $('<div id="badFood"><img src="img/donout.png"></div>');
            $('#main').append($foodItem);
        }else if($randomDiv > 80 && $randomDiv <= 90) {
            var $foodItem = $('<div id="badFood"><img src="img/candy.png"></div>');
            $('#main').append($foodItem);
        }
        else{
            var $foodItem = $('<div id="badFood"><img src="img/pizza.png"></div>');
            $('#main').append($foodItem);
        }
        //odczytuje szerokosc diva glownego
        $foodX = Math.floor(Math.random() * 565);

        $($foodItem).css({'left':$foodX});


        animate($foodItem.get(0), 10);



        function animate(element, speed) {
            var top = 0;
            var id = setInterval(function () {
                checkOverlay(element);
                playerLeft = parseInt($('#player').css('left'));
                playerRight = playerLeft + 60;
                top++;
                element.style.top = top + 'px';
                if (top > 560) {
                    //   console.log('interval cleared!');
                    clearInterval(id);
                    element.remove();
                }
            }, speed)
        }


        // funkcja ktora łapie elementy i wyswietla w konsoli punkty i usuwa element w momencie złapania go //
        function checkOverlay(element){
            if(element.style.top.replace('px', '') > 500  && playerLeft < element.style.left.replace('px', '')  && element.style.left.replace('px', '') < playerRight ) {
                console.log('punkt');
                element.remove();
            }
        }



    }, 2000);






    var player = {};

    player.x = $('#main').width() / 2;
    player.y = 500;




    $(document).on('keydown', handleTyping);



    function handleTyping(event) {

        switch(event.which) {
            case 39:
                if (player.x > 530) {
                    $('#player').css({
                        'left': (player.x += 0) + 'px'
                    });
                }else {
                    $('#player').css({
                        'left': (player.x += 15) + 'px'
                    })};
                break;
            case 37:
                if (player.x < 7) {
                    $('#player').css({
                        'left': (player.x -= 0) + 'px'
                    });
                }else {
                    $('#player').css({
                        'left': (player.x -= 15) + 'px'
                    })};
                break;

        }





    }





});