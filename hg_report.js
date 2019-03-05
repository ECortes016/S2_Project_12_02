"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Emmanuel Cortes Castaneda
   Date: 3.1.19  
   
   Filename: hg_report.js
	
*/

// This variable is for the information of the game to be displayed on the page
var gameReport = "<h1>" + itemTitle + "</h1> <h2>By:" + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt='" + itemID + "' id='gameImg'/> <table><th>Product ID</th><td>" + itemID + "</td><tr><th>List Price</th><td>" + itemPrice + "</td></tr> <tr><th>Platform</th><td>" + itemPlatform + "</td></tr> <tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr> <tr><th>Condition</th><td>" + itemCondition + "</td></tr> <tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;

// This statement will allow for the contents of the game to be displayed on the page.
document.getElementsByTagName("article")[0].innerHTML = gameReport;

// This variable is the initial value of the ratings which will later be add onto
var ratingsSum = 0;

// The rating count is set to the length of the ratings array
var ratingsCount = ratings.length;

// This for loop will go through the contents of the ratings array
for (var i = 0; i < ratingsCount; i++) {
    ratingsSum += ratings[i];
}

// This variable will calculate the average out of the ratings
var ratingsAvg = ratingsSum / ratingsCount;

// This will display the rating that was given towards the game by using different variables
var ratingReport = "<h1>Customer Reviews</h1><h2>" + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>"

// This for loop will display three of the customers reviews.
for (var i = 0; i <= 2; i++) {
    ratingReport += "<div class='review'> <h1>" + ratingTitles[i] + "</h1><table> <tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr> <tr><th>Rating</th><td>";

    // This nested for loop will display the number of stars based on the rating
    for (var j = 1; j <= ratings[i]; j++) {
        ratingReport += "<img src='hg_star.png'/>";
    }
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}

// This will call in the for loop to take action
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;