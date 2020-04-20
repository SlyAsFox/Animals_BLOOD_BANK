const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { BloodBank, Clinic, Donation } = require('../../../../models');

router.get('/', asyncHandler(async (req, res) => {
    const donations = await BloodBank.findAll({
        attributes: ['specialization', 'capacity'],
        include: [{
            attributes: ['name', 'phone', 'address'],
            model: Clinic,
            as: 'clinic',
        },
        {
            model: Donation,
            as: 'donations'
        }
        ]
    });

    res.send({
        data: donations
    })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const bloodBank = await BloodBank.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: bloodBank
    })
}));

router.get('/:clinicName/:specialization', asyncHandler(async (req, res) => {

    const clinic = await Clinic.findOne({
        where: {
            name: req.params.clinicName
        }
    });

    const bloodBank = await BloodBank.findOne({
        where: {
            clinicId: clinic.id,
            specialization: req.params.specialization
        }
    });

    res.send({
        data: bloodBank
    })
}));

module.exports = router;
