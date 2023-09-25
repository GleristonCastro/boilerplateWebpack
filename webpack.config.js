module.exports = (env) => {
  console.log('----env.mode', env.mode);
  const config = require(`./config/webpack.config.${env.mode}`)
  return config;
};