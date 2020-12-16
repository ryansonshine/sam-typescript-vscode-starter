module.exports = {
	coverageDirectory: '<rootDir>/.coverage',
	collectCoverageFrom: [
		'<rootDir>/src/**/*.ts',
		'!<rootDir>/src/__tests__/**/*.ts',
	],
	testPathIgnorePatterns: ['<rootDir>/src/__tests__/__integration__/'],
	testRegex: '/__tests__/.+.spec.ts$',
	preset: 'ts-jest',
	testEnvironment: 'node',
};
