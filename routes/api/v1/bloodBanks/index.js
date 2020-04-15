const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { BloodBank, Clinic, Donation } = require('../../../../models');
const faker = require('faker');

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
    const donation = await BloodBank.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: donation
    })
}));

module.exports = router;
