const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { Donation, BloodBank } = require('../../../../models');

router.get('/', asyncHandler(async (req, res) => {
    const donations = await Donation.findAll({
        include: [
            {
                model: BloodBank,
                as: 'blood_bank'
            }
        ]
    });

    res.send({
        data: donations
    })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const donation = await Donation.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: donation
    })
}));

module.exports = router;
