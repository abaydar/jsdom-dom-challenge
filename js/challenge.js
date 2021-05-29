// const counter = document.getElementById("counter")
// const num = parseInt(counter.innerText)

// counter.addEventListener("DOMContentLoaded", incrementCounter)

// function incrementCounter(a){return a + 1}
 
const commentForm = document.getElementById("comment-form")
const commentInput = document.getElementById("comment-input")
const likesUl = document.querySelector("ul.likes")
const heartLikes = {}

document.addEventListener("DOMContentLoaded", () => {
    startCounter()
    minus.addEventListener("click", minusClick)
    plus.addEventListener("click", plusClick)
    heart.addEventListener("click", heartClick)
    pause.addEventListener("click", pauseClick)
    commentForm.addEventListener("submit", handleSumbit)
})

function isRunning(){
    return (pause.innerText === "pause") ? true : false
}

function startCounter(){
    setInterval(plusClick, 1000)
}

function minusClick(){
    counter.innerText = parseInt(counter.innerText) - 1
}

function plusClick(){
    if (isRunning()){
        counter.innerText = parseInt(counter.innerText) + 1
    }
}

function heartClick(){
    const time = parseInt(counter.innerText)
    heartLikes[time] ? heartLikes[time] += 1 : heartLikes[time] = 1
    if (document.getElementById(`like-${time}`)){
        document.getElementById(`like-${time}`).innerText = `${time} was liked ${heartLikes[time]} times`
    } else {
        const li = document.createElement("li")
        li.id = `like-${time}`
        li.innerText = `${time} was liked 1 time`
        likesUl.appendChild(li)
    }
}

function pauseClick(){
    pause.innerText = (pause.innerText === "pause") ? "resume" : "pause"
    const buttons = [plus, minus, heart]
    buttons.forEach((button) => {
        button.disabled = !button.disabled
    })
}

function handleSumbit(e){
    e.preventDefault()
    const comment = commentInput.value
    list.innerHTML += `
    <p>${comment}</p>
    `
    commentForm.reset()
}