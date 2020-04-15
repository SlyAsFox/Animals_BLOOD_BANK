const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class BloodBank extends Model {}

BloodBank.init({
    clinicId: {
        type: DataTypes.INTEGER,
        field: 'clinic_id',
        allowNull: false
    },
    specialization: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'blood_banks',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

BloodBank.associate = ( models ) => {
    BloodBank.belongsTo(models.Clinic, {
        as: 'clinic'
    });

    BloodBank.hasMany(models.Donation, {
        as: 'donations'
    });
};

module.exports = BloodBank;
