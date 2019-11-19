// 把基础信息提炼出来，以全局变量的格式保存

var baseUrl = 'http://localhost:8000/'

// 模块
// 把所有的，有关于用户的操作全写在一起
var user = {
    logout: function (callback) {
        $.post(baseUrl + 'admin/logout',function(res){
            callback(res)
        })
    }, 
    login: function(myName, myPassword, callback) {
        console.log(myName,myPassword)
        $.post(baseUrl + 'admin/login',
            {
                user_name: myName, 
                password:myPassword
            },
            function(res){
                callback(res)
            }
        )
    },
    getInfo: function(callback) {
        // $.get(地址，参数，回调)
        $.get(baseUrl + 'admin/getuser',function(res){
            callback(res)
        })
    }
}