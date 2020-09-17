

// get industy data when click
$("#industry-button").on("click", function(event) {
    

  
    event.preventDefault();
    var industry = $("#industry-button").val();
    var queryURL = "https://www.omdbapi.com/?t=" + industry + "&apikey=trilogy";

 
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    console.log(response);
    
  



    });

   

  })





