const execa = require('execa');
const fs = require('fs');
const path = require('path');

const packages = fs.readdirSync(path.resolve(__dirname, '../packages')).filter(p => !p.endsWith('.ts') && !p.startsWith('.'));
const getPkgRoot = pkg => path.resolve(__dirname, '../packages/' + pkg);

function release(target) {
    console.log('release', getPkgRoot(target));
    return execa('npm', ['publish'], { stdio: 'inherit', cwd: getPkgRoot(target) });
}

Promise.all(packages.map(t => release(t)))
    .then(() => {
        console.log('success');
    })
    .catch(err => {
        console.log(err);
    });

