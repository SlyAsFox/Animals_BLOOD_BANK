const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Donation extends Model {}

Donation.init({
    createdAt: {
        type: DataTypes.DATE,
        field: 'createdAt',
        allowNull: false
    },
    expireAt: {
        type: DataTypes.DATE,
        field: 'expireAt',
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    group: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bloodBankId: {
        type: DataTypes.INTEGER,
        field: 'blood_bank_id',
        allowNull: false
    },
    animalId: {
        type: DataTypes.INTEGER,
        field: 'animal_id',
        allowNull: false
    },
    staffId: {
        type: DataTypes.INTEGER,
        field: 'staff_id',
        allowNull: false
    },
},{
    sequelize,
    modelName: 'donations',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

Donation.associate = ( models ) => {
    Donation.belongsTo(models.BloodBank, {
        as: 'blood_bank',
        foreignKey: 'bloodBank_id'
    });

    Donation.belongsTo(models.Animal);
    Donation.belongsTo(models.Staff);
};

module.exports = Donation;
