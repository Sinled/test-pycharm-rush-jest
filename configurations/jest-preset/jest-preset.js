module.exports = {
    reporters: [
        'jest-standard-reporter',
        [
            'jest-junit',
            { suiteNameTemplate: '{filename}', suiteName: '[unit] packages', outputDirectory: './reports/unit/' },
        ],
    ],
};
