var cart = {};

$.getJSON('db.json', function(data){
    var goods = data;
    checkCart();
    showCart();

    function showCart(){
        if($.isEmptyObject(cart)){
            var out = '';
            out +='<ul class="empty-cart-content">';
            out +='<li><p class="empty-cart">Корзина пуста</p></li>';
            out +='<li><img src="img/empty.png" alt="empty"></li>';
            out +='<li><a class="empty-cart" href="index.html"><p>На главную</p></a></li>';
            $('#my-cart').html(out);
        }
        else{
            var out ='';
            for(var key in cart){
                out += '<div class="single-good-in-cart">';
                out += '<button class="delete-button" data-art="'+ key +'"><img src="img/buttons/delete.png" alt="delete"></button>';
                out += '<img src="'+goods[key].image+'" alt="single-good-in-cart">';
                out += '<h2>'+ goods[key].name +'</h2>';
                out += '<ul class="amount-of-goods">';
                out += '<li><button class="minus-button" data-art="'+ key +'"><img src="img/buttons/minus.png" alt="minus"></button></li>';
                out += '<li><h3>'+ cart[key] +'</h3></li>';
                out += '<li><button class="plus-button" data-art="'+ key +'"><img src="img/buttons/plus.png" alt="plus"></button></li>';
                out += '</ul>';
                out += '<p>Цена: $'+ (cart[key]*goods[key].price).toFixed(2) +'</p>';
                out += '</div>';
            }
            $('#my-cart').html(out);
            $('.plus-button').on('click', plusGoods);
            $('.minus-button').on('click', minusGoods);
            $('.delete-button').on('click', deleteGoods);
        }  
    }

    function plusGoods(){
        var articul = $(this).attr('data-art');
        cart[articul]++;
        saveCartToLS();
        showCart();
    }

    function minusGoods(){
        var articul = $(this).attr('data-art');
        if(cart[articul] > 1){
            cart[articul]--;
        }
        else{
            delete cart[articul];
        }
        saveCartToLS();
        showCart();
    }

    function deleteGoods(){
        var articul = $(this).attr('data-art');
        delete cart[articul];
        saveCartToLS();
        showCart();
    }
});

function checkCart(){
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}

function saveCartToLS(){
    localStorage.setItem('cart', JSON.stringify(cart));
}