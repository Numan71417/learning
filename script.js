// Retrieve value from localStorage if available, otherwise default to 0
let percentage = localStorage.getItem('percentage') || 0;

// Update the circle percentage display
function updateCircle(percentage) {
    const circle = document.getElementById('circle');
    const per = document.getElementById('per');
    const inp = document.getElementById('num')
    const perText = document.getElementById('perText')
    perText.innerHTML = percentage+" / 255"
    inp.value = percentage
    percentage = (percentage/455)*100;
    percentage = percentage.toFixed(1);
    per.textContent = percentage + '%';
    if(percentage>100){
        percentage = 0;
        per.textContent = percentage + '%';
        inp.value = percentage
        // updateLocalStorageAndCircle(percentage)

    }
    circle.style.background = `conic-gradient(#2ecc71 ${percentage}%, #dabeff ${percentage}% 100%)`;
}

// Update localStorage and circle display
function updateLocalStorageAndCircle(percentage) {
    localStorage.setItem('percentage', percentage);
    updateCircle(percentage);
}

// Initialize circle display
updateCircle(percentage);

// Event listener for plus button
document.getElementById('plus').addEventListener('click', function() {
    if(percentage >= 455){
        updateLocalStorageAndCircle(0);
    }
    percentage++;
    updateLocalStorageAndCircle(percentage);
});

// Event listener for minus button
document.getElementById('minus').addEventListener('click', function() {
   
    if (percentage > 0) {
        percentage--;
        updateLocalStorageAndCircle(percentage);
    }
});

const handleNum = ()=>{
   const number =  document.getElementById('num').value;
   if(number>455){
    updateLocalStorageAndCircle(0);
   }
   updateLocalStorageAndCircle(number);

}


// Event listener for input change
document.getElementById('num').addEventListener('input', function() {
    let val = parseInt(this.value);
    if (!isNaN(val) && val >= 0 && val <= 100) {
        percentage = val;
        updateLocalStorageAndCircle(percentage);
    }
});
