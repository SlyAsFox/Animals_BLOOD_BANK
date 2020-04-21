const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Animal, User, MedicalCheck } = require('../../../../models');
const fakerByFox = require('../../../../FakerByFox');
const faker = require('faker');


router.get('/', asyncHandler(async (req, res) => {
    const animals = await Animal.findAll();

    res.send({
        data: animals
    })
}));

router.get('/:type/:breed', asyncHandler(async (req, res) => {
    const animals = await Animal.findAll({
        where: {
            breed: req.params.breed,
            type: req.params.type,
        }
    });

    res.send({
        data: animals
    })
}));

router.get('/deleteByOwnerAndName/:owner/:name', asyncHandler(async (req, res) => {
    const user = await User.findOne({
        where: {
            fullName: req.params.owner,
        }
    });
    const animal = await Animal.findOne({
        where: {
            name: req.params.name,
            userId: user.id
        }
    });

    res.send({
        data: animal
    });

    // animal.destroy();
}));

//post
router.get('/create', asyncHandler(async (req, res) => {
    let sex = fakerByFox.sex();
    const animal = await Animal.create({
        name: fakerByFox.animalName(sex),
        birth: faker.date.past(10, '2000-01-01'),
        type: 'dog',
        breed: `Немецкая овчарка`,
        color: 'подпалый',
        sex: sex,
        userId: 1,
        bloodGroup: 'A'
    });

    res.send({
        data: animal
    })
}));

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
