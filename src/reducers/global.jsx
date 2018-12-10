const initialState = {
    isMobile: false,
    isDev: false,
    isPageLoaded: false,
    apiUrl: 'http://localhost:8080/api',
    content: []
}

const global = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_IS_MOBILE':
            return {
                ...state,
                isMobile: action.value
            }
        case 'UPDATE_IS_PAGE_LOADED':
            return {
                ...state,
                isPageLoaded: action.value
            }
        case 'UPDATE_CONTENT':
            return {
                ...state,
                content: action.content,
                isPageLoaded: true
            }
        default:
            return state
    }
}

export default global