$(document).ready(function() {

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


	function start () {
		//save the user name
		userName = $("#userName").val().trim();

		if ( userName == "" ) {
			$("#whatName").html("Please enter your name!");
		} else {
			//get the path of current page 
			var indexPath = window.location.pathname;
			//repalce index.html with game.html
			var gamePath = indexPath.replace("index.html", "game.html");
			//window load the game.html 
			window.location.pathname = gamePath;
		};	
	} //start func end

	$("#start").on("click", function () {
		event.preventDefault();	
		start ();
	}) // start btn func end

	$("#start_pc").on("click", function () {
		event.preventDefault();	
		database.ref().set({
	    	userName: "haha",
	    	cool: "xoxo"
	  	});
		// start ();

		database.ref().on("value", function(snapshot) {

	      // Then we console.log the value of snapshot
	      console.log(snapshot.val());
	    });
		
	}) // start pc btn func end
	

	// window.onload = function () {
	//     var e = document.getElementById("myName");
	//     e.innerHTML = "userName" ;
	// };

	




}); //doc.ready end



