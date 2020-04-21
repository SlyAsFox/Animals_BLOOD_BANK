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
        const sex = ['male', 'female'];
        return sex[Math.floor(Math.random() * 2)];
    },
    animalName: (sex) => {
        const names = {
            male: [
                'Charlie',
                'Max',
                'Bailey',
                'Buddy',
                'Cooper',
                'Jack',
                'Oliver',
                'Riley',
                'Tucker',
                'Rocky',
                'Teddy',
                'Bentley',
                'Jake',
                'Bear',
                'Gus',
                'Duke',
                'Murphy',
                'Harley',
                'Henry',
                'Leo',
                'Dexter',
                'Zeus',
                'Lucky',
                'Milo',
                'Apollo',
                'Jax',
                'Scout',
                'Shadow',
                'Sam',
                'Cody',
            ],
            female: [
                'Bella',
                'Lucy',
                'Bailey',
                'Lola',
                'Daisy',
                'Molly',
                'Chloe',
                'Sophie',
                'Sadie',
                'Lily',
                'Coco',
                'Maggie',
                'Gracie',
                'Luna',
                'Abby',
                'Zoey',
                'Stella',
                'Roxy',
                'Lexi',
                'Ruby',
                'Rosie',
                'Sasha',
                'Marley',
                'Penny',
                'Ellie',
                'Lilly',
                'Ginger',
                'Emma',
                'Nala',
                'Mia',
            ]
        };
        let rand = Math.round(0 - 0.5 + Math.random() * (names[sex].length + 1));
        return names[sex][rand]
    }
};

