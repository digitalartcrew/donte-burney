const stickySections = [...document.querySelectorAll('.sticky')]
const fixedIcons = document.querySelector('.fixed-icons');

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