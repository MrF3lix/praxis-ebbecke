import fetch from 'cross-fetch'
import { generateMessage } from './global-actions'

export const tryGetContent = () => (dispatch, getState) => {
    const state = getState()
    const baseUrl = `${state.global.apiUrl}/cms/getAll`

    fetch(baseUrl, {
        method: 'GET'
    }).then(response => response.json())
        .then(json => dispatch(updateContent(json)))
}

export const tryGetAddress = () => (dispatch, getState) => {
    const state = getState()
    const baseUrl = `${state.global.apiUrl}/cms/getAllAddress`

    fetch(baseUrl, {
        method: 'GET'
    }).then(response => response.json())
        .then(json => dispatch(updateAddress(json)))
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

export const submitContent = (e) => (dispatch, getState) => {
    e.preventDefault()
    const state = getState()
    const url = `${state.global.apiUrl}/cms/updateAll`

    const values = new FormData(e.target)
    let requestData = new URLSearchParams(values)
    let token = window.sessionStorage.getItem('authorization')

    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: requestData
    }).then(response => {
        if (response.ok) {
            response.json().then(payload => dispatch(generateMessage('info', payload.message)))
        } else {
            response.json().then(payload => dispatch(generateMessage('error', payload.message)))
        }
    })
}
export const submitTeam = (e) => (dispatch, getState) => {

}
export const submitAddress = (e, id) => (dispatch, getState) => {
    e.preventDefault()
    const state = getState()
    const url = `${state.global.apiUrl}/cms/updateAddress/${id}`

    const values = new FormData(e.target)
    let requestData = new URLSearchParams(values)
    let token = window.sessionStorage.getItem('authorization')

    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: requestData
    }).then(response => {
        if (response.ok) {
            response.json().then(payload => dispatch(generateMessage('info', payload.message)))
        } else {
            response.json().then(payload => dispatch(generateMessage('error', payload.message)))
        }
    })
}
export const submitTimes = (e) => (dispatch, getState) => {
    e.preventDefault()
    const state = getState()
    const url = `${state.global.apiUrl}/cms/updateAllTimes`

    const values = new FormData(e.target)
    let requestData = new URLSearchParams(values)
    let token = window.sessionStorage.getItem('authorization')

    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: requestData
    }).then(response => {
        if (response.ok) {
            response.json().then(payload => dispatch(generateMessage('info', payload.message)))
        } else {
            response.json().then(payload => dispatch(generateMessage('error', payload.message)))
        }
    })
}

export const updateAddressValue = (value, id) => ({
    type: 'UPDATE_ADDRESS_VALUE',
    value,
    id
})

export const updateContentValue = (value, id) => ({
    type: 'UPDATE_CONTENT_VALUE',
    value,
    id
})

export const updateTimeValue = (value, id) => ({
    type: 'UPDATE_TIME_VALUE',
    value,
    id
})

const updateAddress = addresses => ({
    type: 'UPDATE_ADDRESS',
    address: addresses[0]
})

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