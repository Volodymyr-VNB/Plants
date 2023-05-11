$('.clients-saying-slider').slick({
  infinite: true,
  dots: false,
  prevArrow: "<img src='./image/btn-propertyleft-Default.svg' class='slick-prev slick-arrow' style='display: block;' alt='2'>",
  nextArrow: "<img src='./image/btn-propertyright-Default.svg' class='slick-next slick-arrow' style='display: block;' alt='1'>",
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive:[
    {
        breakpoint: 768,
        settings: {
            slidesToShow:2
        }
    },
    {
        breakpoint: 550,
        settings: {
            slidesToShow:1
        }
    }
    ]
  });
  let slickNext=document.querySelector(".slick-next");
  let slickPrev=document.querySelector(".slick-prev");
  console.log(slickNext);
  console.log(slickPrev);
  slickNext.addEventListener("click",function(){
    let scrRight = 'btn-propertyright-Default.svg';
    console.log("slickNext=",slickNext.src);
    console.log("scrLeft=",scrRight);
    if (slickNext.src.includes(scrRight) ) {
        slickNext.src = './image/btn-propertyright-Active.svg';
        slickPrev.src = './image/btn-propertyleft-Default.svg';   
    };
  
    // slickNext.classList.toggle(".slick-next-active");
    // console.log(slickNext.src);
  });
  slickPrev.addEventListener("click",function(){
    let scrLeft = 'propertyleft-Default.svg';
    console.log("slickNext=",slickPrev.src);
    console.log("scrLeft=",scrLeft);
    console.log('window.innerWidth=',window.innerWidth)
    if (slickPrev.src.includes(scrLeft) ) {
        slickPrev.src = './image/btn-propertyLeft-Active.svg';
        slickNext.src = './image/btn-propertyright-Default.svg';   
    };
});
console.log('window.innerWidth=',window.innerWidth)