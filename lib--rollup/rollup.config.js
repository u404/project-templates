import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.umd.js',
      name: 'MyLib', // 用script标签引入时，绑定到window下的属性名
      format: 'umd',
    },
    plugins: [
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled' }),
    ],
  },
  {
    input: 'src/index.js',
    external: ['lodash'], // 外部引用
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'auto', // auto、default（只导出默认，如果有其他的命名export会报错）、named（同时导出其他命名导出）
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
      },
    ],
  },
];
