export const updateIsPageLoaded = value => ({
    type: 'UPDATE_IS_PAGE_LOADED',
    value
})

export const tryToUpdateIsPageLoaded = value => dispatch => {
    setTimeout(() => {
        dispatch(updateIsPageLoaded(value))
    }, 500)
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
            dispatch(tryGetUserInformation())
        } else {
            response.json().then(payload => dispatch(generateMessage('error', payload.message)))
        }
    })
}

export const tryGetUserInformation = () => (dispatch, getState) => {
    const state = getState()
    const url = `${state.global.apiUrl}/users/current`
    let token = window.sessionStorage.getItem("authorization")

    fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then(response => {
        if (response.ok) {
            response.json().then(payload => dispatch(updateAuthenticationHeader(payload)))
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

const addMessage = (message) => ({
    type: 'ADD_MESSAGE',
    message: message
})

const closeMessageAferTimeout = (id) => (dispatch) => {
    setTimeout(() => {
        dispatch(closeMessage(id))
    }, 6000)
}

const updateIsAuthenticated = payload => ({
    type: 'UPDATE_IS_AUTHENTICATED',
    value: payload
})

const updateAuthenticationHeader = token => ({
    type: 'UPDATE_AUTHENTICATION_HEADER',
    token
})