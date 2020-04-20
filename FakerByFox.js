// function fakerByFox(countryCode) {
//     const arrayRandElement = ( arr ) => {
//         return arr[Math.floor(Math.random() * arr.length)]
//     };
//
//     let countries = {
//         ua: '+380',
//         pl: '+48',
//         ru: '+79'
//     };
//     let operators = ['39','50','63','66','68','91','99','73','93'];
//
//     const createRandNumber = () => {
//       return `${countries[countryCode.toLowerCase()]} ${arrayRandElement(operators)}-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 100)}-${Math.floor(Math.random() * 100)}`
//     };
//
//     let randNumber = createRandNumber();
//     while (randNumber.length !== 17){
//         randNumber = createRandNumber()
//     }
//     return randNumber;
// };
//
// console.log(fakerByFox('ua'));

// module.exports = fakerByFox;

module.exports = {
    phone: (countryCode) => {
        const arrayRandElement = ( arr ) => {
            return arr[Math.floor(Math.random() * arr.length)]
        };

        let countries = {
            ua: '+380',
            pl: '+48',
            ru: '+79'
        };
        let operators = ['39','50','63','66','68','91','99','73','93'];

        const createRandNumber = () => {
            return `${countries[countryCode.toLowerCase()]} ${arrayRandElement(operators)}-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 100)}-${Math.floor(Math.random() * 100)}`
        };

        let randNumber = createRandNumber();
        while (randNumber.length !== 17){
            randNumber = createRandNumber()
        }
        return randNumber;
},
    sex: () => {

    },
    animalName: () => {

    }
};

