var button = document.querySelector('.send')
var data = document.querySelector('.text')
var done = false
const req = new XMLHttpRequest()

let mail_check = (mail) => {

}


button.addEventListener('click', function(){
  req.open('GET',`newsletter.php?mail=${data.value}`,true)
  req.send()
  console.log(data.value)
})
