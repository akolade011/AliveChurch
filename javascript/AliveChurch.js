// $( "#houseText" ).hover(function() {
// $(this).css("color","red")
// });

// $( "#houseText" ).mouseout(function() {
// $(this).css("color","white")
// });



var getButton = document.querySelector(".navbar-toggler");

var mainContent = document.querySelector(".header-content");
 




getButton.addEventListener("click",function(){

    mainContent.classList.toggle("hide");
    

})



$( ".icon100" ).hover(function() {
    $(this).css("color","red")
    });
    
    $( ".icon100"  ).mouseout(function() {
    $(this).css("color","white")
    });
    
    
    
    
    
    // $( "#btn1" ).hover(function() {
    // $(this).css("color","red")
    // });
    
    // $( "#btn1"  ).mouseout(function() {
    // $(this).css("color","black")
    // });
    
    // $( "#btn2" ).hover(function() {
    // $(this).css("color","red")
    //   });
    
    //   $( "#btn2"  ).mouseout(function() {
    //     $(this).css("color","black")
    //       });
    
    
    
    
    
    
    $( ".buttonColor" ).mouseover(function() {
    $(this).css("background-color","green")
    
    });
    
    $( ".buttonColor" ).mouseout(function() {
    $(this).css("color","white")
    $(this).css("background-color","gray")
    });
    $("body").on("keyup keypress blur change mouseenter mouseout",function(){
    
    
    })
    
    
    
      
    
    
    
    
    // $("h1").on("click",function(){
    
    //   $(this).fadeOut();
    // });
    // $(function(){
    //   $(document).scroll(function(){
    
    
    //     var $nav = $(".navbar")
    //     $nav.toggle("scrolled",$(this).scrollTop()>$nav.height());
    //   }
    //   )
    // })
    
    // $( ".buttonColor" ).hover(function() {
    //   $(this).css("background-color","gray")
    //   $("#Ministers").css("opacity","0.3")
    //     });
    
    // $( ".buttonColor" ).mouseout(function() {
    //   $(this).css("color","white")
    //   $("#Ministers").css("opacity","2")
    //     });
    
    
    
    var showText = function (target, message, index, interval) {   
      if (index < message.length) {
        $(target).append(message[index++]);
        setTimeout(function () { showText(target, message, index, interval); }, interval);
      }
    }
    $(function () {
      showText("#msg", "Service Times", 0, 100);   
    });
    
    
    var showText = function (target, message, index, interval) {   
      if (index < message.length) {
        $(target).append(message[index++]);
     
        setTimeout(function () { showText(target, message, index, interval); }, interval);
       
      }
    }
    $(function () {
      showText("#msg2", "Contact Us", 0, 100); 
      
    });
    var showText = function (target, message, index, interval) {   
      if (index < message.length) {
        $(target).append(message[index++]);
     
        setTimeout(function () { showText(target, message, index, interval); }, interval);
       
      }
    }
    $(function () {
      showText("#VictoryHouseText", " Alive Church", 0, 150); 
    
      
    });
    
    
    function slidein(){
    
      $("#invite").fadeIn(8000);
          $("#invite").css("color","black");
          $(".OURSERVICERight").fadeIn(1000);
          $(".OURSERVICELeft").fadeIn(1000);
    }
    
    slidein();
   
