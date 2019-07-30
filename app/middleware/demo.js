module.exports = options => async (ctx, next) => {
  console.log('--> framework middlware')
  await next()
}