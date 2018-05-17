let clicker = document.querySelector('.clicks');
let clicks = 0;
let catPic = document.querySelector('.pic');

catPic.addEventListener('click', function(){
    clicks++;
    clicker.textContent = clicks;
})