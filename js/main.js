const arrayImg = document.querySelectorAll('.img-box');
const boomb = document.querySelector('.boom-box')


let num = 0
const timer = setInterval(() => {
   num++
    console.log(num)
    arrayImg.forEach((el, index) => {
        if (num === 1) {
            index === 1 ? el.classList.add('bg-red') : null
            index === 2 ? el.classList.add('bg-red') : null
            index === 6 ? el.classList.add('bg-red') : null
            index === 10 ? el.classList.add('bg-red') : null
            index === 14 ? el.classList.add('bg-red') : null
            index === 18 ? el.classList.add('bg-red') : null
        } else if (num === 2) {
            index === 1 ? el.classList.add('bg-red') : null
            index === 2 ? el.classList.add('bg-red') : null
            index === 6 ? el.classList.add('bg-red') : null
            index === 9 ? el.classList.add('bg-red') : null
            index === 10 ? el.classList.add('bg-red') : null
            index === 14 ? el.classList.remove('bg-red') : null
            index === 13 ? el.classList.add('bg-red') : null
            index === 17 ? el.classList.add('bg-red') : null
            index === 18 ? el.classList.add('bg-red') : null
        }  else if (num === 3) {
            index === 1 ? el.classList.add('bg-red') : null
            index === 2 ? el.classList.add('bg-red') : null
            index === 6 ? el.classList.add('bg-red') : null
            index === 9 ? el.classList.add('bg-red') : null
            index === 10 ? el.classList.add('bg-red') : null
            index === 14 ? el.classList.add('bg-red') : null
            index === 13 ? el.classList.remove('bg-red') : null
            index === 17 ? el.classList.add('bg-red') : null
            index === 18 ? el.classList.add('bg-red') : null
        } else if (num === 4) {
            index === 1 ? el.classList.add('bg-red') : null
            index === 2 ? el.classList.remove('bg-red') : null
            index === 3 ? el.classList.add('bg-red') : null
            index === 5 ? el.classList.add('bg-red') : null
            index === 6 ? el.classList.remove('bg-red') : null
            index === 7 ? el.classList.add('bg-red') : null
            index === 9 ? el.classList.add('bg-red') : null
            index === 10 ? el.classList.add('bg-red') : null
            index === 11 ? el.classList.add('bg-red') : null
            index === 14 ? el.classList.remove('bg-red') : null
            index === 13 ? el.classList.remove('bg-red') : null
            index === 15 ? el.classList.add('bg-red') : null
            index === 17 ? el.classList.remove('bg-red') : null
            index === 18 ? el.classList.remove('bg-red') : null
            index === 19 ? el.classList.add('bg-red') : null
        } else if(num === 5) {
            index === 1 ? el.classList.add('bg-red') : null
            index === 2 ? el.classList.add('bg-red') : null
            index === 3 ? el.classList.add('bg-red') : null
            index === 5 ? el.classList.add('bg-red') : null
            index === 6 ? el.classList.remove('bg-red') : null
            index === 7 ? el.classList.remove('bg-red') : null
            index === 9 ? el.classList.add('bg-red') : null
            index === 10 ? el.classList.add('bg-red') : null
            index === 11 ? el.classList.add('bg-red') : null
            index === 14 ? el.classList.remove('bg-red') : null
            index === 13 ? el.classList.remove('bg-red') : null
            index === 15 ? el.classList.add('bg-red') : null
            index === 17 ? el.classList.add('bg-red') : null
            index === 18 ? el.classList.add('bg-red') : null
            index === 19 ? el.classList.add('bg-red') : null
        } else if (num === 6) {
            index === 1 ? el.classList.add('bg-red') : null
            index === 2 ? el.classList.add('bg-red') : null
            index === 3 ? el.classList.add('bg-red') : null
            index === 5 ? el.classList.add('bg-red') : null
            index === 6 ? el.classList.remove('bg-red') : null
            index === 7 ? el.classList.remove('bg-red') : null
            index === 9 ? el.classList.add('bg-red') : null
            index === 10 ? el.classList.add('bg-red') : null
            index === 11 ? el.classList.add('bg-red') : null
            index === 14 ? el.classList.remove('bg-red') : null
            index === 13 ? el.classList.add('bg-red') : null
            index === 15 ? el.classList.add('bg-red') : null
            index === 17 ? el.classList.add('bg-red') : null
            index === 18 ? el.classList.add('bg-red') : null
            index === 19 ? el.classList.add('bg-red') : null
        } else if (num === 7) {
            index === 1 ? el.classList.add('bg-red') : null
            index === 2 ? el.classList.add('bg-red') : null
            index === 3 ? el.classList.add('bg-red') : null
            index === 5 ? el.classList.remove('bg-red') : null
            index === 6 ? el.classList.remove('bg-red') : null
            index === 7 ? el.classList.add('bg-red') : null
            index === 9 ? el.classList.remove('bg-red') : null
            index === 10 ? el.classList.remove('bg-red') : null
            index === 11 ? el.classList.add('bg-red') : null
            index === 14 ? el.classList.remove('bg-red') : null
            index === 13 ? el.classList.remove('bg-red') : null
            index === 15 ? el.classList.add('bg-red') : null
            index === 17 ? el.classList.remove('bg-red') : null
            index === 18 ? el.classList.remove('bg-red') : null
            index === 19 ? el.classList.add('bg-red') : null
        } else if (num === 8) {
            index === 1 ? el.classList.add('bg-red') : null
            index === 2 ? el.classList.add('bg-red') : null
            index === 3 ? el.classList.add('bg-red') : null
            index === 5 ? el.classList.add('bg-red') : null
            index === 6 ? el.classList.remove('bg-red') : null
            index === 7 ? el.classList.add('bg-red') : null
            index === 9 ? el.classList.add('bg-red') : null
            index === 10 ? el.classList.add('bg-red') : null
            index === 11 ? el.classList.add('bg-red') : null
            index === 14 ? el.classList.remove('bg-red') : null
            index === 13 ? el.classList.add('bg-red') : null
            index === 15 ? el.classList.add('bg-red') : null
            index === 17 ? el.classList.add('bg-red') : null
            index === 18 ? el.classList.add('bg-red') : null
            index === 19 ? el.classList.add('bg-red') : null
        } else if (num === 9) {
            index === 1 ? el.classList.add('bg-red') : null
            index === 2 ? el.classList.add('bg-red') : null
            index === 3 ? el.classList.add('bg-red') : null
            index === 5 ? el.classList.add('bg-red') : null
            index === 6 ? el.classList.remove('bg-red') : null
            index === 7 ? el.classList.add('bg-red') : null
            index === 9 ? el.classList.add('bg-red') : null
            index === 10 ? el.classList.add('bg-red') : null
            index === 11 ? el.classList.add('bg-red') : null
            index === 14 ? el.classList.remove('bg-red') : null
            index === 13 ? el.classList.remove('bg-red') : null
            index === 15 ? el.classList.add('bg-red') : null
            index === 17 ? el.classList.add('bg-red') : null
            index === 18 ? el.classList.add('bg-red') : null
            index === 19 ? el.classList.add('bg-red') : null
        } else if (num === 10) {
            clearInt()
            boomEffect()
        }
    })
}, 1000)

const clearInt = () => {
    clearInterval(timer)
}

const boomEffect = () => {
    setTimeout(() => {
        boomb.style.display = "flex";
    }, 0.500)
}