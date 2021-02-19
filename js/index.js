var maleName = ["kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];



function getName(event) {
    event.preventDefault();
    let myName = document.getElementById("name").value;
    return myName;


}

function getDay(event) {
    event.preventDefault();
    let date = document.getElementById("date").value; //get the value of date
    let myBirthday = new Date(date).toDateString(); //convert the date to a string date format
    var dayString = myBirthday.split(" ")[0]; // pick the day part of the date format only
    var compare = dayString.toString(); //convert it to string

    var day = days.indexOf(compare); //find index ot string day in the array days
    return day;

}


function getGender(event) {
    event.preventDefault();
    var returnGetname = getName(event);
    var returnGetDay = getDay(event);
    var message;

    getDay(event);
    var genders = document.getElementsByName("gender");
    if (genders[0].checked == true) {
        var gender = "female";

    } else if (genders[1].checked == true) {
        var gender = "male";
    } else {
        return false;
    }
    switch (gender) {
        case "male":
            if (returnGetDay == 0) {
                message = `${returnGetname}, your were born on ${days[0]}, and your Akan Name is ${maleName[0]} !`;
            } else if (returnGetDay == 1) {
                message = `${returnGetname}, your were born on ${days[1]}, and your Akan Name is ${maleName[1]} !`;
            } else if (returnGetDay == 2) {
                message = `${returnGetname}, your were born on ${days[2]}, and your Akan Name is ${maleName[2]} !`;
            } else if (returnGetDay == 3) {
                message = `${returnGetname}, your were born on ${days[3]}, and your Akan Name is ${maleName[3]} !`;
            } else if (returnGetDay == 4) {
                message = `${returnGetname}, your were born on ${days[4]}, and your Akan Name is ${maleName[4]} !`;
            } else if (returnGetDay == 5) {
                message = `${returnGetname}, your were born on ${days[5]}, and your Akan Name is ${maleName[5]} !`;
            } else {
                message = `${returnGetname}, your were born on ${days[6]}, and your Akan Name is ${maleName[6]} !`;
            }
            break;
        case "female":
            if (returnGetDay == 0) {
                message = `${returnGetname}, your were born on ${days[0]}, and your Akan Name is ${femaleName[0]} !`;
            } else if (returnGetDay == 1) {
                message = `${returnGetname}, your were born on ${days[1]}, and your Akan Name is ${femaleName[1]} !`;
            } else if (returnGetDay == 2) {
                message = `${returnGetname}, your were born on ${days[2]}, and your Akan Name is ${femaleName[2]} !`;
            } else if (returnGetDay == 3) {
                message = `${returnGetname}, your were born on ${days[3]}, and your Akan Name is ${femaleName[3]} !`;
            } else if (returnGetDay == 4) {
                message = `${returnGetname}, your were born on ${days[4]}, and your Akan Name is ${femaleName[4]} !`;
            } else if (returnGetDay == 5) {
                message = `${returnGetname}, your were born on ${days[5]}, and your Akan Name is ${femaleName[5]} !`;
            } else if (returnGetDay == 6) {
                message = `${returnGetname}, your were born on ${days[6]}, and your Akan Name is ${femaleName[6]} !`;
            } else {
                return false;
            }
            break
        default:

    }
    return message;
}

function getResults(event) {

    event.preventDefault();
    var results = getGender(event);
    let displayTag = document.getElementById("displayarea");
    displayTag.innerHTML = results;

};