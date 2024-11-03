let button = document.querySelector("button")
let img = document.querySelector("img")
let boxall = document.querySelector(".boxall")
let gender = document.querySelector("#gender")
let age = document.querySelector("#age")
let lastname = document.querySelector("#lastname")
let namef = document.querySelector("#name")
let contry = document.querySelector("#contry")
let city = document.querySelector("#city")
let phone = document.querySelector("#phone")
let email = document.querySelector("#email")


let user
button.addEventListener("click", function(){
     fetch("https://randomuser.me/api/")

            .then((io)=>{ 
                if(io.status === 200){
                    return io.json()    
                }else{
                    return new Error("خطا در بازیابی اطلاعات کاربر! ")
                }
            })
            .then(oo => { user = oo.results[0]
                funname()
            })
            .catch(err=>console.log(err))
})

function funname(){
    button.innerHTML = "click for new person"
    button.style.background = "greenyellow"
    button.style.border = "none"
    boxall.style.display = "flex"
    gender.innerHTML = user.gender
    age.innerHTML = user.registered.age
    lastname.innerHTML = user.name.last
    namef.innerHTML = user.name.first
    contry.innerHTML = user.location.country
    city.innerHTML = user.location.city
    phone.innerHTML = user.phone
    email.innerHTML = user.email
    img.src = user.picture.large
}













