module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      "nativewind/babel",
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            components: "./app/components",
            screens: "./app/screens",
            images: "./app/assets/images",
            routes: "./app/routes",
            assets: "./app/assets",
          },
        },
      ],
    ],
  };
};
