module.exports = {
    testEnvironment: 'jsdom',
    setupFiles: ['./jest.setup.js'],
    moduleNameMapper: {
        '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/file.js',
        '\\.(css|less)(|\\?.+)$': '<rootDir>/src/__mocks__/file.js'
    }
};