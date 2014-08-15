window.onload = app;

function app() {

var images = document.querySelectorAll('.cell2');
    
    images = [].slice.call(images);
    images.forEach(function(img) {
        img.addEventListener("click", changeBorder);
    })
    function changeBorder(event) {
        event.target.classList.add('clicked');
    }

    images.forEach(function(img){
        img.addEventListener("click", changeBG);
    })
    // function changeBG(event){
    //     event.target.classList.add('secondClick');
    // }

   
    images.forEach(function(img) {
        img.addEventListener("mousedown", changeSomethingOnMouseDown);
    })
    function changeSomethingOnMouseDown(event) {
        event.target.classList.add('moused');
        event.target.classList.remove('unmoused');
    }

	images.forEach(function(img) {
        img.addEventListener("mouseup", changeSomethingOnMouseUp);
    })
    function changeSomethingOnMouseUp(event) {
        event.target.classList.add('unmoused');
        event.target.classList.remove('moused');
    }


// var text = document.querySelector('p')
//     text.addEventListener('click', callback);
//     function callback(event){
//     	event.target.classList.remove("address");
//     }    

// var upButton = document.querySelector('.upButton')

//     upButton.addEventListener('mousedown', OnMouseDown, true);
//     function OnMouseDown(event){
//         event.target.classList.add('upButtonMD');
//         event.target.classList.remove('upButtonMU');
//     }

//     upButton.addEventListener('mouseup', OnMouseUp, true);
//     function OnMouseUp(event){
//         console.log(event.target, event);
//         event.target.classList.add('upButtonMU');
//         event.target.classList.remove('upButtonMD');
//     }

    upButton.addEventListener('click', scrollToTop);
    function scrollToTop(event){
        document.querySelector('body').scrollTop = '0px';
    }

}
