$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html header ',head);            //콜백 함수 실행 $('header').load('./inc.html header ',head);
$('footer').load('./inc.html footer ');

let idx = localStorage.idx || 0 ; 

function head(){

    
    $('header .menu li').eq(idx).find('a').addClass('active');    //분산시에는 data-num으로 숫자값 지정하기 
    $('header .menu li').click(function(){
        let idx = $(this).data().num;
        console.log(idx)
        localStorage.idx=idx; 
    })

}

