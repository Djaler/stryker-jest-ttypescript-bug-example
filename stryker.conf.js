module.exports = (config) => {
    config.set({
        mutator: 'typescript',
        packageManager: 'npm',
        reporters: ['progress'],
        testRunner: 'jest',
        coverageAnalysis: 'off',
        mutate: ['src/**/*.ts']
    });
};
