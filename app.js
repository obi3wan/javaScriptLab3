console.log('Name: ' + "Ubonrath Phimvong".toUpperCase());



function displayPosition(companyName, jobTitle, description) {
    console.log("Career: " + companyName + " / " + jobTitle);
    console.log("Description: " + description);

}

displayPosition("Technician", "Covalance Student", "Free Lance Developer");


var interest = ["* jiu-jitsu", "* reading,coding", "* lifting weights"]; {

}
console.log("My Interests: ");
console.log(interest[0]);
console.log(interest[1]);
console.log(interest[2]);

console.log("My Previous Experience: ");

function displayPosition(companyName, jobTitle, description) {
    console.log(companyName + " / " + jobTitle + " " + description);

}

displayPosition("* Nissan", "Technician", "- Deliver parts to production line, inspect nissan parts");
displayPosition("* Federal Mogul", "Outbound Tech", "- Pick/ pack orders, ship using UPS and other carriers");
displayPosition("* Asurion", "Returns Specailist", "- inspect and direct phones to designated departments");

console.log("My Skills: ");

function displaySkill(skillName, cool) {
    if (cool == true) {
        console.log("* Check it: " + skillName);
    } else {
        console.log("* " + skillName);
    }

}
displaySkill("Web Development", true);
displaySkill("Guitar", false);
displaySkill("Programming", false);
displaySkill("Writing", true);
displaySkill("Basketball", false);
