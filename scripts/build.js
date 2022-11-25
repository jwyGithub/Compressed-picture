const execa = require('execa');
const fs = require('fs');
const path = require('path');

const targets = fs.readdirSync('packages').filter(dir => fs.statSync(path.join('packages', dir)).isDirectory());

const getBuildOption = target => {
    const packageDir = path.resolve(process.cwd(), 'packages', target);
    const packageJson = require(path.resolve(packageDir, 'package.json'));
    const buildOptions = packageJson.buildOptions || {};
    return buildOptions;
};

function getEnv() {
    const args = process.argv.slice(2);
    return args.reduce((envs, item) => {
        const name = item.split('=')[0];
        const value = item.split('=')[1];
        envs[name] = value;
        return envs;
    }, {});
}

function build(target) {
    try {
        const { NODE_ENV } = getEnv();
        return async () => {
            console.log('\x1b[33m%s\x1b[0m', `start build ${target} package...`);
            await execa('rollup', ['-c', '--environment', [`TARGET:${target}`, `NODE_NEV:${NODE_ENV}`]], {
                stdio: 'inherit'
            });
            return `build ${target} package success`;
        };
    } catch (error) {
        console.log('\x1b[33m%s\x1b[0m', `build ${target} package error, reason:${error}`);
    }
}

async function* generateSequence(data) {
    try {
        for (const fn of data) {
            yield fn();
        }
    } catch (error) {
        console.log('error', error);
    }
}

(async () => {
    let buildOptions = targets.map(target => {
        const option = getBuildOption(target);
        option.packagename = target;
        return option;
    });
    buildOptions = buildOptions.sort((a, b) => a.priority - b.priority).map(i => i.packagename);
    let generator = generateSequence(buildOptions.map(target => build(target)));
    for await (let msg of generator) {
        console.log('\x1b[33m%s\x1b[0m', msg);
    }
})();

