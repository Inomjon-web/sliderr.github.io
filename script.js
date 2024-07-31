let images = document.querySelectorAll('img');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let i = 0;

next.addEventListener('click', function () {
    images[i].style.display = 'none';
    console.log(i);
    i++;
    
    if(images.length <= i) {
        i = 0;
    }
    images[i].style.display = 'block';
    console.log(i);
});

prev.addEventListener('click', function () {
    images[i].style.display = 'none';
    console.log(i);
    i--;
    
    if(i < 0) {
        i = images.length - 1;
    }
    images[i].style.display = 'block';
    console.log(i);
})
