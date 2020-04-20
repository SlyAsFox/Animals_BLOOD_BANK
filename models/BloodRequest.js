const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class BloodRequest extends Model {}

BloodRequest.init({
    group: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    disease: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false
    },
    clinicId: {
        type: DataTypes.INTEGER,
        field: 'clinic_id',
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'blood_requests',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

BloodRequest.associate = ( models ) => {
    BloodRequest.belongsTo(models.User, {
        as: 'creator',
        foreignKey: 'user_id'
    });
    BloodRequest.belongsTo(models.Clinic, {
        as: 'clinic',
        foreignKey: 'clinic_id'
    });
};

module.exports = BloodRequest;
