let carouselImage = document.querySelectorAll('.carousel-cell')
console.log(carouselImage);
let nextSlide = document.getElementById('next'),
prevSlide = document.getElementById('prev')
let num = 1;
nextSlide.onclick = function(){
    // console.log('next clicked');
    num += 1;
    if(num > carouselImage.length){
        // console.log(num);
        num = 1;
        console.log(carouselImage[num]);
    }
    if(num < carouselImage.length){
        for(let i = num; i<carouselImage.length;i++){
            console.log(num);
        }
    }
}
prevSlide.onclick = function(){
    console.log('prev clicked');
}