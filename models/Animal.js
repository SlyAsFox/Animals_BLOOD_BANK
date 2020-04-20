const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Animal extends Model {}

Animal.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId:{
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull:false
    },
    birth: {
        type: DataTypes.DATE,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    breed: {
        type: DataTypes.STRING,
        allowNull: true
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bloodGroup: {
        type: DataTypes.STRING,
        field: 'blood_group',
        allowNull: true
    },
},{
    sequelize,
    modelName: 'animals',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id', 'userId'] }
    // }
});

Animal.associate = ( models ) => {
    Animal.belongsTo(models.User, {
        as: 'owner',
        foreignKey: 'user_id'
    });

    Animal.hasMany(models.MedicalCheck, {
        as: 'checks'
    });

    Animal.hasOne(models.BloodRequest)
    Animal.hasMany(models.Donation);
    // Animal.hasMany(models.BloodRequest);
};

module.exports = Animal;
