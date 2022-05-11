module.exports = (api) => {
    if (!api.env('test')) {
        return {};
    }

    // NOTE: babel.config is used for `Jest` transformations only
    return {
        presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
    };
};
