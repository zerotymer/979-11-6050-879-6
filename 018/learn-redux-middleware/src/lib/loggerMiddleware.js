const loggerMiddleware = (store) => (next) => (action) => {
    console.group(action && action.type);
    console.log('이전 상태', store.getState());
    console.log('액션', action);
    next(action); // 다음 미들웨어 혹은 리듀서에게 전달`
    console.log('다음 상태', store.getState());
    console.groupEnd();
};

export default loggerMiddleware;