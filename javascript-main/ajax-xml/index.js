
// fetch('./data.xml')                // fetch().then.().then()
// .then(function(res){
//    return res.text();
// })
// .then(function(data){
//     console.log(data);
// })

$.ajax({
    url : './data.xml', // url : './data.xml',
    beforeSend : function(){
        console.log('준비')
    },
    complete : function(){
        console.log('완료')
    },
    error:function(){
        console.log('데이터 실패')
    },
    success : function(data){
        console.log('데이터 성공')
        // console.log(
        //     $(data).find('item').eq(1).find('detail').html()
        // )
                // console.log(
                //     // $(data).find('item').eq(1).html() // $=querySelecter
                // )
        let tag='',url,title;

            $(data).find('item').each(function(key,value){
                url = $(value).find('url').text();
                title = $(value).find('title').text();

                tag += `<figure>
                        <img src="${url}">
                            <figcaption> ${title}</figcaption>
                        </figure>`;
                });

                $('.gallery > div').html(tag);

            $('.gallery figure').click(function(){
                let key = $(this).index(); // this=이벤트를 발생시키는 값을 받아 옴

                let detail = $(data).find('item').eq(key).find('detail').html()

                alert(detail); 
            });

                // 단,$('.gallery > div').innerHTML(tag);은 사용하지 않기
                    

                // $('body').prepend(`<img src="${ $(value).find('url').text() }">`)  //body에 추가
                // console.log(
                //     $(value).find('url').text()

            
    }
});

// Jquery
    // $('선택자').method();

    // // $('.about:nth-of-type(2)')
    // // $('.about > div')
    // // $('.about > button').onclick