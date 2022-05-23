var cart = {};

$.getJSON('db.json', function(data){
    var goods = data;
    checkCart();
    showCart();

    function showCart(){
        var out ='';
        for(var key in cart){
            out += key + '<br>';
        }
        $('#my-cart').html(out);
    }
});

function checkCart(){
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}