// let moreButton = document.querySelectorAll('.home')

// for (let i = 0; i < moreButton.length; i++) {
 
//     let allMoreButton = moreButton[i]

//     // console.log('allMoreButton', allMoreButton)

//     allMoreButton.addEventListener('click', function(){
        
    
//         let cartheading = allMoreButton.parentElement.querySelector('.logo').innerText
//         console.log('clicked on ', logo)

//         document.querySelector('.graphic-text').innerText = cartheading
//         // document.querySelector('#modal_logo').innerHTML = logo

//         if(cartheading === 'Home'){
//             document.querySelector('.des-text').innerText = `Software ----- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
            
//         }else if(cartheading === 'Search'){
//             document.querySelector('.des-text').innerText = `Web Design ----- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
 
//         }else if(cartheading === 'Post'){
//             document.querySelector('.des-text').innerText = `Graphic Designs ----- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
 
//         }else if(cartheading === 'Reels'){
//             document.querySelector('.des-text').innerText = `Application ----- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
 
//         }else if(cartheading === 'Profile'){
//             document.querySelector('.des-text').innerText = `Reels ----- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
 
//         }else{
//             document.querySelector('.des-text').innerText = `wrong input`
//         }


//         document.querySelector('.home').style.display = 'flex';

//     })
    
// }


// document.querySelector('#modal_close').addEventListener('click', function(){
//     document.querySelector('.closing').style.display = 'none';
// })




let moreButton = document.querySelectorAll('.home');

for (let i = 0; i < moreButton.length; i++) {
    let allMoreButton = moreButton[i];

    allMoreButton.addEventListener('click', function () {
        let cartheading = allMoreButton.parentElement.querySelector('.logo').innerText;
        console.log('clicked on ', cartheading);

        document.querySelector('.graphic-text').innerText = cartheading;

        if (cartheading === 'Home') {
            document.querySelector('.des-text').innerText = `Software ----- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;
        } else if (cartheading === 'Search') {
            document.querySelector('.des-text').innerText = `Web Design ----- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;
        } else if (cartheading === 'Post') {
            document.querySelector('.des-text').innerText = `Graphic Designs ----- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;
        } else if (cartheading === 'Reels') {
            document.querySelector('.des-text').innerText = `Application ----- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;
        } else if (cartheading === 'Profile') {
            document.querySelector('.des-text').innerText = `Reels ----- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;
        } else {
            document.querySelector('.des-text').innerText = `wrong input`;
        }

        allMoreButton.style.display = 'flex';
    });
}

document.querySelector('#modal_close').addEventListener('click', function () {
    document.querySelector('.closing').style.display = 'none';
});





// let clickOn = document.querySelectorAll('.more-info');

// Array.from(clickOn).map(function (element) {
//     element.addEventListener('click', function () {
//         document.querySelector('.more-info-col').style.display = 'flex';
//     });
// });


// let clickOff = document.querySelectorAll('.more-info-col');

// Array.from(clickOff).map(function (element) {

//     element.addEventListener('click', function () {
//         document.querySelector('.more-info-col').style.display = 'none';
//     });
// });




