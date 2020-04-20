const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { User, Animal } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const users = await User.findAll();

    res.send({
        data: users
    })
}));

router.get('/:email/:manyAnimals', asyncHandler(async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.params.email
        }
    });

    const animals = await Animal.findAll({
        where: {
            userId: user.id
        }
    });



    res.send({
        data: ( animals.length > 1 ) ? user : []
    })
}));

//post
router.get('/create', asyncHandler(async (req, res) => {
    const user = await User.create({
        fullName: faker.name.findName(),
        sex: 'male',
        city: faker.address.city(),
        birth: faker.date.past(10, '2000-01-01'),
        phone: `+38 063 451 42 32`,
        email: faker.internet.email(),
        password: faker.internet.password(8)
    });

    res.send({
        data: user
    })
}));

router.put('/:id', asyncHandler(async (req, res) => {
    let user = await User.findOne({
        where: {
            id: req.params.id
        }
    });

    if(user){
        user = await user.update({
            ...req.body
        });

        res.send({
            data: user
        });
    }else{
        res.send({
            data: res.status(403).send('User is not found')
        });
    }
}));

router.delete('/:id', asyncHandler(async (req, res) => {
    let user = await User.findOne({
        where: {
            id: req.params.id
        }
    });

    if(user){
        user = await user.destroy({
            ...req.body
        });

        res.send({
            data: user
        });
    }else{
        res.send({
            data: res.status(403).send('User is not found')
        });
    }
}));


//TODO: return deleted object
router.get('/:id', asyncHandler(async (req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: user
    })
}));

module.exports = router;
