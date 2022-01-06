//Question 1 -- Buttons -------------------------------------------
 function click1() //function to display message using innerHTML
{
    let clickMsg = document.getElementById("clickMessage");  
    clickMsg.innerHTML=("I'm right!");
}

function click2()
{
    let clickMessage2 = document.getElementById("clickMessage");  
    clickMessage2.innerHTML=("No, I'm right!");   //shows message on screen
}

//Question 2 -- Don't hover over me -------------------------------

function hoverAlert()  //function to display alert when text is hovered over
{
    alert("Hey, I told you not to hover over me!");
}

//Question 3-4 -- check form ----------------------------------------

function checkPswd()  //function to check password when submit button is pressed
{
    pswdForm=document.forms[0]; //variable equal to the first form
    let password = pswdForm.elements[1].value; //variable equal to password value in form
    document.getElementById("textForm").reset(); //resets form fields when submit button is pressed
    
    if(password !== "12345678")   //checks if password is correct
    {
        alert("This password is incorrect.");  //alert message if password is incorrect
    }
    else
    {
        let correctHeading = document.createElement("H1");  //create H1 tag
        let correctText = document.createTextNode("This password is correct!");  //Text to be added to tag
        correctHeading.appendChild(correctText);  //append text to H1 tag
        document.body.appendChild(correctHeading);  //add H1 message to HTML file

    }
}

//Bonus Question -- Sphere Volume ----------------------------------------

function calcVolume()  //function to display volume when submit button is pressed
{
    radiusForm = document.forms[1];
    let radius = radiusForm.elements[0].value;
    let volume = (4/3) * Math.PI * Math.pow(radius, 3); //calculates and sets volume
    document.getElementById("sphereForm").reset();

    alert("The volume of the sphere with radius: " + radius + " is: " + volume.toFixed(2)); //displays volume in alert message
}


