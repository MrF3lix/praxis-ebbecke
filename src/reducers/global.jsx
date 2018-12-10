const initialState = {
    isMobile: false,
    isDev: false,
    isPageLoaded: false,
    apiUrl: 'http://localhost:8080/api',
    content: [],
    team: [],
    times: [],
    messages: [],
    isAuthenticated: false,
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
        case 'UPDATE_TEAM':
            return {
                ...state,
                team: action.team
            }
        case 'UPDATE_TIMES':
            return {
                ...state,
                times: action.times
            }
        case 'CLOSE_MESSAGE':
            return {
                ...state,
                messages: state.messages.map(message => {
                    if (message.id != action.id) {
                        return message
                    } else {
                        message.hidden = true
                        return message
                    }
                })
            }
        case 'ADD_MESSAGE': {
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        }
        case 'UPDATE_IS_AUTHENTICATED':
            return {
                ...state,
                user: action.value
            }
        case 'UPDATE_AUTHORIZATION':
            return {
                ...state,
                isAuthenticated: action.value
            }
        case 'UPDATE_AUTHENTICATION_HEADER':
            return {
                ...state,
                authenticationToken: action.token,
                isAuthenticated: true
            }
        default:
            return state
    }
}

export default global