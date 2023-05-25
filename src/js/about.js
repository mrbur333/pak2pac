const accordHeader = document.querySelectorAll('.accord-item__trigger');
const accordImg = document.querySelectorAll('.about__image');


accordHeader.forEach((item, index) => {
    item.addEventListener('click', () => {
            const parent = item.parentNode;
            
            if(parent.classList.contains('accord-item--active')) {
                parent.classList.remove('accord-item--active');
            } else {
                document
                    .querySelectorAll('.accord-item')
                    .forEach((child, index) => {
                        child.classList.remove('accord-item--active');
                        accordImg[index].classList.remove('about__image--active');
                });

                parent.classList.toggle('accord-item--active');
                accordImg[index].classList.add('about__image--active');
            }
        })
})