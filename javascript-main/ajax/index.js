// index.js
fetch('./data.json')
        .then(function(res){ return res.json() })
        .then(function(gallery){                        //res 와 gallery는 매개변수로 변할 수
            init(gallery.data)
        });                                             //데이터 가져오는 역할

function init(data){
    const elGallery = document.querySelector('.gallery div');

    elGallery.innerHTML = `<img src=${data[0].url}>`;
}                                                       //일처리하는 역할