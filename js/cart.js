var cart = {};

$.getJSON('db.json', function(data){
    var goods = data;
    checkCart();
    showCart();

    function showCart(){
        var out ='';
        for(var key in cart){
            out += '<div class="single-good-in-cart">';
            out += '<button class="delete-button"><img src="img/buttons/delete.png" alt="delete"></button>';
            out += '<img src="'+goods[key].image+'" alt="single-good-in-cart">';
            out += '<h2>'+ goods[key].name +'</h2>';
            out += '<ul class="amount-of-goods">';
            out += '<li><button class="minus-button"><img src="img/buttons/minus.png" alt="minus"></button></li>';
            out += '<li><h3>'+ cart[key] +'</h3></li>';
            out += '<li><button class="plus-button"><img src="img/buttons/plus.png" alt="plus"></button></li>';
            out += '</ul>';
            out += '<p>Цена: $'+ cart[key]*goods[key].price +'</p>';
            out += '</div>';
        }
        $('#my-cart').html(out);
    }
});

function checkCart(){
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}