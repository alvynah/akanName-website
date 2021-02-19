var maleName = ["kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getName(event) {
    event.preventDefault;
    let myName = document.getElementById("name").value;


};

function getDay(event) {
    event.preventDefault();
    let date = document.getElementById("date").value; //get the value of date
    let myBirthday = new Date(date).toDateString(); //convert the date to a string date format
    var dayString = myBirthday.split(" ")[0]; // pick the day part of the date format only
    var compare = dayString.toString(); //convert it to string

    var day = days.indexOf(compare); //find index ot string day in the array days

};


function getGender() {
    var genders = document.getElementsByName("gender").value;
    if (genders[0].checked == true) {
        var gender = "female";

    } else if (genders[1].checked == true) {
        var gender = "male";
    } else {
        return false;
    }
    switch (gender) {
        case "male":
            if (day == 0) {
                let message = ``
                alert("You were born on " + dayNames[0] + " and Your akan name is " + maleNames[0] + "!");
            } else if (dayValue == 2) {
                alert("You were born on " + dayNames[1] + " and Your akan name is " + maleNames[1] + "!");
            } else if (dayValue == 3) {
                alert("You were born on " + dayNames[2] + " and Your akan name is " + maleNames[2] + "!");
            } else if (dayValue == 4) {
                alert("You were born on " + dayNames[3] + " and Your akan name is " + maleNames[3] + "!");
            } else if (dayValue == 5) {
                alert("You were born on " + dayNames[4] + " and Your akan name is " + maleNames[4] + "!");
            } else if (dayValue == 6) {
                alert("You were born on " + dayNames[5] + " and Your akan name is " + maleNames[5] + "!");
            } else if (dayValue == -0) {
                alert("You were born on " + dayNames[6] + " and Your akan name is " + maleNames[6] + "!");
            }
            break;
        case "female":
            if (dayValue == 1) {
                alert("You were born on " + dayNames[0] + " and Your akan name is  " + femaleNames[0] + "!");
            } else if (dayValue == 2) {
                alert("You were born on " + dayNames[1] + " and Your akan name is " + femaleNames[1] + "!");
            } else if (dayValue == 3) {
                alert("You were born on " + dayNames[2] + " and Your akan name is " + femaleNames[2] + "!");
            } else if (dayValue == 4) {
                alert("You were born on " + dayNames[3] + " and Your akan name is " + femaleNames[3] + "!");
            } else if (dayValue == 5) {
                alert("You were born on " + dayNames[4] + " and Your akan name is " + femaleNames[4] + "!");
            } else if (dayValue == 6) {
                alert("You were born on " + dayNames[5] + " and Your akan name is " + femaleNames[5] + "!");
            } else if (dayValue == -0) {
                alert("You were born on " + dayNames[6] + " and Your akan name is " + femaleNames[6] + "!");
            }
            break
        default:

    }
}

function getResults(event) {

    event.preventDefault();

    let displayTag = document.getElementById("displayarea");
    let results = "Love";
    displayTag.innerHTML = results;

}