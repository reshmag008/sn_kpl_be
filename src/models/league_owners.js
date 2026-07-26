module.exports = (sequelize, type) => {
    return sequelize.define(
      'league_owners',
      {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        owner_name: { type: type.STRING, allowNull: false },
        username: { type: type.STRING, allowNull: false },
        password: { type: type.STRING, allowNull: false },
        contact_no: { type: type.INTEGER, allowNull: false },
      },
      {
        timestamps: true,
        freezeTableName: true, // Model tableName will be the same as the model name
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt',
        paranoid : true
        // validate
      }
    )
  }
  