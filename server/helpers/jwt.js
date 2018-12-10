const expressJwt = require('express-jwt')
const config = require('../config.json')
const userService = require('../users/user.service.js')

const jwt = () => {
    const secret = config.secret
    return expressJwt({secret, isRevoked}).unless({
        path: [
            '/login',
            '/api/users/authenticate',
            '/api/users/register',
            '/api/cms/add',
            '/api/cms/getAll',
            '/api/cms/getAllTeamMembers',
            '/api/cms/getOpeningTimes'
        ]
    })
}

const isRevoked = async (req, payload, done) => {
    const user = await userService.getById(payload.sub)
    
    if(!user) {
        return done(null, true)
    }
    done()
}

module.exports = jwt