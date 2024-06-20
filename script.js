//liked_item

const liked_item=document.querySelectorAll('.like');
for(let i=0; i<liked_item.length; i++){
    liked_item[i].addEventListener('click',() => {
        if(liked_item[i].style.color=='red'){
            liked_item[i].style.color='gray';
        }
        else{
            liked_item[i].style.color='red'
        }
    });
}

//remove_element

const remove_element=document.querySelectorAll('.remove');
const list_group_item=document.querySelectorAll('.list-group-item');
for(let i=0; i<remove_element.length; i++){
    remove_element[i].addEventListener('click',() => {
        list_group_item[i].remove();
        updateTotal();
    });
}

//remove_all_elements

const remove_all_elements=document.querySelectorAll('.remove-all');
const list_group=document.querySelector('.list-group');
for(let i=0; i<remove_element.length; i++){
    if(remove_all_elements[i]){
        remove_all_elements[i].addEventListener('click',() => {
            if(confirm('Are you sure?')){
                list_group.remove();
            }
            updateTotal();
        });
    }
}

// validate_command

const validate_command=document.getElementById('validate');
const boxValidation=document.createElement('div');
const container=document.querySelector('.container');
validate_command.addEventListener('click',() => {
    if(confirm('Are you sure?')){
        container.remove();
        document.body.appendChild(boxValidation);
        boxValidation.classList.add('boxValidation');
        boxValidation.innerHTML=`<h1>Your order has been validated</h1>`
    }
});

// cancel_command

const cancel_command=document.getElementById('cancel');
const boxCancel=document.createElement('div');
cancel_command.addEventListener('click',() => {
    if(confirm('Are you sure?')){
        container.remove();
        document.body.appendChild(boxCancel);
        boxCancel.classList.add('boxCancel');
        boxCancel.innerHTML=`<h1>Your order has been cancelled</h1>`
    }
});

//add_item

const add_item=document.querySelectorAll('.add-item');
for(let i=0; i<add_item.length; i++){
    add_item[i].addEventListener('click',() => {
        const quantity=add_item[i].previousElementSibling;
        const quantityElement=parseInt(quantity.innerText);
        const newQuantity=quantityElement+1;
        quantity.innerText=newQuantity;
        updateProductPrice(add_item[i], newQuantity);
        updateTotal();
    });
}

//subtract_item

const sub_item=document.querySelectorAll('.sub-item');
for(let i=0; i<sub_item.length; i++){
    sub_item[i].addEventListener('click',() => {
        const quantity=sub_item[i].nextElementSibling;
        const quantityElement=parseInt(quantity.innerText);
        const newQuantity=quantityElement-1;
        if(quantityElement>1){
            quantity.innerText=newQuantity;
        }
        updateProductPrice(sub_item[i], newQuantity);
        updateTotal();
    });
}

// updateProductPrice 

function updateProductPrice(button, quantity) {
    quantity = quantity || 1;
    const listItem = button.closest('.list-group-item');
    const priceElem = listItem.querySelector('.price-product');
    const unitPrice = parseFloat(priceElem.dataset.unit);
    const newPrice = (unitPrice * quantity).toFixed(2);
    priceElem.innerText = newPrice;
}

// updateTotal

function updateTotal() {
    let totalItems = 0;
    let totalPrice = 0;
    const items = document.querySelectorAll('.list-group-item');
    for (let i = 0; i < items.length; i++) {
        const priceElem = items[i].querySelector('.price-product');
            const price = parseFloat(priceElem.innerText);
            totalItems += 1;
            totalPrice += price;
    }
    const totalItemsElem = document.getElementById('total_items');
    const totalPriceElem = document.querySelector('.total_price');
    totalItemsElem.innerText = totalItems;
    totalPriceElem.innerText = totalPrice.toFixed(2);
}
updateTotal();