const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Staff } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const staff = await Staff.findAll();

    res.send({
        data: staff
    })
}));

router.get('/:position/:gender', asyncHandler(async (req, res) => {
    const staff = await Staff.findAll({
        where: {
            sex: req.params.gender,
            position: req.params.position
        }
    });

    res.send({
        data: staff
    })
}));

//post
router.get('/create', asyncHandler(async (req, res) => {
    const staff = await Staff.create({
        clinicId: 1,
        fullName: faker.name.findName(),
        position: 'doctor',
        birth: faker.date.past(10, '2000-01-01'),
        phone: '+38 063 385 98 77',
        sex: `male`,
        address: 'Україна, Вінниця, вул. Пирогова',
        email: faker.internet.email()
    });

    res.send({
        data: staff
    })
}));

router.put('/:id', asyncHandler(async (req, res) => {
    let staff = await Staff.findOne({
        where: {
            id: req.params.id
        }
    });

    if(!staff){
        res.status(403).send('id does not exist')
    }else{
        staff = await staff.update({
            ...req.body
        });

        res.send({
            data: staff
        });
    }
}));



router.delete('/:id', asyncHandler(async (req, res) => {
    const deletedStaff = await Staff.destroy({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: deletedStaff
    });
}));



router.get('/:id', asyncHandler(async (req, res) => {
    const staff = await Staff.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: staff
    })
}));

module.exports = router;

