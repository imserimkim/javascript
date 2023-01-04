let d;
fetch('./data.json') //링크 가져오기
    .then(function(res){ return res.json() }) //객체형태로 변환
    .then(function(d){
        puppy(d)
    }); //데이터를 변수로 받기


function puppy(d){

    //data 화면에 출력
    const elFpng = document.querySelector('.f-png div')
    let tag = '';
    d.dog.forEach(function(img,key){
        tag +=`<figure><img src= ${img.png}></figure>`;
    })
    elFpng.innerHTML = tag;


    //팝업 열기
    const elFigure2 = document.querySelectorAll('.f-png figure'),
    elPopup= document.querySelector('.popup');

    elFigure2.forEach(function(value,key){
        value.onclick = function(){
            elPopup.classList.add('active');
            dataChange(key);
        }
    });


    //팝업 닫기
    elPopup.onclick = function(e){
        console.log();
        if(e.target.classList.contains('popup'))
            {elPopup.classList.remove('active');}

            if(e.target.className == "x"){
                elPopup.classList.remove('active');
            }
    }


    //클릭한 그림에 맞게 팝업창 출력
    function dataChange(n){
        const elPopCon = document.querySelector('.popup article');
        elPopCon.innerHTML = `
                            <figure>
                                <figcaption class="x">x</figcaption>
                                <img src=${d.dog[n].url} alt="">
                                <p>${d.dog[n].date}</p>
                            </figure>`
    }

}