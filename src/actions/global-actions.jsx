export const updateIsPageLoaded = value => ({
    type: 'UPDATE_IS_PAGE_LOADED',
    value
})

export const tryToUpdateIsPageLoaded = value => dispatch => {
    setTimeout(() => {
        dispatch(updateIsPageLoaded(value))
    }, 500)
}