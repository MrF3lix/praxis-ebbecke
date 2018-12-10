import fetch from 'cross-fetch'

export const tryGetContent = () => (dispatch, getState) => {
    const state = getState()
    const baseUrl = `${state.global.apiUrl}/cms/getAll`

    fetch(baseUrl, {
        method: 'GET'
    }).then(response => response.json())
        .then(json => dispatch(updateContent(json)))
}

const updateContent = content => ({
    type: 'UPDATE_CONTENT',
    content
})