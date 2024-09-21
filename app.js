
const selectedSeat = document.getElementById('Selected-seat'); 
const Nodata = document.getElementById('no-data')
function handleSelectSeat(event) {
    console.log(event.innerText); 

   Nodata.classList.add('hidden')
    const p =document.createElement('p')
    p.innerHTML = `<li class="text-body flex justify-between">
        <span>${event.innerText}</span>
        <span>Economy</span>
        <span>550</span>
    </li>`;
    selectedSeat.appendChild(p)
}