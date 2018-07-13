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
var userKey = sessionStorage.getItem("waterMelon"); 
//read the firebase data and pull the info if the user
database.ref().once("value").then( function(snapshot) {
	//pull the info of user form firecase
	var koko = snapshot.child('players').child(userKey).val();
	console.log(koko.name);
	//write the user's name on page
	$("#myName").text(koko.name);

	//whenever the user click the btn
	$(".allBtns").on("click", function() {
		//display the img user chosen on the big window
		var yeah = $(this).find("img").attr("src");
		$("#myBigImg").attr("src", yeah);		
	});//allBtn click fun end

	var waitingList = snapshot.child('waiting').val();
	console.log(waitingList);
	var  waitingListArr = Object.values(waitingList);
	console.log(waitingListArr);

	if (waitingListArr.length >= 2) {
		var hotpot = waitingListArr[0];
		console.log(hotpot);
		var opponentKey = hotpot.mykey;
		console.log(opponentKey);
		database.ref().child('players').child(opponentKey).set(hotpot);
		$("#opponentName").text(hotpot.name);
		$("#chatContent").append(hotpot.chat);
		$("#opponentBigImg").attr("src", "../imgs/radom.gif")
		database.ref().child('waiting').child(opponentKey).remove();
	} else {
		database.ref().child('waiting').child(userKey).set(koko);
		database.ref().child('players').child(userKey).remove();
	}

});



//ref.child(key).remove();
// database.ref().on("value", function(snapshot) {
// 	//get all users of who want to play with pc
//   	var allUsers = snapshot.child('pc').val();
  	
// });


// window.onload = function () {
// 	var e = document.getElementById("myName");
// 	e.text = "haha" ;
// };// onload is end




	



