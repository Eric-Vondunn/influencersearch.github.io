

// get industy data when click
$("#industry-button").on("click", function(event) {
    
console.log("123")
  
    event.preventDefault();
    // var industry = $("#industry-button").val();
    // var queryURL = "https://www.omdbapi.com/?t=" + industry + "&apikey=trilogy";
    var queryURL = "http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1&&apikey=trilogy";

 
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    console.log(response);
    
    // get result data
    for (var i = 0; i < response.Episodes.length; i++){
    //  append profile info
    // var getImage = $("<img>").wrap( 
        // need to update data path
        // $('<a>').attr("href", response.data[i].Poster )
       var followerNum = $("<div>").text(response.Episodes[i].imdbRating)
        $("#topThree").append(followerNum)



        

    }



    });

   

  })





