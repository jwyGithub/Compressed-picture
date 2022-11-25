const execa = require('execa');
const fs = require('fs');
const path = require('path');

const targets = fs.readdirSync(path.resolve(__dirname, '../packages')).filter(p => !p.endsWith('.ts') && !p.startsWith('.'));
const getPkgRoot = pkg => path.resolve(__dirname, '../packages/' + pkg);

async function updateVersion(pkg) {
    await execa('npm', ['version', 'patch'], { cwd: pkg });
}

function release(target) {
    try {
        return async () => {
            updateVersion(getPkgRoot(target));
            console.log('\x1b[33m%s\x1b[0m', `start release ${target} package...`);
            await execa('pnpm', ['publish', '--no-git-checks'], { stdio: 'inherit', cwd: getPkgRoot(target) });
            return `release ${target} package success`;
        };
    } catch (error) {
        console.log('\x1b[33m%s\x1b[0m', `release ${target} package error, reason:${error}`);
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
    let generator = generateSequence(['graph-draw'].map(target => release(target)));
    for await (let msg of generator) {
        console.log('\x1b[33m%s\x1b[0m', msg);
    }
})();

