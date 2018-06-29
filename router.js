module.exports = function (app){
    //first parameter: the route we're trying to handle, the second argument will be called right after
    //req = data about the request, res = represents the response that is going to be formed up and sent back to whoever made the request
    //next = mostly for handling
    app.get('/', function(req, res, next){
        res.send(['waterbottle','phone','paper'])
    })
}