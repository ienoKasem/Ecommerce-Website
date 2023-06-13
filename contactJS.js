var inputName = document.getElementById("name")
var pName = document.getElementById("pName")

inputName.addEventListener("input", function () {
    console.log(inputName.value)

    if (inputName.value.length > 3) {
        pName.style.display = "none"
    } else {
        pName.style.display = "inline-block"
    }

})


var inputEmail = document.getElementById("email")
var pEmail = document.getElementById("pEmail")

inputEmail.addEventListener("input", function () {
    console.log(inputEmail.value)
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) {
        pEmail.style.display = "none"
    } else {
        pEmail.style.display = "inline-block"
    }

})




var inputPhone = document.getElementById("phone")
var pPhone = document.getElementById("pPhone")

inputPhone.addEventListener("input", function () {
    console.log(inputPhone.value)
    if (/012|011|(010\d{8})$/.test(inputPhone.value)) {
        pPhone.style.display = "none"
    } else {
        pPhone.style.display = "inline-block"
    }

})