module.exports = {
	coverageDirectory: '<rootDir>/.coverage',
	collectCoverageFrom: [
		'<rootDir>/src/**/*.ts',
		'!<rootDir>/src/__tests__/**/*.ts',
	],
	testRegex: '/__tests__/__integration__/.+.int.spec.ts$',
	testTimeout: 30000,
	preset: 'ts-jest',
	testEnvironment: 'node',
};
