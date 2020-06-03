// listen for submit 
// note: getElementById can also be querySelector
document.getElementById("loan-form").addEventListener("submit", function(e) {
    // hide results (even if already hidden)
    document.getElementById("results").style.display = "none";
    // show loader
    document.getElementById("loading").style.display = "block";

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});


// calculate results
function calculateResults() {
    console.log("calculating");
    // ui variables
    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly-payment");
    const totalPayment = document.getElementById("total-payment");
    const totalInterest = document.getElementById("total-interest");

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x-1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
        // show results
        document.getElementById("results").style.display = "block";
        // hide loader 
        document.getElementById("loading").style.display = "none";
    } else {
        // console.log("please check again");
        showError("please check again");
    }

    // e.preventDefault();
}

// show error
function showError(error) {
// create div
const errorDiv = document.createElement("div");
// get elements
const card = document.querySelector(".card");
const heading = document.querySelector(".heading");
// add class
errorDiv.className = "alert alert-danger";
// create text node and append to div 
errorDiv.appendChild(document.createTextNode(error));
// insert error above heading
card.insertBefore(errorDiv, heading);
// clear error after 3 secs
setTimeout(clearError, 3000);
}

// clear error
function clearError() {
    document.querySelector(".alert").remove();
}