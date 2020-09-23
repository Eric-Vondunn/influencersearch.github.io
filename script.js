

// get industy data when click
$(".ui").on("click", function(event) {
    event.preventDefault()
    var search = $(this).text()
    console.log(search)
var settings = {
"async": true,
"crossDomain": true,
"url": "https://influencer-search.p.rapidapi.com/api/v1/influencer/search",
"method": "POST",
"headers": {
"x-rapidapi-host": "influencer-search.p.rapidapi.com",
"x-rapidapi-key": "a0b4de0f6dmsh290e3401b259012p1ce0acjsn01ea65896899",
"content-type": "application/json",
"accept": "application/json"
},
"processData": false,
"data": "{    \"query\": {        \"keyword\": \""+search+"\"    }}"
}

$.ajax(settings).done(function (response) {


$(".latinVerbiage").hide().fadeIn(800)
$(".classTwo").hide().fadeIn(1600)
$(".classFour").hide().fadeIn(2000)
// get industy data when click

    console.log($(this).text())
    event.preventDefault();
    $("#topThree").text("")
    
    // get result data
    console.log(response)
    // loop over top three and assign css style
    for (var i = 0; i < 3; i++){
    //  append profile info
    var img = response.data[i].profile_image_url
    var normalImg = img.replace("normal", "400x400")
    var profileImage=$("<img>").attr("src", normalImg )
    var followerNum = $("<div>").text(parseInt(response.data[i].followers_count*0.00001))
    var followerText = $("<div>").text("Follwers")
    var profileName =$("<div>").text(response.data[i].name)
    var profileDescription =$("<div>").text(response.data[i].description)
    var link = $("<a>").attr("href","https://twitter.com/" + response.data[i].screen_name)
    var profileLink = $("<div>").text("Hire Now")
    followerNum.attr("value", parseInt(response.data[i].followers_count*0.00001))
    followerText.addClass("top-three-followers")
    profileLink.addClass("button top-three-button")
    link.append(profileLink)
    link.attr("target","_blank")
    
   
   
    profileImage.addClass("top-three-img")
    followerNum.attr("id", "top-num")
    followerNum.addClass("top-three-num")
    profileName.css("text-align", "center")
    profileName.attr("id", "profile-name")
    profileDescription.addClass("top-three-body")
    var topThreeEl = $("<div>").append(profileImage, followerNum, followerText, profileName, profileDescription, link);
    topThreeEl.attr("id", i)
    topThreeEl.addClass("col-11 col-xs-11 col-sm-11 col-md-3 col-lg-3 top-three-card")
    $("#topThree").append(topThreeEl)

    }
    // Add text also popular
    $("#divider").text("")
    var sectionDivider = $("<div>").text("Also Popular")
    $("#divider").append(sectionDivider)
    $("#divider").addClass("section-divider latinVerbiage")

    
    // loop over rest of results
    $("#additionalOptions").text("")
    for (var i=3; i<10; i++){
        // Creating image elements  
        var img = response.data[i].profile_image_url
        var normalImg = img.replace("normal", "400x400")
        var profileImage=$("<img>").attr("src", normalImg )
        var profileImgWrap=$("<div>").append(profileImage)
        profileImage.addClass("rest-result-img")
        profileImgWrap.addClass("col-6 col-xs-6 col-sm-2" )

        // Creating column with followers count
        var followerNum = $("<div>").text(parseInt(response.data[i].followers_count*0.00001) + "M")
        var followersWord =$("<p>").text("Followers")
        var followerWrap = $("<div>").append(followerNum, followersWord)
        followerWrap.addClass("col-6 col-xs-6  col-sm-2 col-sm-2")
        
        // Creating title and description
        var profileName =$("<p>").text(response.data[i].name)
        profileName.addClass("title")
        var profileDescription =$("<div>").text(response.data[i].description)
        var profileGroup = $("<div>").append(profileName,profileDescription)
        profileGroup.addClass("col-12 col-sm-6 profileName")
        profileDescription.addClass("profile-body")

        // Creating link to Twitter 
        var viewProfile = $("<div>").addClass("col-12 col-sm-auto")
        var link = $("<a>").attr("href","https://twitter.com/" + response.data[i].screen_name);
        var arrow = $("<img>").attr("src", "https://github.com/pankuanting102/week-2-homework-responsive-portfolio/blob/master/Assets/arrow@2x.png?raw=true")
        arrow.addClass("arrow")
        link.attr("target","_blank")
        link.text("Hire Now")
        viewProfile.append(link, arrow); 
       

        // Adding hr element 
        var hrEl = $("<hr>");

        // Assign classes 
        profileImage.addClass("rest-result-img")
        followerNum.attr("id", "top-num")
        followerNum.addClass("followerNumb")
        

        // Appending all elements to the page 
        var restSearch = $("<div>").append(profileImgWrap, followerWrap, profileGroup, viewProfile);
        

        restSearch.addClass("row align-items-center resultRow")
        $("#additionalOptions").append(restSearch)
        $("#additionalOptions").append(hrEl);
    }
    $("#0").hide().fadeIn(400);
    $("#1").hide().fadeIn(800);
    $("#2").hide().fadeIn(1200);
   $('.top-three-num').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter)+"M");
          }
        });
      });
      
      
      
  
      

});



    // show news
    // Second Api
    console.log($(this).text())
    var search= $(this).text()
    $("#latest-news-divider").text("")
    var newsDivider = $("<div>").text("Latest News in " + search + " Industry")
    $("#latest-news-divider").append(newsDivider)
    $("#latest-news-divider").addClass("latest-divider")
   $("#recent-news").html("")
    var newsURL ="http://newsapi.org/v2/everything?q=" + search + "&from=2020-09-21&sortBy=publishedAt&apiKey=b8119873418145159f70b8c8143ec7ef"; 
          $.ajax({
              url: newsURL,
              method: 'get'
              }).then(function(response) {
                
          console.log(response)

        
          for(var i = 0; i < 2; i++){
            
            var getNewsTitle = $("<div>").text(response.articles[i].title)
            var getNewsDate = $("<div>").text((response.articles[i].publishedAt).slice(0, 10))
            var getNewsUrl = $("<a>").attr("href", response.articles[i].url)
            getNewsUrl.text("Read More")
            getNewsUrl.attr("target","_blank")
            var arrow = $("<img>").attr("src", "https://github.com/pankuanting102/week-2-homework-responsive-portfolio/blob/master/Assets/arrow@2x.png?raw=true")
            arrow.addClass("arrow")
            var getNewsImgUrl = response.articles[i].urlToImage
            var readMoreEl= $("<div>").append(getNewsUrl)
            readMoreEl.append(getNewsUrl, arrow)
            readMoreEl.css("margin-top", "20px")
            readMoreEl.css("margin-bottom", "10px")
            var textEl = $("<div>").append(getNewsDate, getNewsTitle, readMoreEl)
            textEl.css("padding", "20px")
            var imgEl = $("<img>").attr("src", getNewsImgUrl)
            imgEl.addClass("recent-news-img")
            var newsEl = $("<div>").append(imgEl, textEl)
            newsEl.addClass("recent-news-card")
            var cardEl = $("<div>").append(newsEl)
            cardEl.attr("id", "news-wrap")
            var newsWrapper= $("<div>").addClass("col-12 col-xs-12 col-sm-6 col-md-6 col-lg-6")
            newsWrapper.append(cardEl)
            $("#recent-news").append(newsWrapper)
          }
           
               



          })  
})



