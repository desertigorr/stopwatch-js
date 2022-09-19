const displayHours = document.querySelector('#hours')
const displayMins = document.querySelector('#minutes')
const displaySeconds = document.querySelector('#seconds')
const displayMs = document.querySelector('#ms')

const btnStart = document.querySelector('#start')
const btnPause = document.querySelector('#pause')
const btnRestart = document.querySelector('#restart')

var hours = 0
var mins = 0
var seconds = 0
var ms = 0

btnStart.addEventListener('click', () => {
    changeTimer('start')
})
btnPause.addEventListener('click', () => {
    changeTimer('pause')
})
btnRestart.addEventListener('click', () => [
    changeTimer('restart')
])

var timerLoop
var timerActive = false
function changeTimer(state) {
    if (state == 'start') {
        if (timerActive == false) {
            timerLoop = setInterval(updateTimer, 10)
            timerActive = true
        }
    }

    if (state == 'pause') {
        clearInterval(timerLoop)
        timerActive = false
    }

    if (state == 'restart') {
        restartTimer()
    }
    function restartTimer() {
        clearInterval(timerLoop)
        ms = 0
        seconds = 0
        mins = 0
        hours = 0
        timerActive = false
        updateTimer()
    }

    function updateTimer() {
        

        if (ms > 99) {
            ms = 0
            seconds++
        }

        if (seconds > 59) {
            seconds = 0
            mins++
        }

        if (mins > 59) {
            mins = 0
            hours++
        }

        if (hours > 99) {
            restartTimer()
        }

        
        displayHours.textContent = hours
        displayMins.textContent = (mins < 10) ? '0'+mins : mins
        displaySeconds.textContent = (seconds < 10) ? '0'+seconds : seconds
        displayMs.textContent = (ms < 10) ? '0'+ms : ms      
        ms++
    }
    
}

// Animation
gsap.from('.heading', {opacity: 0, y: -50, duration: 1, delay: .3, ease: 'power4'})
gsap.from('.watch__item', {y: -50, opacity: 0, duration: .5, stagger: .15, delay: .5})
gsap.from('.controls__item',{y: 50, opacity: 0, duration: .5, stagger: .15, delay: 1} )