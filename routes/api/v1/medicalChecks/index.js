const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { MedicalCheck, Staff, Animal } = require('../../../../models');
const faker = require('faker');

router.get('/', asyncHandler(async (req, res) => {
    const donations = await MedicalCheck.findAll();

    res.send({
        data: donations
    })
}));

router.get('/:petName/:doctorName', asyncHandler(async (req, res) => {

    const animal = await Animal.findOne({
        where: {
            name: req.params.petName
        }
    });

    const doctor = await Staff.findOne({
        where: {
            fullName: req.params.doctorName
        }
    });

    const checks = await MedicalCheck.findOne({
        where: {
            staffId: doctor.id,
            animalId: animal.id
        }
    });
//http://www.localhost:5000/api/v1/animals/Шептяков Ігор/Arman
    res.send({
        data: checks
    })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const donation = await MedicalCheck.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: donation
    })
}));

module.exports = router;
