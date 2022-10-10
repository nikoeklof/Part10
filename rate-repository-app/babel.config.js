module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "formatjs",
        {
          idInterpolationPattern: "[sha512:contenthash:base64:6]",
          ast: true,
        },
      ],
    ],
  };
};
