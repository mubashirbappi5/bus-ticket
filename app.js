
const selectedSeat = document.getElementById('Selected-seat'); 
const Nodata = document.getElementById('no-data')
const totalCountbook = document.getElementById('count-seat')
let selectedSeatIteems = []
let totalPrice = 0;
const totalseatPrice = document.getElementById('total-price')
const couponInput = document.getElementById('coupon-input')
const couponBtn = document.getElementById('coupon-btn')
function handleSelectSeat(event) {
    const value = event.innerText;
    if(selectedSeatIteems.includes(value)){
        return alert("seat already added")
    }
   else if(selectedSeatIteems.length < 4){
    
    event.classList.add('bg-primary')
    event.classList.add('text-white')
    selectedSeatIteems.push(event.innerText)
    totalCountbook.innerText = selectedSeatIteems.length
   

   Nodata.classList.add('hidden')
    const p =document.createElement('p')
    p.innerHTML = `<li class="text-body flex justify-between">
        <span>${event.innerText}</span>
        <span>Economy</span>
        <span>550</span>
    </li>`;
    selectedSeat.appendChild(p)
    

totalPrice +=550;
totalseatPrice.innerText = totalPrice.toFixed(2);

if(selectedSeatIteems.length > 3){
    couponInput.removeAttribute('disabled')
    couponBtn.removeAttribute('disabled')
    
}

   }
   else{
    return alert("you reached max seat")
   }

}

// coupon
document.getElementById('coupon-btn').addEventListener("click",function(e){
    e.preventDefault()
    const couponApply = document.getElementById('coupon-input').value
    if( couponApply === "NEW50"){
        const total = totalPrice /2
       
        const discountPrice = document.getElementById('coupon-total')
        discountPrice.innerText = total.toFixed(2)
        const couponDisplay = document.getElementById('coupon-display')
        couponDisplay.innerHTML = `<p>Discount</p>
                <p>
                  <span>BDT:</span>
                  <span>-${total}</span>
                </p>`

    }
    else if(couponApply ==='COUPLE2'){
        const total = totalPrice - (totalPrice*0.30)
        console.log(total)
        const discountPrice = document.getElementById('coupon-total')
        discountPrice.innerText = total.toFixed(2)
        const couponDisplay = document.getElementById('coupon-display')
        couponDisplay.innerHTML = `<p>Discount</p>
                <p>
                  <span>BDT:</span>
                  <span>-${total*0.30}</span>
                </p>`
    }
    else{
        alert("coupon code is not valid")
    }

})