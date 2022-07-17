const autoMapper = <T>(target: any, source: T) => {
    Object.keys(source).forEach(key => {
        if (target[key]) {
            source[key] = target[key];
        }
    });

    return source;
}
export default autoMapper;