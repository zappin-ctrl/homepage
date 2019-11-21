import { terser } from "rollup-plugin-terser"

export default [
  {
    input: 'src/plugin.js',
    output: {file: 'assets/js/plugin.js', format: 'iife'},
    plugins: [terser()]
  },
  {
    input: 'src/demo.js',
    output: {file: 'assets/js/demo.js', format: 'iife'},
    plugins: [terser()]
  }
]
