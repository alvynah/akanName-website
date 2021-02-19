var maleName = ["kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


function getDay(event) {
    event.preventDefault();
    let date = document.getElementById("date").value; //get the value of date
    let myBirthday = new Date(date).toDateString(); //convert the date to a string date format
    var dayString = myBirthday.split(" ")[0]; // pick the day part of the date format only
    var compare = dayString.toString(); //convert it to string

    var day = days.indexOf(compare); //find index ot string day in the array days
    console.log(day);

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

};

function getResults(event) {

    event.preventDefault();

    let displayTag = document.getElementById("displayarea");
    let results = "Love";
    displayTag.innerHTML = results;

};