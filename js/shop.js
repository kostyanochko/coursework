var cart ={};

$('document').ready(function(){
    loadGoods();
    checkCart();
    showMiniCart()
});

function loadGoods(){
    $.getJSON('db.json', function(data){
        var out = '';
        for(var key in data){
            out+='<div class="single-goods" data-art="'+key+'">';
            out+='<img src="'+data[key].image+'" alt="T-Shirt">';
            out+='<h2>'+data[key]['name']+'<h2>';
            out+='<p>'+data[key]['price']+'<p>';
            out+='</div>'
        }
        $('#goods').html(out);
        $('div.single-goods').on('click', addToCart);
    });
}

function addToCart(){
    var articul = $(this).attr('data-art');
    if(cart[articul] != undefined){
        cart[articul]++;
    }
    else{
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    showMiniCart()
}

function checkCart(){
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function showMiniCart(){
    var count = 0;
    for(var i in cart){
        count += cart[i];
    }
    $('#mini-cart-count').html(count);
}