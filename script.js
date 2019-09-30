



   
  //magnific popup 
 $(function(){
    $('.video-btn').magnificPopup({type:'iframe'});

 }) 

    // owl carousel
 $(function(){
    $('.team-members').owlCarousel({
          loop:true,
          margin: 5,
          nav:true,
          responsive:{
              0:{
                items: 1
              },
              480:{
                  items:2
              }

            
          }
      })
 }) ;

 // second owl 
 $(function(){
  $('.employee-testimonial-slider').owlCarousel({
    loop:true,
    margin: 5,
    nav:true,
    responsive:{
        0:{
          items: 1
        }

      
    }
    })
}) ;



//  waypionts 
 $(function(){

  $('.team').waypoint(function() {
      $('.progress-bar').each(function(){
        $(this).animate({width: $(this).attr('aria-valuenow') + "%"},2000, "linear");
      });
   

      this.destroy();
      
      
  }, {
    offset: 'bottom-in-view',
  
  });




 });

// responsive tabs
$(function(){
  $('#responsive-service-Tabs').responsiveTabs({
    startCollapsed: 'tabs'

});

})

// isotope filter

$(function(){

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  let filterValue = $(this).attr('data-filter');
  $('#project-grid').isotope({ filter: filterValue });
});



});


// owl
$(function(){
  $('.happy-client-slider ').owlCarousel({
    loop:true,
    margin: 0,
    nav:true,
    responsive:{
        0:{
          items: 1
        },

        480:{
          items: 2
        },

        770:{
          items: 5
        }

      
    }
    })

  



 });

//  owl 

 $(function(){
  $('.post-slider').owlCarousel({
    loop:true,
    margin: 20,
    nav:false,
    rewind: true,
    loop:false,
    autoplay: true,
     dots:false,
    responsive:{
        0:{
          items: 1
        },
      450:{
        items:2
      },  

        780:{
          items: 3
        },
    

      

      
    }
    });
  });







 

// $(function () {

//   $("a.smooth-scroll").click(function (event) {

//       event.preventDefault();

//       // get section id like #about, #servcies, #work, #team and etc.
//       var section_id = $(this).attr("href");

//       $("html, body").animate({
//           scrollTop: $(section_id).offset().top - 55
//       }, 1250);

//   });

// });

// jump to specific section in my custom way to offset the navbar height and add smooth croll also
// smooth scroll with vanilla js
// scroll spy is already taken care by bootstrap
//this only deals with smooth scroll and scrolling to specific section
// calculation is : you get the offset top of the specific section, then minus the height
// of the nav bar and you will arrive right at the section with thout the navbar covering the title 
//of the section
// because the hieght of navbar so we want to arrive somewhere before the actual section content 
// we have fixed navbar in this case



// $(function(){
// borrow document ready of jquery but vanilla js code is inside
// document.querySelectorAll('.smooth-scroll').forEach((item)=>{
//   item.addEventListener('click', function(evt){
//     evt.preventDefault();
//     console.log(this.href);
//     let id = this.href.slice(this.href.indexOf('#'))
//     let offset = document.querySelector(id).offsetTop
//     window.scrollTo(
//       {
//         top: offset-57,
//         behavior: 'smooth',
//       }
      
      
//     );



//   });
// });


// })

// all jquery code 100%
// smooth scroll

// some how in jquery you have to minus 56 for the height of navbar
// the rest distance need to be greater so if nav heoght is 57 than you should -56 
//the the rest distance can be greater 
// the hieght of actual ave bar is 57; 
// scrolltop() jquery ;if you use withou passing value on html or window it return value how
// far away yo have scrolled down away from html or window
// if you use with html and pass in value in will jump to specific ellement
// offset() return how far way from the top of specific element  you choose
// it reutrn ofject containg top and horizontal; you you want to choose top property to see 
// how far away from the top

$(function(){

  $('.smooth-scroll').on('click', function(evt){
    evt.preventDefault();
    let id = $(this).attr('href');
    let offsetFromTop = $(id).offset().top - 56;
    $('html').animate({
      scrollTop: offsetFromTop
    }, 1000);
  })
})

// add class and to add back ground to nav bar and color for link
// use debounce function to call the function as few times as possible to reserve perfromance 
// you dont want the function to call many time when you scroll ; performance issue
$(function(){

  function debounce(func, wait = 13, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  
  


  $(window).on('scroll', debounce(function(){
     console.log(123)
    if($(window).scrollTop() > 70){
      // add active class back ground to nav
      $('#navigation-bar').addClass("active-nav-background");
      $('.nav-item').addClass('color')
    } else{
      $('#navigation-bar').removeClass("active-nav-background");
      $('.nav-item').removeClass('color');
    }

  }));
});

// wow js
$(function(){
  new WOW().init();
})





