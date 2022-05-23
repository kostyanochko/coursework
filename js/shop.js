$('document').ready(function(){
    loadGoods();
});

function loadGoods(){
    $.getJSON('goods.json', function(data){
        console.log(data);
    })
}