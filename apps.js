let firstName = "Whitney"
let lastName = "Yelling"
let fullname = firstName + " " + lastName;
let fullNameCaps = fullname.toUpperCase();

displayPosition(fullNameCaps, "Expert Wild Unicorn Wrangler ", " I love to sing at the edge of waterfalls"); {
    //parameters for my intro

}
function displayPosition(myName, myCareer, myDecription) {
    console.log("Name: " + myName);
    console.log("Career: " + myCareer);
    console.log("Description:" + myDecription + ".");



}
// My intrest output
console.log("My Intrest:");
// Call for my intrest
displayIntrest("Meditating in Neverland");
displayIntrest("Eating exotc meals across the multiverse");
displayIntrest("Playing Quditch");
// function  to display intrest
function displayIntrest(myintrest) {
    console.log("* " + myintrest);
}
//My previousv experence output 
console.log("My Past Experience:");
// call for my past experences
displayExperience("I was a 'Magical Creatures' professor  at the esteemed Hogwarts School of Magic.");
displayExperience("I tracked and discovered rare Unicorns with the WUW Association.");
displayExperience("Lead reasearcher for Magical Creatures at the Minstry of Magic");
// funtions for experences to show 
function displayExperience(myExperience) {
    console.log("* " + myExperience);
}

// My Skills:
console.log("My Skills: ");

// Calls dispaySkill() Function
displaySkill("Wand making", true);
displaySkill("Potion Making", false);
displaySkill("Herb drying", false);
displaySkill("Star navigating", true);

// function for skills
function displaySkill(mySkill, bamBam) {
    if (bamBam == true) {
        console.log("* BAM: " + mySkill);
    } else if (bamBam == false) {
        console.log("* " + mySkill);
    }
}



