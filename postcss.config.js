module.exports = {
  plugins: [
    require("postcss-normalize"),
    require("postcss-import"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("postcss-mixins"),
    require("cssnano"),
    require("postcss-preset-env")({ stage: 1 }),
  ],
};
