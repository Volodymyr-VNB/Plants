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
  
  slickNext.addEventListener("click",function(){
    let scrRight = 'btn-propertyright-Default.svg';
  
    if (slickNext.src.includes(scrRight) ) {
        slickNext.src = './image/btn-propertyright-Active.svg';
        slickPrev.src = './image/btn-propertyleft-Default.svg';   
    };
  
    
  });
  slickPrev.addEventListener("click",function(){
    let scrLeft = 'propertyleft-Default.svg';
    // console.log('window.innerWidth=',window.innerWidth)
    if (slickPrev.src.includes(scrLeft) ) {
        slickPrev.src = './image/btn-propertyLeft-Active.svg';
        slickNext.src = './image/btn-propertyright-Default.svg';   
    };
});
// console.log('window.innerWidth=',window.innerWidth) ширина екрана


$('.our-Trained-Staff-card').slick({
    infinite: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive:[
    {
     breakpoint: 1200,
        settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'dots-style',
        slidesToShow:1

              }
          }
          ]
        });  




$('.our-I-A-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: 'dots-style-our',
    responsive:[
      {
          breakpoint: 1200,
          settings: {
          slidesToScroll: 1,
          slidesToShow:1,
         
 
          }
      }
      
      ]
        });  

