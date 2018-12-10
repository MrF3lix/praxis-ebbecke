const express = require('express')
const router = express.Router()
const cmsService = require('./cms.service')

const create = (req, res, next) => {
    cmsService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err))
}

const getAll = (req, res, next) => {
    cmsService.getAll()
        .then(articles => res.json(articles))
        .catch(err => next(err))
}

const getById = (req, res, next) => {
    cmsService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err))
}

const update = (req, res, next) => {
    cmsService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err))
}

const _delete = (req, res, next) => {
    cmsService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err))
}

router.post('/add', create)
router.get('/getAll', getAll)
router.get('/:id', getById)
router.put('/:id', update)
router.delete('/:id', _delete)

module.exports = router