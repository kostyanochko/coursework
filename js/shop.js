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
            if(data[key].category.localeCompare('T-shirt') == 0){
                out+='<div class="single-goods">';
                out+='<img class="goods-img" src="'+data[key].image+'" alt="T-Shirt" data-art="'+key+'">';
                out+='<h2>'+data[key]['name']+'<h2>';
                out+='<p>$'+data[key]['price']+'<p>';
                out+='<p class="in-cart" data-art="'+key+'">В КОРЗИНУ</p>';
                out+='</div>';
            }
        }
        $('#goods').html(out);
        $('img.goods-img').on('click', addToCart);
        $('p.in-cart').on('click', addToCart);
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