$('document').ready(function(){
    loadGoods();
});

function loadGoods(){
    $.getJSON('db.json', function(data){
        var out = '';
        for(var key in data){
            out+='<div class="'+data[key].key+'">';
            out+='<img src="'+data[key].image+'" alt="T-Shirt">';
            out+='<h2>'+data[key]['name']+'<h2>';
            out+='<p>'+data[key]['price']+'<p>';
        }
        $('#goods').html(out);
    })
}