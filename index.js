// update casing number 

function updateCasingNumber(isIncrease){
    const casingInput = document.getElementById("casingInput");
    
    let casingInputValue = casingInput.value;
    if(isIncrease==true){
        casingInputValue = parseInt(casingInputValue)+1;
    }
    else if(casingInputValue>0){
        casingInputValue = parseInt(casingInputValue)-1;
    }

    casingInput.value = casingInputValue;

    const casingAmount = document.getElementById("casingAmount");
    casingAmount.innerText = casingInputValue*59;
    calculateTotal();
    
}

document.getElementById("casing-increaseButton").addEventListener("click", function(){
updateCasingNumber(true);
 });

document.getElementById("casing-decreaseButton").addEventListener("click", function(){
updateCasingNumber(false)
        
});

// update phone number 

function updatePhoneNumber(isIncrease){
    const phoneInput = document.getElementById("phoneInput");
    let phoneInputValue = phoneInput.value;
    if(isIncrease == true){
        phoneInputValue = parseInt(phoneInputValue)+1;
    }
    else if(phoneInputValue>0){
        phoneInputValue = parseInt(phoneInputValue)-1;
    }

    phoneInput.value = phoneInputValue;
   const phoneAmount= document.getElementById("phoneAmount");
   phoneAmount.innerText = phoneInputValue*1219;
   calculateTotal();
}

// update total amount

function calculateTotal(){
    const phoneInput = document.getElementById("phoneInput");
    const phoneInputValue = parseInt(phoneInput.value);

    const casingInput = document.getElementById("casingInput");
    const casingInputValue = parseInt(casingInput.value);

    const subTotal = phoneInputValue*1219+casingInputValue*59;
    document.getElementById("sub-total").innerText = subTotal;

    const tax = Math.round(subTotal*0.1);
    document.getElementById("tax").innerText = tax;

    const totalPrice = subTotal+ tax;
    document.getElementById("total").innerText=totalPrice;
}

document.getElementById("phone-increaseButton").addEventListener("click", function(){
updatePhoneNumber(true)
})

 document.getElementById("phone-decreaseButton").addEventListener("click", function(){
updatePhoneNumber(false);
 })