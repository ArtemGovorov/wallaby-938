module.exports = function (wallaby) {
    return {
        files: [
            "src/**/*.ts?(x)",
            "!src/**/*_Spec.ts?(x)",
            "src/**/*.snap",
            "package.json",
            "tsconfig.json"
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
        preprocessors: {
            '**/*.snap': file => (
                file.rename(file.path.replace('.tsx', '.js').replace('.ts', '.js')),
                file.content)
        },
        testFramework: "jest",
        setup: function () {
            const jestConfig = require("./package.json").jest;
            delete jestConfig.moduleFileExtensions;
            wallaby.testFramework.configure(jestConfig);
        }
    };
};
