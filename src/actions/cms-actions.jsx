import fetch from 'cross-fetch'

export const tryGetContent = () => (dispatch, getState) => {
    const state = getState()
    const baseUrl = `${state.global.apiUrl}/cms/getAll`

    fetch(baseUrl, {
        method: 'GET'
    }).then(response => response.json())
        .then(json => dispatch(updateContent(json)))
}

export const tryGetTeam = () => (dispatch, getState) => {
    const state = getState()
    const baseUrl = `${state.global.apiUrl}/cms/getAllTeamMembers`

    fetch(baseUrl, {
        method: 'GET'
    }).then(response => response.json())
        .then(json => dispatch(updateTeam(json)))
}

export const tryGetTimes = () => (dispatch, getState) => {
    const state = getState()
    const baseUrl = `${state.global.apiUrl}/cms/getOpeningTimes`

    fetch(baseUrl, {
        method: 'GET'
    }).then(response => response.json())
        .then(json => dispatch(updateTimes(json)))
}

const updateContent = content => ({
    type: 'UPDATE_CONTENT',
    content
})

const updateTeam = team => ({
    type: 'UPDATE_TEAM',
    team
})

const updateTimes = times => ({
    type: 'UPDATE_TIMES',
    times
})