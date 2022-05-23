$('document').ready(function(){
    loadGoods();
});

function loadGoods(){
    $.getJSON('db.json', function(data){
        console.log(data);
    })
}