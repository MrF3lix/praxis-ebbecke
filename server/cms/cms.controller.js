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

const getAllTeamMembers = (req, res, next) => {
    cmsService.getAllTeamMembers()
        .then(team => res.json(team))
        .catch(err => next(err))
}

const getOpeningTimes = (req, res, next) => {
    cmsService.getOpeningTimes()
        .then(times => res.json(times))
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

const updateAll = (req, res, next) => {
    Object.keys(req.body).map(key => {
        cmsService.update(key, {content: req.body[key]})
    })

    res.json({message: 'Saved successfully!'})
}

const updateAllTimes = (req, res, next) => {
    Object.keys(req.body).map(key => {
        cmsService.updateTimes(key, {value: req.body[key]})
    })

    res.json({message: 'Saved successfully!'})
}

const _delete = (req, res, next) => {
    cmsService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err))
}

router.post('/add', create)
router.get('/getAll', getAll)
router.get('/getAllTeamMembers', getAllTeamMembers)
router.get('/getOpeningTimes', getOpeningTimes)
router.get('/:id', getById)
router.put('/:id', update)
router.post('/updateAll', updateAll)
router.post('/updateAllTimes', updateAllTimes)
router.delete('/:id', _delete)

module.exports = router