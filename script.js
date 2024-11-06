
// cuppon 

document.getElementById('apply-btn').addEventListener('click', function(){
    // console.log('apply btn worked sir')
    const couponInput =document.getElementById('coupon-input');
    const couponCode = couponInput.value;
    // console.log(couponCode)

    // verify
    if (couponCode == 'SELL200'){
        const oldDiscount = document.getElementById('discount');
        const oldDiscountnumber = parseInt(oldDiscount.innerText);
        const newDiscountnuber = oldDiscountnumber + 5
        oldDiscount.innerText =newDiscountnuber
    }

    else{
        
    }
})

//    discount   //






// Purchase

document.getElementById('btn-1-1').addEventListener('click',function(){

    const selectedItem = document.getElementById('selected-item');

    const li = document.createElement('li');
    li.innerText = 'K. Accessories';

    selectedItem.appendChild(li);

    const totalPrice = document.getElementById('total-price')
    // totalPrice.innerText = '39.00 TK'
    // ------
    // totalPriceString = totalPrice.value;
    // ------------
    const previousTotalPrice = parseInt(totalPrice.innerText);
    const newTotalPrice = previousTotalPrice + 39;
    // console.log(newTotalPrice);
    totalPrice.innerText = newTotalPrice
    const discount = document.getElementById('discount');
    const discountNumber = parseInt(discount.innerText);
    // const total = document.getElementById('total');
    // const totalNumber = parseInt(total.innerText);
    
    const newTotal = newTotalPrice - discountNumber ;
    total.innerText = newTotal;

})



document.getElementById('btn-1-2').addEventListener('click',function(){

    const selectedItem = document.getElementById('selected-item');

    const li = document.createElement('li');
    li.innerText = 'K. Accessories';
    selectedItem.appendChild(li);
    const totalPrice = document.getElementById('total-price')
    const previousTotalPrice = parseInt(totalPrice.innerText);
    const newTotalPrice = previousTotalPrice + 25;
    // console.log(newTotalPrice);
    totalPrice.innerText = newTotalPrice
    const discount = document.getElementById('discount');
    const discountNumber = parseInt(discount.innerText);
    const newTotal = newTotalPrice - discountNumber ;
    total.innerText = newTotal;
})


document.getElementById('btn-1-3').addEventListener('click',function(){

    const selectedItem = document.getElementById('selected-item');

    const li = document.createElement('li');
    li.innerText = 'Home Cooker';
    selectedItem.appendChild(li);
    const totalPrice = document.getElementById('total-price')
    const previousTotalPrice = parseInt(totalPrice.innerText);
    const newTotalPrice = previousTotalPrice + 49;
    // console.log(newTotalPrice);
    totalPrice.innerText = newTotalPrice
    const discount = document.getElementById('discount');
    const discountNumber = parseInt(discount.innerText);
    const newTotal = newTotalPrice - discountNumber ;
    total.innerText = newTotal;

})


// btn-2-1

document.getElementById('btn-2-1').addEventListener('click',function(){

    const selectedItem = document.getElementById('selected-item');

    const li = document.createElement('li');
    li.innerText = 'Sports Back Cap';
    selectedItem.appendChild(li);
    const totalPrice = document.getElementById('total-price')
    const previousTotalPrice = parseInt(totalPrice.innerText);
    const newTotalPrice = previousTotalPrice + 49;
    // console.log(newTotalPrice);
    totalPrice.innerText = newTotalPrice
    const discount = document.getElementById('discount');
    const discountNumber = parseInt(discount.innerText);
    const newTotal = newTotalPrice - discountNumber ;
    total.innerText = newTotal;

})

//btn-2-2

document.getElementById('btn-2-2').addEventListener('click',function(){

    const selectedItem = document.getElementById('selected-item');

    const li = document.createElement('li');
    li.innerText = 'Full Jersey Set';
    selectedItem.appendChild(li);
    const totalPrice = document.getElementById('total-price')
    const previousTotalPrice = parseInt(totalPrice.innerText);
    const newTotalPrice = previousTotalPrice + 69;
    // console.log(newTotalPrice);
    totalPrice.innerText = newTotalPrice
    const discount = document.getElementById('discount');
    const discountNumber = parseInt(discount.innerText);
    const newTotal = newTotalPrice - discountNumber ;
    total.innerText = newTotal;

})



// btn-2-3

document.getElementById('btn-2-3').addEventListener('click',function(){

    const selectedItem = document.getElementById('selected-item');

    const li = document.createElement('li');
    li.innerText = 'Sports cates';
    selectedItem.appendChild(li);
    const totalPrice = document.getElementById('total-price')
    const previousTotalPrice = parseInt(totalPrice.innerText);
    const newTotalPrice = previousTotalPrice + 159;
    // console.log(newTotalPrice);
    totalPrice.innerText = newTotalPrice
    const discount = document.getElementById('discount');
    const discountNumber = parseInt(discount.innerText);
    const newTotal = newTotalPrice - discountNumber ;
    total.innerText = newTotal;

})


// btn-3-1

document.getElementById('btn-3-1').addEventListener('click',function(){

    const selectedItem = document.getElementById('selected-item');

    const li = document.createElement('li');
    li.innerText = 'Single Relax Chair';
    selectedItem.appendChild(li);
    const totalPrice = document.getElementById('total-price')
    const previousTotalPrice = parseInt(totalPrice.innerText);
    const newTotalPrice = previousTotalPrice + 185;
    // console.log(newTotalPrice);
    totalPrice.innerText = newTotalPrice
    const discount = document.getElementById('discount');
    const discountNumber = parseInt(discount.innerText);
    const newTotal = newTotalPrice - discountNumber ;
    total.innerText = newTotal;

})


// btn-3-2

document.getElementById('btn-3-2').addEventListener('click',function(){

    const selectedItem = document.getElementById('selected-item');

    const li = document.createElement('li');
    li.innerText = 'Children play';
    selectedItem.appendChild(li);
    const totalPrice = document.getElementById('total-price')
    const previousTotalPrice = parseInt(totalPrice.innerText);
    const newTotalPrice = previousTotalPrice + 299;
    // console.log(newTotalPrice);
    totalPrice.innerText = newTotalPrice
    const discount = document.getElementById('discount');
    const discountNumber = parseInt(discount.innerText);
    const newTotal = newTotalPrice - discountNumber ;
    total.innerText = newTotal;

})



// btn-3-3

document.getElementById('btn-3-3').addEventListener('click',function(){

    const selectedItem = document.getElementById('selected-item');

    const li = document.createElement('li');
    li.innerText = 'Children play';
    selectedItem.appendChild(li);
    const totalPrice = document.getElementById('total-price')
    const previousTotalPrice = parseInt(totalPrice.innerText);
    const newTotalPrice = previousTotalPrice + 299;
    // console.log(newTotalPrice);
    totalPrice.innerText = newTotalPrice
    const discount = document.getElementById('discount');
    const discountNumber = parseInt(discount.innerText);
    const newTotal = newTotalPrice - discountNumber ;
    total.innerText = newTotal;

})








// Total 



