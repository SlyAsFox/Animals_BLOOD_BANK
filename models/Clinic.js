const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Clinic extends Model {}

Clinic.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    foundationYear: {
        type: DataTypes.INTEGER,
        field: 'foundation_year',
        allowNull: false
    }
},{
    sequelize,
    modelName: 'clinics',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

Clinic.associate = ( models ) => {
    Clinic.hasMany(models.Staff, {
        as: 'staff'
    });

    Clinic.hasMany(models.BloodRequest, {
        as: 'requests'
    });

    Clinic.hasMany(models.MedicalCheck, {
        as: 'checks'
    });

    Clinic.hasMany(models.BloodBank, {
        as: 'blood_banks'
    });
};

module.exports = Clinic;
