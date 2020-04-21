module.exports = (sequelize, type) => {
    return sequelize.define('services', {
        id_service: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        description: type.STRING,
        published: {
            type: type.BOOLEAN
        }
    })
}