export const customMiddleware = store => next => action => {
    const state = store.getState();

    if (action.type === 'function') {
        next(action);
    } else {
        next(action);
    }
}