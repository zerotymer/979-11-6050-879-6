const paths = require('./paths');
const getCSSMoudleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const getClientEnvironment = require('./env');

const jsRegex = /\.(js|mjs|jsx|ts|tsx)$/;
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
const urlLoaderRegex = [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/];
const excludeRegex = [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/];

// 환경 변수 설정
const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

module.exports = {
    // WebPack 기본 설정
    mode: 'production', // 프로덕션 모드로 설정하여 최적화 옵션들을 활성화
    entry: paths.ssrIndexJs, // 엔트리 경로
    target: 'node', // node 환경에서 실행될 것이라는 점을 명시
    output: {
        path: paths.ssrBuild, // 빌드 경로
        filename: 'server.js', // 파일 이름
        chunkFilename: 'js/[name].chunk.js', // 청크 파일 이름
        publicPath: paths.publicUrlOrPath, // 정적 파일이 제공될 경로
    },
    // WebPack 로더 설정
    module: {
        rules: [
            {
                oneOf: [
                    // for JavaScript
                    {
                        test: jsRegex,
                        include: paths.appSrc,
                        loader: require.resolve('babel-loader'),
                        options: {
                            customize: require.resolve('babel-preset-react-app/webpack-overrides'),
                            presets: [
                                require.resolve('babel-preset-react-app'), 
                                { runtime: 'automatic' }
                            ],
                            plugins: [
                                [
                                    require.resolve('babel-plugin-named-asset-import'),
                                    {
                                        loaderMap: {
                                            svg: { ReactComponent: '@svgr/webpack?-svgo![path]' },
                                        },
                                    },
                                ],
                            ],
                            cacheDirectory: true,
                            cacheCompression: false,
                            compact: false,
                        },
                    },

                    // for CSS
                    {
                        test: cssRegex,
                        exclude: cssModuleRegex,
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: {
                                exportOnlyLocals: true, // SSR을 위하여 실제 CSS 파일을 생성하지 않음
                            },
                        }
                    },

                    // for CSS Module
                    {
                        test: cssModuleRegex,
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: {
                                exportOnlyLocals: true, // SSR을 위하여 실제 CSS 파일을 생성하지 않음
                                getLocalIdent: getCSSMoudleLocalIdent,
                            },
                        }
                    },

                    // for Sass
                    {
                        test: sassRegex,
                        exclude: sassModuleRegex,
                        use: [
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 3,
                                    modules: {
                                        exportOnlyLocals: true, // SSR을 위하여 실제 CSS 파일을 생성하지 않음
                                    },
                                }
                            },
                            require.resolve('sass-loader')
                        ]
                    },

                    // for Sass + CSS Module
                    {
                        test: sassRegex,
                        exclude: sassModuleRegex,
                        use: [
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 3,
                                    modules: {
                                        exportOnlyLocals: true, // SSR을 위하여 실제 CSS 파일을 생성하지 않음
                                        getLocalIdent: getCSSMoudleLocalIdent,
                                    },
                                }
                            },
                            require.resolve('sass-loader')
                        ]
                    },

                    // for URL-loader
                    {
                        test: urlLoaderRegex,
                        loader: require.resolve('url-loader'),
                        options: {
                            emitFile: false, // 파일을 따로 저장하지 않음
                            limit: 10000, // 원래는 9.76KB가 넘어가면 파일로 저장하는데, SSR에서는 그냥 Data URL로 사용
                            name: 'static/media/[name].[hash:8].[ext]',
                        }
                    },

                    // for File-loader
                    {
                        loader: require.resolve('file-loader'),
                        exclude: excludeRegex,
                        options: {
                            emitFile: false, // 파일을 따로 저장하지 않음
                            name: 'static/media/[name].[hash:8].[ext]',
                        }
                    }
                    
                ]
            }
        ]
    },

    // module 로딩 설정: SSR에서는 Node.js의 모듈 시스템을 직접 로드
    resolve: {
        modules: ['node_modules']
    },

    // 외부 모듈 설정: Node.js 내장 모듈은 번들링에서 제외
    externals: [
        nodeExternals({ allowlist: [/@babel/] })
    ]
};