const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le inyectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    released: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    background_image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.NUMBER,
        allowNull: true,
    },
    platforms: {
        type: DataTypes.ENUM('Xbox One')
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
  });
};