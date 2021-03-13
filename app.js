//navbar start
const hamburger = document.querySelector('.hamburger');
const helper = document.querySelector('.helper');
const close = document.querySelector('.close');
const navbar = document.querySelector('navbar');
const html = document.querySelector('html');

//links
const links = document.querySelectorAll('nav li a');

links.forEach(function(a){
  
  a.addEventListener('click',function(e){
    
    e.preventDefault();
    
    const id = a.getAttribute('href');
    
    if(id){
      const block = document.querySelector(id);
      
      if(block){
         
        const distance = block.offsetTop;
	  
        var scrollTop = window.scrollY;
        
        if(distance !== 0 || scrollTop !== 0){
          
          if(distance > scrollTop){
            
            var scroll = setInterval(function(){
              
              if(window.scrollY >= distance){
                clearInterval(scroll);
              }
              
              scrollTop += 30;
              window.scrollTo({
                top:scrollTop
              });
              
            },10);
            
          }else{
            
            var scroll = setInterval(function(){
              
              if(window.scrollY <= distance){
                clearInterval(scroll);
              }
              
              scrollTop -= 30;
              window.scrollTo({
                top:scrollTop,
              });
              
            },10);
          }                           
        }
        
      }
    }
    
  });
  
});

//scroll start
const scroll = document.querySelector('.scroll');
const awesome = document.querySelector('.awesome');
scroll.addEventListener('click',function(){

  const distance = awesome.offsetTop;
  
  var scrollTop = window.scrollY;
          
          if(distance > scrollTop){
            
            var scroll = setInterval(function(){
              
              if(window.scrollY >= distance){
                clearInterval(scroll);
              }
              
              scrollTop += 30;
              window.scrollTo({
                top:scrollTop
              });
              
            },10);
            
          }
  
  
//   window.scrollTo({
//         top: distance,
//         behavior: 'smooth'
//       });
});

if(window.innerWidth < 1000){
  
  hamburger.addEventListener('click',function(){
    addClass();
  });
  
  helper.addEventListener('click',function(){
    addClass();
  });
  
  close.addEventListener('click',function(){
    addClass();
  });
  
}

function addClass(){
  navbar.classList.toggle('open');
  html.classList.toggle('overflowed');
}

//navbar end

//b1941ad4-2df6-4574-97a6-0903d6b6fb43
//Map

ymaps.ready(init);

function init(){
  
  const cor = [38.858582,65.792160]
  
  var myMap = new ymaps.Map('map',{
    center:cor,
    zoom:12
  });
  
  const marker = new ymaps.Placemark(cor,{
    balloonContent: 'Qarshi',
    hitContent:'Bu qarshi shahri',
  },{
    iconLayout:'default#image',
    iconImageHref:'./images/mark.png',
    iconImageSize:[36,56]
//    preset:"islands#circleDotIcon",
//    iconColor:'#0000ff'
  });
  myMap.geoObjects.add(marker);
}