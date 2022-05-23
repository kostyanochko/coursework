var cart = {};

$.getJSON('db.json', function(data){
    var goods = data;
    checkCart();
    showCart();

    function showCart(){
        var out ='';
        for(var key in cart){
            out += '<div class="single-good-in-cart">';
            out += '<button class="delete-button">X</button>';
            out += '<img class="good-img" src="'+goods[key].image+'" alt="single-good">';
            out += goods[key].name;
            out += '<button class="minus-button">-</button>';
            out += cart[key];
            out += '<button class="plus-button">+</button>';
            out += cart[key]*goods[key].price;
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