let start = document.querySelector('.start')
let stopBtn = document.querySelector('.stopBtn')
let cancel = document.querySelector('.cancel')
let minute = document.querySelector('.minute')
let secund = document.querySelector('.secund')


let interval;
let s = 0
let m = 0

start.addEventListener('click', () =>{
    interval = setInterval(() => {
        s++
        if (s <= 9) {
            secund.innerHTML = `0${s}`
        } else {
            secund.innerHTML = s
        }

        if (s == 60) {
            m++
            minute.innerHTML = m
            s = 0
            secund.innerHTML = s
        }
    }, 100)
})

stopBtn.addEventListener('click', () =>{
    clearInterval(interval)
})

cancel.addEventListener('click', () =>{
    clearInterval(interval)
    s = 0
    m = 0

    minute.innerHTML = '00'
    secund.innerHTML = '00'

})