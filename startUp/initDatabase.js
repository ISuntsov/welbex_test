// любой пользователь имеет как минимум в БД список данных
// они равны mock данным

const Cities = require('../models/Cities')
const citiesMock = require('../mock/cities.json')

module.exports = async () => {
    const cities = await Cities.find()
    if (cities.length !== citiesMock.length) {
        await createInitialEntity(Cities, citiesMock)
    }
}

async function createInitialEntity(Model, data) {
    await Model.collection.drop()
    return Promise.all(
        data.map(async item => {
            try {
                delete item._id
                const newItem = new Model(item)
                await newItem.save()
                return newItem
            } catch (e) {
                return e
            }
        })
    )
}