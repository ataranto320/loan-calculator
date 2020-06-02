// listen for submit 
// note: getElementById can also be querySelector
document.getElementById("loan-form").addEventListener("submit", calculateResults);


// calculate results
function calculateResults(e) {
    console.log("calculating");

    e.preventDefault();
}