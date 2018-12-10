const db = require('../helpers/db.js')
const Article = db.Article

const getAll = async() => {
    return await Article.find().select()
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
    getById,
    create,
    update,
    delete: _delete
}