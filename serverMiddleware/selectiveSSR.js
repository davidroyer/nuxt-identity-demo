export default function(req, res, next) {
  console.log('SERVER MIDDLEWARE RUNNING!')
  console.log('req.originalUrl: ', req.originalUrl)

  if (req.originalUrl.includes('admin')) res.spa = true
  next()
}
