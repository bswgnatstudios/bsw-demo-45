module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
    ],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    // setupFiles: ['<rootDir>/setupTests.js'],
};