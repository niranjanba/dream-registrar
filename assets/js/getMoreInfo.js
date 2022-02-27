const emailInput = document.querySelector("#emailId");

let service;
let serviceId;
function getMoreInfo(sevice, id) {
    service = service;
    serviceId = id;
}
emailInput.addEventListener("input", (e) => {
    document.querySelector(".emailError").innerText = "";
    console.log("hello");
});
function clearError() {
    console.log("hello");
}
function sendMail() {
    const value = document.querySelector("#emailId").value;
    const isEmailValid = validateEmail(value);

    if (!isEmailValid) {
        document.querySelector(".emailError").innerText =
            "Please Enter Valid Email";
    } else {
        console.log(value);
    }
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
