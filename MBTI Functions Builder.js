let typeDropdown = document.querySelector("#type-dropdown") // you have to declare a variable to hold the select element
let chosenType = typeDropdown.value;//....and separately declare a variable that holds the value of that variable and not the element
let MainPerceivingFunction = chosenType[1]; //you can't use an array notation to access the child of a DOM element. That is why you use chosenType = typeDropdown.value as an intermediate step instead of chosenType = document.querySelector("#type-dropdown")
let MainJudgingFunction = chosenType[2];

const fourFunctions = document.querySelector("#fourFunctions");
const boton = document.querySelector("#function-check");

let Dominant, Auxiliary, Tertiary, Inferior; 

const polarities = {
    "Ne": "Si",
    "Si": "Ne",
    "Se": "Ni",
    "Ni": "Se",
    "Fe": "Ti",
    "Ti": "Fe",
    "Te": "Fi",
    "Fi": "Te"
};

function MainFunctionsDeterminer(){

    //P types prefer to interact with the outer world with a perceiving function and with the inner world with a judging function
    //That is what P types are about! They act spontanous because they are following their inner compass (either Ti or Fi) while learning through exploring the outer world.
    // They walk to the beat of their hearts (or brains)
    //Without an inner compass spontaneity becomes either madness or bulldozing, or doesn't exist at all.
    if (chosenType[3]=="P"){
        MainPerceivingFunction+="e";
        MainJudgingFunction+="i";
    }

    //J types prefer to interact with the outer world with a judging function and with the inner world with a perceiving function
    //That is what J types are about! They act orderly because they are following external metrics (either the emotions/values of their tribe or logistical mechanism/resources 
    //that affect their tribe) while learning through processing information inside.
    //They are connected to the rythms of the world
    else {
        MainPerceivingFunction+="i"; 
        MainJudgingFunction+="e";
    };

};

function functionsPositions() {
    if (MainPerceivingFunction.includes(chosenType[0].toLowerCase())){
        Dominant = MainPerceivingFunction;
        Auxiliary = MainJudgingFunction;
    }
    else{
        Dominant = MainJudgingFunction;
        Auxiliary = MainPerceivingFunction;
       
    }
    tertiaryAndInferior(Dominant, Auxiliary)
    };

function tertiaryAndInferior(Dom, Aux) {
    Tertiary = polarities[Aux];
    Inferior = polarities[Dom];
};

//This function activates all functions when I click the "See Functions" Button
function getResult() {
 
    MainFunctionsDeterminer(); // Call the function to determine functions
    functionsPositions(); // Call the function to position functions


    // Update the text display. Removed Tertiary and Inferior for now.
    fourFunctions.innerText = `Dominant: ${Dominant}, Auxiliary: ${Auxiliary}, Tertiary: ${Tertiary},Inferior: ${Inferior}`;
    MainPerceivingFunction =chosenType[1];
    MainJudgingFunction =chosenType[2];
    
}
//this allows chosenType to equal the value of typeDropdown as it changes instead of staying at the default.
//Also updates main functions so they correspond to the new type
typeDropdown.addEventListener('change',()=> {
    chosenType = typeDropdown.value;  //before it became an arrow function this typeDropwdown.value was this.value
    MainPerceivingFunction = chosenType[1];
    MainJudgingFunction = chosenType[2];
    });

boton.addEventListener('click', getResult);


/*Ver donde puedo usar:
-Map method... quizas para extraer o para crear html elements
-indexOf
Integrate understanding of how the functions work and how the positions (dominant, auxiliary...) work, store those descriptions somewhere and 
find a way to cross them such that if a type has Ne as a dominant and Ti as auxiliary, the code creates a description for Ne function in the 
dominant position, and same for Ti in auxiliary position. You could even go beyond and create the code so that it doesnt just describe dominant Ne
but dominant Ne that is followed by Ti auxiliary

Puedo agregar algo que modifique el color del último botón de stimulus seleccionado para una persona. El color se pondría oscuro al seleccionarlo
pero con cada iteración su tono cambiaría a un tono más claro. Haría esto hasta volver al color normal cuando ya el efecto de esta influencia es 
prácticamente nulo.
*/


  