const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './publice/temp')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const extention = file.mimetype.split("/")[1]
      cb(null, file.fieldname + '-' + uniqueSuffix + "." + extention)
    }
  })
  
  const upload = multer({ storage: storage });
  module.exports=upload