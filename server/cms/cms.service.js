const db = require('../helpers/db.js')
const Article = db.Article
const Team = db.Team
const Time = db.Time
const Address = db.Address

const getAll = async() => {
    return await Article.find().select()
}

const getAllTeamMembers = async() => {
    return await Team.find().select()
}

const getOpeningTimes = async() => {
    return await Time.find().select()
}

const getById = async (id) => {
    return await Article.findById(id).select()
}

const create = async (params) => {
    const article = new Article(params)

    await article.save()
}

const update = async (id, params) => {
    const article = await Article.findById(id)

    if(!article) throw 'Article not found'

    Object.assign(article, params)

    await article.save()
}

const updateTimes = async (id, params) => {
    const time = await Time.findById(id)

    if(!time) throw 'Time not found'

    Object.assign(time, params)

    await time.save()
}

const updateAddress = async (id, params) => {
    const address = await Address.findById(id)

    if(!address) throw 'Address not found'
    Object.assign(address, params)

    await address.save()
}

const getAllAddress = async () => {
    return await Address.find().select()
}

const _delete = (id) => {

}

module.exports = {
    getAll,
    getAllTeamMembers,
    getOpeningTimes,
    getAllAddress,
    getById,
    create,
    update,
    updateTimes,
    updateAddress,
    delete: _delete
}