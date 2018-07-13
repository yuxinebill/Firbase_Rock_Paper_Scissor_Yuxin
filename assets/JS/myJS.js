// Initialize Firebase
var config = {
apiKey: "AIzaSyAILOsoguSDmDDL4JVjWldhEInVlxMpvDg",
authDomain: "rockpaperscissor-yuxin.firebaseapp.com",
databaseURL: "https://rockpaperscissor-yuxin.firebaseio.com",
projectId: "rockpaperscissor-yuxin",
storageBucket: "rockpaperscissor-yuxin.appspot.com",
messagingSenderId: "252442922013"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
//generate a random number to be the key to hold info of the user
var userKey = Math.floor((Math.random() * 100000000000000) + 1);
console.log(userKey);
//save userKey in brower 
sessionStorage.setItem("waterMelon", userKey);  

function changePage () {	
		//get the path of current page 
		var indexPath = window.location.pathname;
		//repalce index.html with game.html
		var gamePath = indexPath.replace("index.html", "game.html");
		//window load the game.html 
		window.location.pathname = gamePath;
} //changePage func end

function changePageVs() {	
		//get the path of current page 
		var indexPath = window.location.pathname;
		//repalce index.html with game.html
		var gamePath = indexPath.replace("index.html", "gamevs.html");
		//window load the game.html 
		window.location.pathname = gamePath;
} //changePage func end


$("#start").on("click", function () {
	event.preventDefault();
	//capture user name
	userName = $("#userName").val().trim();	
	
	thisUser =  {
			"name": userName,
	    	"win": 0,
	    	"tie": 0,
	    	"lose": 0,
	    	"chat": "Hello, my name is " + 	userName + "." ,
	    	"waiting": true,
	    	"mykey" : userKey
	};

	if ( userName == "" ) {
		$("#whatName").html("Please enter your name!");		
	} else {				
		//push the user into firebase 
		database.ref().child('players').child(userKey).set(thisUser); 
        //load game.html
        changePageVs ();								
	}// else end	    
}); //click function end

// 	if ( userName == "" ) {
// 		$("#whatName").html("Please enter your name!");		
// 	} else {
// 		database.ref().once("value").then( function(snapshot) {
// 			//get all users of who want to play with pc in an array
// 		  	var allUsers = Object.keys( snapshot.child('players').val() );
// 		  	//check is there is same name in the existed users
// 		  	var checkUser = allUsers.indexOf(userName);
// 		  	//grab the current time, which is uniq string
// 			var newDate = new Date();
// 			//if there is same name as the name just type in, then add newDate into the name
// 			if (checkUser >=0) {
// 				userName = userName + "_" + newDate;
// 			}
// 			//push the user into firebase 
// 			database.ref().child('players').child(userName).set(thisUser);
// 			//load game.html
// 			changePage ();
// 		}); // once snapshot is end 
// 	} // if else end		
// }); // start btn func end



$("#start_pc").on("click", function () {
	
	event.preventDefault();

	//capture user name
	userName = $("#userName").val().trim();	
	
	thisUser =  {
			"name": userName,
	    	"win": 0,
	    	"tie": 0,
	    	"lose": 0,
	    	"chat": "Hello, my name is " + 	userName + "." ,
	    	"waiting": true 
	};
	console.log(userKey);
	if ( userName == "" ) {
		$("#whatName").html("Please enter your name!");		
	} else {				
		//push the user into firebase 
		database.ref().child('pc').child(userKey).set(thisUser); 
        //load game.html
        changePage ();								
	}// else end		
	

}) // start pc btn func end


// database.ref().on("value", function(snapshot) {
// 	//get all users of who want to play with pc
//   	var allUsers = snapshot.child('pc').val();
  	
// });

// function haha () {
// 	$(document).on("load", "#myName", function() {
// 		$("#myName").text('haha');
// 	})
// };



	



