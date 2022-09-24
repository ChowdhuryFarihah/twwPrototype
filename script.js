function goThroughWritingPromptsRight() {
	
		//const promptsLink = [];
		const dateList = ["July 27th, 2022", "July 28th, 2022", "July 29th, 2022", "August 1st, 2022", "August 2nd, 2022", "August 3rd, 2022", "August 4th, 2022", "August 5th, 2022", "August 9th, 2022", "August 10th, 2022", "August 11th, 2022", "August 12th, 2022", "August 15th, 2022", "August 16th, 2022", "August 17th, 2022", "August 18th, 2022", "August 19th, 2022", "August 22th, 2022", "August 23th, 2022", "August 24th, 2022", "August 25th, 2022", "August 26th, 2022", "August 29th, 2022", "August 30th, 2022", "August 31th, 2022", "September 1st, 2022", "September 2nd, 2022", "September 5th, 2022", "September 6th, 2022", "September 7th,2022", "september 8th, 2022"];
		
		//create a variable that will keep track of which prompt the page is currently showing"
		let promptTracker = document.getElementById("prompt");
		let promptNumber = promptTracker.src[54];
		console.log(promptTracker.src.length)
		if (promptTracker.src.length > 59){
			
			promptNumber = promptTracker.src[54] + promptTracker.src[55];	
		}
		let date = document.getElementById("date");
		console.log(promptNumber);
		console.log(promptTracker.src);
		if ((parseInt(promptNumber)) > -1 && (parseInt(promptNumber)) < 30) {
			promptTracker.src = "file:///C:/Users/User/Downloads/twwPrototype/prompt" + String(parseInt(promptNumber)+1) + ".png";
			promptTracker.alt = "prompt" + String(parseInt(promptNumber)+1);
			//change the date 
			date.innerHTML = dateList[parseInt(promptNumber)];
			console.log(date);
			console.log(dateList[parseInt(promptNumber)]);
		}
		else
		{
			promptTracker = promptTracker;
			date = date;
		}
	}
	
	//button to go left (decreasing order)
	function goThroughWritingPromptsLeft() {
		//const promptsLink = [];
		const dateList = ["July 27th, 2022", "July 28th, 2022", "July 29th, 2022", "August 1st, 2022", "August 2nd, 2022", "August 3rd, 2022", "August 4th, 2022", "August 5th, 2022", "August 9th, 2022", "August 10th, 2022", "August 11th, 2022", "August 12th, 2022", "August 15th, 2022", "August 16th, 2022", "August 17th, 2022", "August 18th, 2022", "August 19th, 2022", "August 22th, 2022", "August 23th, 2022", "August 24th, 2022", "August 25th, 2022", "August 26th, 2022", "August 29th, 2022", "August 30th, 2022", "August 31th, 2022", "September 1st, 2022", "September 2nd, 2022", "September 5th, 2022", "September 6th, 2022", "September 7th, 2022", "September 8th, 2022"];

		//create a variable that will keep track of which prompt the page is currently showing"
		let promptTracker = document.getElementById("prompt");
		let promptNumber = promptTracker.src[54];
		let date = document.getElementById("date");
		let promptNumberInt = parseInt(promptNumber);
		console.log(promptNumber);
		console.log(promptTracker);
		console.log(promptTracker.src.length);
		if (promptTracker.src.length > 59){
			
			promptNumber = promptTracker.src[54] + promptTracker.src[55];	
		}
		if (parseInt(promptNumber) < 31 && parseInt(promptNumber) > 1) {
			promptTracker.src = "file:///C:/Users/User/Downloads/twwPrototype/prompt" + String(parseInt(promptNumber)-1) + ".png";
			promptTracker.alt = "prompt" + String(parseInt(promptNumber)-1);
			date.innerHTML = dateList[parseInt(promptNumber)-2];
			console.log(date);
		}
		else
		{
			promptTracker = promptTracker;
			date = date;
		}
	}
