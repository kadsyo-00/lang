const local = {
    en: {
        servicies: `servicies`,
        price: `price`
    },
    ru: {
        servicies: `услуги`,
        price: `цена`
    },
    uz: {
        servicies: `Xizmatlar`,
        price: `Narx`
    }
}
let i = prompt("Kerakli tilni kiriting: en, ru, uz").toLowerCase();

console.log(local[i]?local[i]:local.en);