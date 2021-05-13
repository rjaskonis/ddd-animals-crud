module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/*.spec.ts"],
    bail: true,
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
};
