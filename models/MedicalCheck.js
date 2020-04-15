const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class MedicalCheck extends Model {}

MedicalCheck.init({
    clinicId: {
        type: DataTypes.INTEGER,
        field: 'clinic_id',
        allowNull: false
    },
    doctorId: {
        type: DataTypes.INTEGER,
        field: 'doctor_id',
        allowNull: false
    },
    animalId: {
        type: DataTypes.INTEGER,
        field: 'animal_id',
        allowNull: false
    },
    diagnosis: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'medical_сhecks',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

MedicalCheck.associate = ( models ) => {
    MedicalCheck.belongsTo(models.Animal, {
        as: 'animal',
        foreignKey: 'animal_id'
    });
    MedicalCheck.belongsTo(models.Clinic, {
        as: 'clinic',
        foreignKey: 'clinic_id'
    });
};

module.exports = MedicalCheck;
