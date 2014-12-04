//Global Variables
var timer = null;

function checkInLogic(){
	console.log("Check in Page Logic");
	
	//Determine if they have made a reservation or not
	//Determine if they have arrived at the location
	//Approximate wait times
	//Push notification to notify when table is ready
	
	
	
	var isReserved = false;
	
	if(isReserved = true){
		// They have a reservation
		// amount of people in 2's
		// table number 1-6
		// Aproximate wait times 
		
		
		
		
		
	}else{
		// No reservation is made
		// Aproximate wait times
		
		
		
	}
	
	
	
	
}

function checkInBTN(){
	console.log("BTN Pressed");
	// Checked In 
	// start the timmer and append it to the html

	setTimer();
}

function setTimer(){
	
	var waitTime = 10; // wait times in minutes
	
	
	if(timer != null){
		// dont make another timer
		console.log('Timer already exists');
	}else{
	
		timer = document.getElementById("timer")
    	, now = new Date()
    	, deadline = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + waitTime);
 
		timer.innerHTML = countdown(deadline).toString();
	    var countdownTimer = setInterval(function(){
	    	timer.innerHTML = countdown(deadline ).toString();
			if( countdown(deadline ).toString() == 0){
				timer.innerHTML = "Table Is Ready";
				alert('Timer had ended');
				clearInterval(countdownTimer);
				
				// send push notification
				
				
				
				
				
			}
			
		}, 1000);
		
	}
	
	
}
