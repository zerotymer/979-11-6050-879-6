/*
 * 서버 사이드 렌더링을 처리할 때 사용할 빌드 스크립트
 */

process.env.BABAL_ENV = 'production';
process.env.NODE_ENV = 'production';

process.on('unhandledRejection', (err) => { throw err; } );

require('../config/env');
const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('../config/webpack.config.server');
const paths = require('../config/paths');

function build() {
    console.log('Creating server build...');
    fs.emptyDirSync(paths.ssrBuild);
    let compiler = webpack(config);

    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(stats.toString());
        });
    });
}

build();