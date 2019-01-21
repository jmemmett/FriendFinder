var friends = [
    {
        name: "Animal",
        photo: "https://pbs.twimg.com/profile_images/2002307628/Captura_de_pantalla_2012-03-17_a_la_s__22.14.48_400x400.png",
        scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        match: false
        // Total: 10
    },
    {
        name: "Cher",
        photo: "https://cdn-img.instyle.com/sites/default/files/styles/684xflex/public/images/2011/transformation/1999-cher-400_0.jpg?itok=8KiBL27f",
        scores: [1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
        match: false
        // Total: 15
    },
    {
        name: "Chris",
        photo: "http://atlantablackstar.com/wp-content/uploads/2012/07/Chris-Rock.jpg",
        scores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 
        match: false
        // Total: 20
    },
    {
        name:"Ron",
        photo: "https://pbs.twimg.com/profile_images/412616181372026880/-MEvYG0C_400x400.jpeg",
        scores:[2, 2, 2, 2, 2, 3, 3, 3, 3, 3],
        match: false
        // Total: 25
    },
    {
        name: "Don",
        photo:"https://zverg.com/topic-images/trump-small.jpg",
        scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 
        match: false
        // Total: 30
    },
    {
        name: "Barry",
        photo: "http://pepesnonsmokingpartytimelounge.com/wp-content/uploads/2010/12/barack_obama_smoking_poster-p228879103261724256t5ta_4002.jpg",
        scores: [3, 3, 3, 3, 3, 4, 4, 4, 4, 4],
        match: false
        // Total: 35
    },
    {
        name: "Monica",
        photo: "https://img.buzzfeed.com/buzzfeed-static/static/2016-04/25/14/enhanced/webdr09/original-grid-image-8815-1461608299-15.jpg?crop=475:475;0,78&downsize=400:*&output-format=auto&output-quality=auto",
        scores: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        match: false
        // Total: 40
    },
    {
        name: "George",
        photo: "https://d31fr2pwly4c4s.cloudfront.net/b/e/1/1025447_1_george-clinton-parliament-funkadelic_400.jpg",
        scores: [4, 4, 4, 4, 4, 5, 5, 5, 5, 5],
        match: false
        // Total: 45
    },
    {
        name: "Linda",
        photo: "https://vignette.wikia.nocookie.net/marvel_dc/images/7/70/Lynda_Carter_Mug.jpg/revision/latest?cb=20140415173300",
        scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        match: false
        // Total: 50
    }
]

module.exports = friends;

// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the difference to calculate the totalDifference.
    // Example:
        // User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
        // User 2: [3, 2, 6, 5, 6, 1, 2, 5, 4, 1]
        // Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way, no negative solutions! Your app should calculate both 5-3 and 3-5 as 2 and so on.
// The closest match will be the user with the least amount of difference
// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
    // The modal should display both the name and picture of the closest match.