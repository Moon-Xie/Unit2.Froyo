//The user is prompted for froyo flavors upon entering the website.
let flavors = window.prompt(
    "Enter the flavors separated by commas: ",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);
console.log(flavors);

//The user's input string is split into an array of strings.
const flavorsArray = flavors.split(",");

function getCountOfFlavors(){
    //declair the object and assign value to it
    const objectFlavors = {};
    //A loop is used to iterate through the array of flavors.
    for(i = 0; i < flavorsArray.length; i++) {
        let flavor = flavorsArray[i].trim();
    //An object is used to keep count of how many orders there are of each flavor.
        if(objectFlavors[flavor]) {
            objectFlavors[flavor]++;
        } else {
            objectFlavors[flavor] = 1;
        }
    }
    return objectFlavors;
}


//table listing how many of each flavor users have ordered.
console.table(getCountOfFlavors());