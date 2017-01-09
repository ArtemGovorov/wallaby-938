module.exports = function (wallaby) {
    return {
        files: [
            "src/**/*.ts?(x)",
            "!src/**/*_Spec.ts?(x)",
            "src/**/*.snap",
            "package.json"
        ],
        tests: [
            "src/**/*_Spec.ts?(x)"
        ],
        env: {
            type: "node",
            runner: "node"
        },
        compilers: {
            "**/*.ts?(x)": wallaby.compilers.typeScript({ module: 'commonjs' })
        },
        testFramework: "jest",
        setup: function () {
            const jestConfig = require("./package.json").jest;
            wallaby.testFramework.configure(jestConfig);
        }
    };
};