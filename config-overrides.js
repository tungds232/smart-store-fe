/* config-overrides.js */
const ex = function override(config, env) {
    let oldRules = config.module.rules;
    
    let newRules = oldRules.map((oldRule) => {
        if (oldRule.oneOf !== undefined) {
            let arrayOneOf = oldRule.oneOf;
            const lengthArrayOneOf = arrayOneOf.length;
            let lastItem = arrayOneOf[lengthArrayOneOf - 1];
            arrayOneOf.splice(-1, 1);


            arrayOneOf = [
                ...arrayOneOf,
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'babel-loader',
                        },
                        {
                            loader: '@svgr/webpack',
                            options: {
                                icon: true,
                            },
                        },
                    ],
                },
                lastItem
            ];

            oldRule.oneOf = arrayOneOf;

        }
        return oldRule;
    });


    config.module.rules = newRules;

    return config;
}

module.exports = ex;