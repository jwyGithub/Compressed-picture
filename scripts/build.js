const execa = require('execa');
const fs = require('fs');
const path = require('path');

const targets = fs.readdirSync('packages').filter(dir => fs.statSync(path.join('packages', dir)).isDirectory());

async function build(target) {
    await execa('rollup', ['-c', '-w', '--environment', `TARGET:${target}`], { stdio: 'inherit' });
}

function runParaller(targets, iteratorFn) {
    const promises = targets.map(iteratorFn);
    return Promise.allSettled(promises);
}

runParaller(targets, build).then(() => {
    console.log('build success');
});

