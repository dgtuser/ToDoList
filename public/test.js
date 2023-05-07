let test = document.querySelector('.test')
console.log(test.innerHTML)
let btn = document.querySelector('.btn1')
let j = document.querySelector('.j')

btn.addEventListener('click', function(e) {
    console.log('test')
    console.log(test.innerHTML)
    if(j.value == '') {
        alert('поле пусток')
        return false
    }
})