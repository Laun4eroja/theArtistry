const rateTitle = document.querySelectorAll('.rate__title');
const rateBlock = document.querySelectorAll('.rate__block');

// for (let item of rateTitle) {
//     item.addEventListener('click', function () {
//         for (let element of rateBlock) {
//             element.classList.add('hidden')
//         }
//         for (let element of rateTitle) {
//             element.classList.remove('rate__title--active')
//         }
        
//         const content = document.querySelector('#' + item.dataset.tab);
//         content.classList.remove('hidden');
//         item.classList.add('rate__title--active')
//     });
// }

rateTitle.forEach((title) => {
    title.addEventListener('click', () => {
        rateBlock.forEach((block) => {
            block.classList.add('hidden')
        })
        rateTitle.forEach((block) => {
            block.classList.remove('rate__title--active')
        })
        const content = document.querySelector('#' + title.dataset.tab);
        content.classList.remove('hidden')
        title.classList.add('rate__title--active')
    })
});



document.querySelectorAll('.works__list img').forEach(element => {
    element.onclick = () => {
        document.querySelector('.work__pop-up').style.display = 'block';
        document.querySelector('.work__pop-img').src = element.getAttribute('src');
        document.body.classList.add('overflow');
    };

    document.querySelector('.work__pop-up span').onclick = () => {
        document.querySelector('.work__pop-up').style.display = 'none';
        document.body.classList.remove('overflow');
    }
});


const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        400: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
    },
});



document.querySelectorAll('.accordeon__trigger').forEach((item) => {
    item.addEventListener('click', () => {
        item.parentNode.classList.toggle('accordeon__item--active');
        item.classList.toggle('accordeon__trigger-title--active');
    });
});


// Burger 

const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');

navBtn.onclick = () => {
    if(nav.classList.toggle('open')) {
        document.body.classList.add('overflow');
    } else {
        document.body.classList.remove('overflow');
    }
};


const price = document.querySelector('.price');
const works = document.querySelector('.works');
const contacts = document.querySelector('.contacts');

price.onclick = () => {
    nav.classList.remove('open');
    document.body.classList.remove('overflow');
}

works.onclick = () => {
    nav.classList.remove('open');
    document.body.classList.remove('overflow');
}

contacts.onclick = () => {
    nav.classList.remove('open');
    document.body.classList.remove('overflow');
}