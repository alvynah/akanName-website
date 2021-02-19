var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleName = ["kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var CC, YY, MM, DD, d;


function getGender() {
    var genders = document.getElementsByName("gender");
    if (genders[0].checked == true) {
        var gender = "female";

    } else if (genders[1].checked == true) {
        var gender = "male";
    } else {
        return false;
    }
};

function display() {
    var display = getGender();
    alert(display);
}

/*
switch (gender) {

    case "female":
        if (dayValue == 1) {
            alert("You were born on " + days[0] + " and Your akan name is  " + femaleName[0] + "!");
        } else if (dayValue == 2) {
            alert("You were born on " + days[1] + " and Your akan name is " + femaleName[1] + "!");
        } else if (dayValue == 3) {
            alert("You were born on " + days[2] + " and Your akan name is " + femaleName[2] + "!");
        } else if (dayValue == 4) {
            alert("You were born on " + days[3] + " and Your akan name is " + femaleName[3] + "!");
        } else if (dayValue == 5) {
            alert("You were born on " + days[4] + " and Your akan name is " + femaleName[4] + "!");
        } else if (dayValue == 6) {
            alert("You were born on " + days[5] + " and Your akan name is " + femaleName[5] + "!");
        } else if (dayValue == -0) {
            alert("You were born on " + days[6] + " and Your akan name is " + femaleName[6] + "!");
        }
        break;

    case "male":
        if (dayValue == 1) {
            alert("You were born on " + days[0] + " and Your akan name is " + maleName[0] + "!");
        } else if (dayValue == 2) {
            alert("You were born on " + days[1] + " and Your akan name is " + maleName[1] + "!");
        } else if (dayValue == 3) {
            alert("You were born on " + days[2] + " and Your akan name is " + maleName[2] + "!");
        } else if (dayValue == 4) {
            alert("You were born on " + days[3] + " and Your akan name is " + maleName[3] + "!");
        } else if (dayValue == 5) {
            alert("You were born on " + days[4] + " and Your akan name is " + maleName[4] + "!");
        } else if (dayValue == 6) {
            alert("You were born on " + days[5] + " and Your akan name is " + maleName[5] + "!");
        } else if (dayValue == -0) {
            alert("You were born on " + days[6] + " and Your akan name is " + maleName[6] + "!");
        }

    default:

}
}

function findName() {
    dayValue = 1;
    getGender();
}

function displayName() {
    var display = getGender();
    alert(display)
} * /