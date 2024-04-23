const stickySections = [...document.querySelectorAll('.sticky')]
const fixedIcons = document.querySelector('.fixed-icons');

// let images = [
//     { src: 'img/IMG_0104.JPG', title: 'Title 1', description: 'Description 1' },
//     { src: 'img/IMG_0129.JPG', title: 'Title 2', description: 'Description 2' },
//     { src: 'img/IMG_0348.JPG', title: 'Title 3', description: 'Description 3' },
//     { src: 'img/IMG_0888.JPG', title: 'Title 4', description: 'Description 4' }
// ]

// images.forEach(imageData => {
//     stickySections.forEach(section => {
//         let divContainer = document.createElement('div');

//         let image = document.createElement('img');
//         image.src = imageData.src;

//         let title = document.createElement('h1');
//         title.textContent = imageData.title;

//         let description = document.createElement('p');
//         description.textContent = imageData.description;

//         divContainer.appendChild(image);
//         divContainer.appendChild(title);
//         divContainer.appendChild(description);

//         section.querySelector('.scroll_section').appendChild(divContainer);
//     })
// })


// dynamically add, horizontal scroll from Conor Bailey

window.addEventListener('scroll', (e) => {
    for (let i=0; i< stickySections.length; i++){
        transform(stickySections[i])
    }


    const distanceToBottom = document.body.scrollHeight - (window.innerHeight + window.scrollY);
    if (distanceToBottom <= 0) {
        fixedIcons.classList.add('middle');
    } else {
        fixedIcons.classList.remove('middle');
    }
})

function transform(section){
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section');
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}