const $heart = window.document.querySelector(".-heart");
const $stars = window.document.querySelectorAll(".star");
const positionLast = $stars.length-1;

$heart.addEventListener('click', handleClick);

$stars.forEach(function($star, key){
    if (key == 0) {
        $star.addEventListener('click', firstStar);
    }

    if (key == positionLast) {
        $star.addEventListener('click', lastStars);
    }

    if (key > 0 && key < positionLast) {
        $star.addEventListener('click', function(){
            middleClick(key);
        });
    }

})

function handleClick() {
    $heart.classList.toggle('-active');
} 

function firstStar() {
    $stars.forEach(function($stars) {
        $stars.classList.remove("-active");
    })
    this.classList.toggle("-active");
} 

function lastStars() {
    $stars.forEach(function ($stars) {
        $stars.classList.add("-active");
    });
}

function middleClick(index) {
    $stars.forEach(function($stars, key){
        $stars.classList.remove('-active');
        if (key <= index) {
            $stars.classList.add('-active');
        }
    });
}



