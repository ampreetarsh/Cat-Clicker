let clicker = document.querySelector('.clicks');
let clicks = 0;
let catPic = document.querySelector('.pic');
let click2 = document.querySelector('.click2');
let catpic2 = document.querySelector('.pic2');
let catClicks2 =0;
let cat1Name = document.querySelector('.name1');
let cat2Name = document.querySelector('.name2');
cat1Name.textContent = "Nancy";
cat2Name.textContent = "Kitty";

catPic.addEventListener('click', function(){
    clicks++;
    clicker.textContent = clicks;
})

catpic2.addEventListener('click', function(){
    catClicks2++;
    click2.textContent = catClicks2;
})