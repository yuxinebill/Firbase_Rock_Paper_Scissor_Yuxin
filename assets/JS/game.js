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
//get the userKey val from local storage 
var userKey = sessionStorage.getItem("bar"); 
//read the firebase data and pull the info if the user
database.ref().once("value").then( function(snapshot) {
	//pull the info of user form firecase
	var koko = snapshot.child('pc').child(userKey).val();
	console.log(koko.name);
	//write the user's name on page
	$("#myName").text(koko.name);
	//write the pc's name
	$ ("#opponentName").text("Mr. PC")
	//whenever the user click the btn
	$(".allBtns").on("click", function() {
		//display the img user chosen on the big window
		var yeah = $(this).find("img").attr("src");
		$("#myBigImg").attr("src", yeah);

		
	});//allBtn click fun end
});




// database.ref().on("value", function(snapshot) {
// 	//get all users of who want to play with pc
//   	var allUsers = snapshot.child('pc').val();
  	
// });


// window.onload = function () {
// 	var e = document.getElementById("myName");
// 	e.text = "haha" ;
// };// onload is end




	



