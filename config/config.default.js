module.exports = appInfo => {
  const config = {}

  config.test = {
    key: appInfo.name + '_123456'
  }
  
  config.nsc = {
    key: appInfo.name + '_123456'
  }

  // config.middleware = ['demo']

  config.redis = {
    
  }

  config.sequelizeModule = {
    
  }

  return config
}
