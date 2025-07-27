let changeRegionButton = document.querySelector(".button_container");
let frenchButton = document.getElementById('French');
let germanButton = document.getElementById('German');
let englandButton = document.getElementById('England');

const regions = {
    French: ["/pics/03.jpg", "/pics/03 (1).jpg", "/pics/03 (2).jpg", "/pics/03 (6).jpg", "/pics/03 (7).jpg", "/pics/03 (8).jpg"],
    German: ['/pics/Germna_1.jpg', '/pics/Germna_2.jpg', '/pics/Germna_3.jpg', '/pics/Germna_4.jpg', '/pics/Germna_5.jpg', '/pics/Germna_6.jpg'],
    England: ['/pics/French_1.jpg', '/pics/French_2.jpg', '/pics/French_3.jpg', '/pics/French_4.jpg', '/pics/French_5.jpg', '/pics/French_6.jpg']
};


let images = document.querySelectorAll('.foto_img');
let textElements = document.querySelectorAll('.foto_p');

frenchButton.addEventListener('click', function() {
    for (let i = 0; i < 6; i++) {
        images[i].src = regions.French[i];
        let textIndex = i * 4; // Каждая карточка имеет 4 текстовых элемента
        textElements[textIndex].textContent = regionData.france[i].artist;
        textElements[textIndex + 1].textContent = regionData.france[i].title;
        textElements[textIndex + 2].textContent = regionData.france[i].material;
        textElements[textIndex + 3].textContent = regionData.france[i].price;
    }
});

germanButton.addEventListener('click', function() {
    for (let i = 0; i < 6; i++) {
        images[i].src = regions.German[i];
        let textIndex = i * 4;
        textElements[textIndex].textContent = regionData.germany[i].artist;
        textElements[textIndex + 1].textContent = regionData.germany[i].title;
        textElements[textIndex + 2].textContent = regionData.germany[i].material;
        textElements[textIndex + 3].textContent = regionData.germany[i].price;
    }
});

englandButton.addEventListener('click', function() {
    for (let i = 0; i < 6; i++) {
        images[i].src = regions.England[i];
        let textIndex = i * 4;
        textElements[textIndex].textContent = regionData.england[i].artist;
        textElements[textIndex + 1].textContent = regionData.england[i].title;
        textElements[textIndex + 2].textContent = regionData.england[i].material;
        textElements[textIndex + 3].textContent = regionData.england[i].price;
    }
});


const buttons = document.querySelectorAll('.button_container button');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        buttons.forEach(function(b) {
            b.classList.remove('active-region');
        })
        btn.classList.add('active-region');
    })

})


const regionData = {
    france: [
        { artist: "Марсель Руссо", title: "Охота Амура", price: "14 500 руб", material: "Холст, масло (50х80)" },
        { artist: "Анри Селин", title: "Дама с собачкой", price: "16 500 руб", material: "Акрил, бумага (50х80)" },
        { artist: "Франсуа Дюпон", title: "Процедура", price: "20 000 руб", material: "Цветная литография (40х60)" },
        { artist: "Луи Детуш", title: "Роза", price: "12 000 руб", material: "Бумага, акрил (50х80)" },
        { artist: "Франсуа Дюпон", title: "Птичья трапеза", price: "22 500 руб", material: "Цветная литография (40х60)" },
        { artist: "Франсуа Дюпон", title: "Процедура", price: "20 000 руб", material: "Цветная литография (40х60)" }
    ],
    germany: [
        { artist: "Курт Вернер", title: "Над городом", price: "16 000 руб", material: "Цветная литография (40х60)" },
        { artist: "Макс Рихтер", title: "Птенцы", price: "14 500 руб", material: "Холст, масло (50х80)" },
        { artist: "Мартин Майер", title: "Среди листьев", price: "20 000 руб", material: "Цветная литография (40х60)" },
        { artist: "Герман Беккер", title: "Яркая птица", price: "13 000 руб", material: "Цветная литография (40х60)" },
        { artist: "Вульф Бауэр", title: "Дятлы", price: "20 000 руб", material: "Бумага, акрил (50х80)" },
        { artist: "Вальтер Хартманн", title: "Большие воды", price: "23 000 руб", material: "Бумага, акрил (50х80) " }
    ],
    england: [
        { artist: "Пол Смит", title: "Дикий зверь", price: "19 500 руб", material: "Акварель, бумага (50х80) " },
        { artist: "Джон Уайт", title: "Скалистый берег", price: "17 500 руб", material: "Цветная литография (40х60) " },
        { artist: "Джим Уотсон", title: "Река и горы", price: "20 500 руб", material: "Акварель, бумага (50х80) " },
        { artist: "Юджин Зиллион", title: "Белый попугай", price: "15 500 руб", material: "Цветная литография (40х60) " },
        { artist: "Эрик Гиллман", title: "Ночная рыба", price: "12 500 руб", material: "Бумага, акрил (50х80) " },
        { artist: "Альфред Барр", title: "Рыжий кот", price: "21 000 руб", material: "Цветная литография (40х60) " }
    ]
};


const footerLinks = document.querySelectorAll('a[data-region]');

footerLinks.forEach(link => {
    link.addEventListener('click', () => {
        const region = link.getAttribute('data-region');
        if (region === 'French') frenchButton.click();
        if (region === 'German') germanButton.click();
        if (region === 'England') englandButton.click();
    });
});
