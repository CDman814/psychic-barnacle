$(document).ready(function () {
  console.log("doc is ready");
  alert('yo');
  // $
  //   ("#buttonCount").click(function (){

  //     console.log('you clicked the button');
    $('#buttonCount').click( function(){
      var counter = 0;
      counter++;
      let message = "Clicked " + counter + " times"
      $("#buttonOutput").html(message);
      } );
    } )
    

    // });

// })