import path from 'path';
import { defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import ts from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';

const target = process.env.TARGET;
const env = process.env.NODE_NEV;
const packagesDir = path.resolve(__dirname, 'packages');
const packageDir = path.resolve(packagesDir, target);
const resolve = r => path.resolve(packageDir, r);
const packageJson = require(path.resolve(packageDir, 'package.json'));
const buildOptions = packageJson.buildOptions || {};

const name = packageDir.filename || path.basename(packageDir);

const outputConfigs = {
    'esm-bundler': {
        file: resolve(`dist/${name}.esm-bundler.js`),
        format: `es`
    },
    'esm-browser': {
        file: resolve(`dist/${name}.esm-browser.js`),
        format: `es`
    },
    'cjs.prod': {
        file: resolve(`dist/${name}.cjs.prod.js`),
        format: `cjs`
    },
    cjs: {
        file: resolve(`dist/${name}.cjs.js`),
        format: `cjs`
    },
    global: {
        file: resolve(`dist/${name}.global.js`),
        format: `iife`
    }
};

/**
 * @description
 * @param {string} format
 * @param {*} output
 * @returns { RollupOptions }
 */
function createConfig(format, output) {
    output.name = buildOptions.name;
    output.sourcemap = env === 'development';

    return defineConfig({
        input: resolve(`src/index.ts`),
        output: {
            ...output,
            globals: {
                '@staryea/graph': 'graph'
            },
            exports: 'auto'
        },
        plugins: [
            json(),
            nodeResolve(),
            ts({
                tsconfig: path.resolve(__dirname, 'tsconfig.json'),
                tsconfigOverride: {
                    compilerOptions: {
                        declaration: true,
                        declarationMap: false,
                        declarationDir: resolve('dist/types'),
                        allowJs: true
                    },
                    include: [resolve(`src/**/*.ts`)]
                },
                clean: true,
                useTsconfigDeclarationDir: true
            }),
            env === 'production' && format !== 'cjs' ? terser() : false,
            replace({
                'process.env.NODE_ENV': JSON.stringify(env),
                preventAssignment: true
            })
        ].filter(Boolean),
        external: ['@staryea/graph']
    });
}

export default buildOptions.formats.map(format => createConfig(format, outputConfigs[format]));

