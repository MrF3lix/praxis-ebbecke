const db = require('../helpers/db.js')
const Article = db.Article
const Team = db.Team
const Time = db.Time

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

const _delete = (id) => {

}

module.exports = {
    getAll,
    getAllTeamMembers,
    getOpeningTimes,
    getById,
    create,
    update,
    delete: _delete
}