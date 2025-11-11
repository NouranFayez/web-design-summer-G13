

let d = new Date()

console.log(d)
console.log(d.getFullYear())
console.log(d.getMonth()) /// 0 : 11
var month = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

// console.log(month[d.getMonth()])

// console.log(d.getDay()) // 0 : 6

// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getSeconds())


// 19:30 



function handleFilter(category) {

    let categories = document.querySelectorAll('.categories')

    categories.forEach((element) => {
        (category == 'All') ? element.classList.remove('d-none') : element.classList.add('d-none')
    })

    if (category != 'All') {
        let categoryItems = document.querySelectorAll(`[data-category=${category}]`)
        // console.log(categoryItems)
        categoryItems.forEach((element) => {
            element.classList.remove('d-none')
        })

    }
}



let nameValidation = (input) => {
    let inputValue = input.value.trim()
    console.log(inputValue.length)
    if (inputValue.length < 3) {
        // let p = document.createElement("p")
        // input.nextElementSibling = p
        // input.prevElementSibling = p
        // let parentInput = input.parentElement
        // parentInput.appendChild(p)
        // console.log(input.parentElement)


        handleError(input, "please enter at least 3 character")
    }
    else {

        handleError(input)
    }

}

let handleError = (input, msg = "") => {
    let nextElement = input.nextElementSibling
    nextElement.innerText = msg
}

let emailValidation = (input) => {
    // username@domain.subdomain
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log(emailRegex.test(input.value))
    if (!emailRegex.test(input.value)) {
        handleError(input, "please enter a valid email : Example@email.com")
    }
    else {
        handleError(input)
    }

}

let passwordValidation = (input)=>{
    // https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
// var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

    console.log(strongRegex.test(input.value))
    if(strongRegex.test(input.value)) handleError(input)
        else handleError(input , 'enter at least 1 uppercase , 1 lowercase , 1 digit , 1 special character')
}


let form = document.getElementById('myForm')

form.addEventListener('input', (e) => {
    console.log(e)
    if (e.target.id == "userName") {
        nameValidation(e.target)
    }
    else if (e.target.id == "userEmail") {
        // console.log("userEmail");
        emailValidation(e.target)

    }
    else if (e.target.id == "userPassword") {
        passwordValidation(e.target)
    }
})


function handleChangeImg(element){
    let img = document.getElementById('card-img')
    img.src = element.src

}
