 var web = 0; 
 var ml = 0;
 var ai = 0;
 var ds = 0; 
 var bl = 0; 
 var cc = 0;
 var max = 0, val;

$(document).ready(function(){
  $("#hidden").hide();
   $("#ml").hide();
   $("#ai").hide();
   $("#webDev").hide();
   $("#blockChain").hide();
   $("#cloudC").hide();
   $("#dataScience").hide();


  $("#show").click(function(){
    $("#hidden").show(1500);
  });
  $(".good1").click(function(){
      ai = ai + 2;
      ml = ml + 3;
      $(".good1").toggleClass("active");
      $(".bad1").removeClass("active");
  });
  $(".good2").click(function(){
      web = web+3;
      ai = ai+1;
      $(".good2").toggleClass("active");
      $(".bad2").removeClass("active");
  });
  $(".good3").click(function(){
       cc = cc+1;
       bl = bl+3;
       $(".good3").toggleClass("active");
       $(".bad3").removeClass("active");
  });
  $(".good4").click(function(){
      cc = cc+2;
      $(".good4").toggleClass("active");
      $(".bad4").removeClass("active");
  });
  $(".good5").click(function(){
      ds = ds+3;
      $(".good5").toggleClass("active");
      $(".bad5").removeClass("active");
  });
  $(".bad1").click(function(){
      ai = ai - 2;
      ml = ml - 3;
      $(".bad1").toggleClass("active");
      $(".good1").removeClass("active");
  });
  $(".bad2").click(function(){
      web = web-3;
      ai = ai-1;
      $(".bad2").toggleClass("active");
      $(".good2").removeClass("active");
  });
  $(".bad3").click(function(){
       cc = cc-1;
       bl = bl-3;
       $(".bad3").toggleClass("active");
       $(".good3").removeClass("active");
  });
  $(".bad4").click(function(){
      cc = cc-2;
      $(".bad4").toggleClass("active");
      $(".good4").removeClass("active");
  });
  $(".bad5").click(function(){
      ds = ds-3;
      $(".bad5").toggleClass("active");
      $(".good5").removeClass("active");
  });

  $(".good6").click(function(){
      if(max< web){
         max = web;
         val = 1;
      }
      if(max < ml){
      	max = ml;
      	val = 2;
      }
      if(max < ai){
      	max = ai;
      	val = 3;
      }
      if(max < ds){
      	max = ds;
      	val = 4;
      }
      if(max < bl){
      	max = bl;
      	val = 5;
      }
      if(max < cc){
      	max = cc;
      	val = 6;
      }
      if(val == 1){
         $("#webDev").show();
      }
      if(val == 2){
         $("#ml").show();
      }
      if(val == 3){
         $("#ai").show();
      }
      if(val == 4){
      	$("#dataScience").show();
      }
      if(val == 5){
      	$("#blockChain").show();
      }
      if(val == 6){
      	$("#cloudC").show();
      }

  });

  $(".bad6").click(function(){
     web = 0; 
     ml = 0;
     ai = 0;
     ds = 0; 
     bl = 0; 
     cc = 0;
     max = 0; 
     val = 0;
     $(".bad1").removeClass("active");
     $(".bad2").removeClass("active");
     $(".bad3").removeClass("active");
     $(".bad4").removeClass("active");
     $(".bad5").removeClass("active");
     $(".bad6").removeClass("active");
     $(".good1").removeClass("active");
     $(".good2").removeClass("active");
     $(".good3").removeClass("active");
     $(".good4").removeClass("active");
     $(".good5").removeClass("active");
     $(".good6").removeClass("active");
     $("#ml").hide();
   $("#ai").hide();
   $("#webDev").hide();
   $("#blockChain").hide();
   $("#cloudC").hide();
   $("#dataScience").hide();
  });

});

// 5
1
2
3