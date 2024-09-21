
const selectedSeat = document.getElementById('Selected-seat'); 
const Nodata = document.getElementById('no-data')
const totalCountbook = document.getElementById('count-seat')
let selectedSeatIteems = []
function handleSelectSeat(event) {
    console.log(event.innerText); 
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
    console.log(selectedSeatIteems)
}