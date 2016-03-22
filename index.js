module.exports = function(publicPath){
    return function(req, res, next){
        res.locals.libs = function(libs) {
            return libs.map(function(lib) {
                return '<script src=\"' + publicPath + lib + '\"></script>'
            }).join('\n')
        }
        next();
    }
}
