module.exports = {
    moduleFileExtensions: ['js', 'ts'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    testMatch: [
        '<rootDir>/tests/**/*.spec.ts',
    ],
    globals: {
        'ts-jest': {
            compiler: 'ttypescript',
            tsConfig: 'tsconfig.json',
        },
    },
};
