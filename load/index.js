$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html header>div', head);
$('footer').load('./inc.html footer>div');

let idx = localStorage.idx || 0 ;

function head(){

    $('header a').eq( idx).css('color','pink');

    $('header a').click(function(){
        let idx = $(this).index();
        localStorage.idx = idx; 

/*      localStorage.setItem('idx',2); //idx값 수정
        localStorage.getItem('idx');  //idx값 가져오기


        localStorage.removeItem('idx'); //삭제
        localStorage.clear(); //로컬스토리지 모두 삭제 
*/


        // $(this).css('color','pink');   // header load 하는 시점에 색상변경
    })
}

//#헤더로드()
//#내용 로드 (히스토리,리소스 누적 )