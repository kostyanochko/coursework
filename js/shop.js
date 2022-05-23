$('document').ready(function(){
    loadGoods();
});

function loadGoods(){
    $.getJSON('db.json', function(data){
        var out = '';
        for(var key in data){
            out+='<img src="'+data[key].image+'" alt="Nevermind T-Shirt">';
            out+='<p>'+data[key]['name']+'<p>';
        }
        $('#goods').html(out);
    })
}