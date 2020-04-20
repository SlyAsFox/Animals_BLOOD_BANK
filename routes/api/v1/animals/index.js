const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Animal, User, MedicalCheck } = require('../../../../models');

router.get('/', asyncHandler(async (req, res) => {
    const animals = await Animal.findAll();

    res.send({
        data: animals
    })
}));

router.get('/:type/:breed', asyncHandler(async (req, res) => {
    const animals = await Animal.findAll({
        where: {

        }
    });

    res.send({
        data: animals
    })
}));

//post
// router.get('/create', asyncHandler(async (req, res) => {
//     const animal = await Animal.create({
//         name: faker.name.firstName(),
//         birth: faker.date.past(10, '2000-01-01'),
//         type: 'dog',
//         breed: `Немецкая овчарка`,
//         color: 'подпалый',
//         sex: 'male',
//     });
//
//     res.send({
//         data: animal
//     })
// }));

router.put('/:id', asyncHandler(async (req, res) => {
    let animal = await Animal.findOne({
        where: {
            id: req.params.id
        }
    });

    if(!animal){
        res.status(403).send('id does not exist')
    }else{
        animal = await animal.update({
            ...req.body
        });

        res.send({
            data: animal
        });
    }
}));



router.delete('/:id', asyncHandler(async (req, res) => {
    const deletedAnimal = await Animal.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: deletedAnimal
    });
}));



router.get('/:id', asyncHandler(async (req, res) => {
    const animal = await Animal.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: animal
    })
}));

module.exports = router;
