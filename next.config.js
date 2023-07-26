const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')


/** @type {import('next').NextConfig} */
module.exports = (phase) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'NinaBlogNext',
        mongodb_password: 'gymH5hoJSckn76pN',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'NinaBlog1-dev'
      }
    }
  }

  return {
    env: {
      mongodb_username: 'NinaBlogNext',
      mongodb_password: 'gymH5hoJSckn76pN',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'NinaBlog1'
    }
  }
}

