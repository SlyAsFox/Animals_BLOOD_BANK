const { Router } = require('express');
const router = new Router();
const asyncHandler = require('express-async-handler');
const { BloodRequest, User, Clinic } = require('../../../../models');

router.get('/', asyncHandler(async (req, res) => {
    const donations = await BloodRequest.findAll(
        {
                    include: [
                        {
                            model: Clinic,
                            as: 'clinic'
                        },
                        {
                            // attributes: ['fullName', 'city', 'phone', 'email'],
                            model: User,
                            as: 'creator'
                        }
                    ]
                }
    );

    res.send({
        data: donations
    })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const donation = await BloodRequest.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: donation
    })
}));

module.exports = router;
