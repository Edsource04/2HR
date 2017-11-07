var multer = require('multer');  // require multer to handle image upload
var path = require('path');

//store and validation
var multerConfig = {
    storage: multer.diskStorage({
        destination: function(req, file, next){
           var _dest = path.join('../assets/profiles/');
                next(null, _dest);
          },
         filename: function(req, file, next){
         const ext = file.mimetype.split("/")[1];
         next(null, req.body.email + '-' + Date.now() + '.' +ext);
        }
        }),
        fileFilter: function(req, file, next){
                    if(!file){
                                    next();
                               }
                               const image = file.mimetype.startsWith('image/');
                               if(image){
                                   next(null, true);
                               }else{
                                   next({message: 'File type not supported'}, false);
                               }
               }
};

module.exports = MulterConfig = multerConfig;
