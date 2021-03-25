import merge from "merge";
import baseConfig from "./app.config.base.json";
import devConfig from "./app.config.dev.json";
import prodConfig from "./app.config.prod.json";

const envConfigs = {
  dev: devConfig,
  prod: prodConfig
};

/**
 * Puts together the configuration, as combination of base and environment-specific config
 *
 * @param {string} env Current app environment
 * @returns {object} Configuration object
 */
export const getConfig = (env) => {
  let allConfig = baseConfig;
  let envConfig;
  if (env) {
    envConfig = envConfigs[env];
  } else {
    envConfig = envConfigs.dev;
  }

  if (envConfig) {
    allConfig = merge.recursive(true, allConfig, envConfig);
  }
  return allConfig;
};
