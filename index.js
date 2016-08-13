// Get the modal
var modal = document.getElementById("modal");
var activate = document.getElementById("act");
var close = document.getElementById("exit");

activate.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
close.onclick = function() {
        modal.style.display = "none";
   }

// $('activate').click(function(){modal.style.display = "block"})


// $('body').click(function(){   
// 	if (event.target == modal) {
//         modal.style.display = "none";
//    }
//   })