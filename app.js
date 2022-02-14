
function quantity(product,isAdd,price){
    const quantity =document.getElementById(product+'-quantity');
    let value= parseInt(quantity.value)
    if(isAdd){
        value++;
    }else if(value>0){
        value--; 
    }
    quantity.value=value;
    //update price
    const totalPrice = document.getElementById(product+'-price');
    totalPrice.innerText=value*price;
    calculateTotal() 
}
function getprice(product){
    const phonePrice = document.getElementById(product+'-price').innerText;
    const price=parseFloat(phonePrice);
    return price;
}
function calculateTotal(){
    const subTotal =getprice('phone')+getprice('case');
    document.getElementById('subtotal').innerText=subTotal;
    const tax= subTotal/10;
    document.getElementById('tax').innerText=tax;
    document.getElementById('total').innerText=subTotal+tax;
}

//phone event handle
document.getElementById('phone-plus').addEventListener('click',function(){
    quantity('phone',true,1219)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    quantity('phone',false,1219)
})
//case event handle
document.getElementById('case-plus').addEventListener('click',function(){
    quantity('case',true,59)
})
document.getElementById('case-minus').addEventListener('click',function(){
    quantity('case',false,59)
})