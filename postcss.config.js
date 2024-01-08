import postcssPresetEnv from 'postcss-preset-env'
import cssnano from 'cssnano'
import autoPrefixer from 'autoprefixer'

export default {
  plugins: [
    postcssPresetEnv({
      stage: 1,
      features: {
        'nesting-rules': {
          noIsPseudoSelector: false
        }
      }
    }),
    autoPrefixer(),
    cssnano({
      preset: 'default'
    })
  ]
}
