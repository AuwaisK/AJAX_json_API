/*This is my JS for the Car Luxury Practice*/


var mySurvey = document.getElementById("survey");

mySurvey.addEventListener("change", loadMyData, false);

var myManufacturer = document.getElementById("manufacturer");

myManufacturer.addEventListener("change", loadMyData, false);



function loadMyData () {

	var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;


	//console.log(surveyStored);

	console.log(manufacturerStored);


	var myRequest = new XMLHttpRequest();

	myRequest.open("GET", "https://raw.githubusercontent.com/AuwaisK/JSON-AJAX-API/master/JSON_AJAX_API's_Learner/LuxuryCarsLearner/expensiveLuxuryCars.json", true);

	myRequest.onload = function() {

		if (myRequest.readyState == 4 && myRequest.status == 200) {

			var myData = JSON.parse(myRequest.responseText);

			if (manufacturerStored === "") {

				function clearAll()
					{
						var hideText = document.getElementsByClassName("data");
						for(var i = 0; i < hideText.length; i++)
						{
							hideText[i].innerHTML = "";
							/*console.log(hideText);*/
						}
					}

				clearAll();

				document.getElementById("messageAlert").innerHTML = "Please you must choose a car manufacturer to load data...";

			} else {

				/*myData.data.forEach(function(el) {

				document.getElementById("manufacturerC").innerHTML = el.manufacturer;

					console.log(el);

				});*/



			}

		} else {

			document.getElementById("messageAlert").innerHTML = "We successfully connected to the server but it returned an ERROR!";
		}


			/*console.log(myData.data[0].model);*/

			//all the action happens here!!!!


	};

	myRequest.onerror = function() {

		document.getElementById("messageAlert").innerHTML = "You are not connected online and can't reach the server!";
	}

	myRequest.send();

  }

//Hide email address JS

/*var myEmail = document.createElement("span");

myEmail.innerHTML = "";

document.getElementById("hideEmail").appendChild(myEmail);
document.getElementById("hideEmail").setAttribute("href","mailto:manuelc@justit.co.uk");*/





















