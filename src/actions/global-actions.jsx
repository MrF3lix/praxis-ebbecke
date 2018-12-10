export const updateIsPageLoaded = value => ({
    type: 'UPDATE_IS_PAGE_LOADED',
    value
})

export const tryToUpdateIsPageLoaded = value => dispatch => {
    setTimeout(() => {
        dispatch(updateIsPageLoaded(value))
    }, 500)
}

export const submitRegister = (e) => (dispatch, getState) => {
    e.preventDefault()
    const state = getState()
    const url = `${state.global.apiUrl}/users/register`

    const values = new FormData(e.target)
    let requestData = new URLSearchParams(values)

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: requestData
    }).then(response => {
        if (response.ok) {
            response.json().then(payload => window.sessionStorage.setItem("authorization", payload.token))
            dispatch(updateAuthorization(true))
        } else {
            response.json().then(payload => dispatch(generateMessage('error', payload.message)))
        }
    })
}

export const submitLogin = (e) => (dispatch, getState) => {
    e.preventDefault()
    const state = getState()
    const url = `${state.global.apiUrl}/users/authenticate`

    const values = new FormData(e.target)
    let requestData = new URLSearchParams(values)

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: requestData
    }).then(response => {
        if (response.ok) {
            response.json().then(payload => window.sessionStorage.setItem("authorization", payload.token))
            dispatch(updateAuthorization(true))
        } else {
            response.json().then(payload => dispatch(generateMessage('error', payload.message)))
        }
    })
}

export const generateMessage = (type, content) => (dispatch, getState) => {
    let state = getState()

    let message = {
        id: state.global.messages.length,
        type: type,
        content: content,
        hidden: false
    }

    dispatch(addMessage(message))
    dispatch(closeMessageAferTimeout(message.id))
}

export const closeMessage = (id) => ({
    type: 'CLOSE_MESSAGE',
    id: id
})

export const updateAuthorization = value => ({
    type: 'UPDATE_AUTHORIZATION',
    value
})

const addMessage = (message) => ({
    type: 'ADD_MESSAGE',
    message: message
})

const closeMessageAferTimeout = (id) => (dispatch) => {
    setTimeout(() => {
        dispatch(closeMessage(id))
    }, 6000)
}