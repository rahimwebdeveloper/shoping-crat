
function updateCaseNumber (product, praice, isIncaresing){
    const caseInput = document.getElementById( product +'-number');
    let caseNumber = caseInput.value ;
    if(isIncaresing == true){
        caseNumber = parseInt(caseNumber) + 1 ; 
    }
    else if( caseNumber  > 0 ){
        caseNumber = parseInt(caseNumber) - 1 ;
    }

    caseInput.value = caseNumber ;
    const caseTotal = document.getElementById( product +'-total');
    caseTotal.innerText = caseNumber * praice ;

    calculatoTal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber ;
}
function calculatoTal(){
    const phoneTotal = getInputValue('phone') * 1219 ;
    const caseTotal = getInputValue('case') * 59 ;
    const subTotal = phoneTotal + caseTotal ;
    const tex =  subTotal / 50;
    const total = tex + subTotal ;

    document.getElementById('sub-total').innerText = subTotal ;
    document.getElementById('tex-total').innerText = tex ;
    document.getElementById('total-amount').innerText = total ;
}


// phone incaresing decrease events 
document.getElementById('phone-plus').addEventListener('click', function(){
    updateCaseNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateCaseNumber('phone', 1219, false)
})

//case incaresing decrease events 
document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber('case', 59, false)
})

