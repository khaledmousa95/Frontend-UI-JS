const container = document.getElementById('container')
const unSplashUrl = 'https://youtube.com'


 let row = 10

 for (let i = 0; i < row *5 ; i++){
     var img = document.createElement('video')

     img.src = `${unSplashUrl}`
     container.appendChild(img)

 }

 function getRandomNumber(){
     return Math.floor(Math.random() * 10) + 300
    }
    function getRandomSize(){
        return `${getRandomNumber()}x${getRandomNumber2()}`
    }
    function getRandomNumber2(){
        return Math.floor(Math.random()* 10) + 303
    }

