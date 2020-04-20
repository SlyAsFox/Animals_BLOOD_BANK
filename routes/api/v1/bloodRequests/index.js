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

router.get('/:date/:disease', asyncHandler(async (req, res) => {
    const request = await BloodRequest.findAll({
        where: {
            createdAt: req.params.date,
            disease: req.params.disease
        }
    });

    res.send({
        data: request,
        p1: req.params.date,
        p2: req.params.disease
    })
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const request = await BloodRequest.findOne({
        where: {
            id: req.params.id
        }
    });

    res.send({
        data: request
    })
}));

module.exports = router;
