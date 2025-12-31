import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',

    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

    testMatch: [
        '<rootDir>/app/tests/**/*.(test|spec).ts?(x)',
    ],

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
};

export default config;
