import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  exportStatic: true,
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'rjgczy',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
    ['umi-plugin-dll', {
      exclude: ["@babel/runtime"],
      include: ["dva/router", "dva/saga", "dva/fetch"],
    }],
  ],
}

export default config;
