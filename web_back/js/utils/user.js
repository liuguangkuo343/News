// 把基础信息提炼出来，以全局变量的格式保存

var baseUrl = 'http://localhost:8000/'

// 模块
// 把所有的，有关于用户的操作全写在一起
var user = {
    logout: function () {
        $.post(baseUrl + 'admin/logout',function(res){
            if(res.code === 200){
                // 退出, 回到登陆页
                window.location.href = "./login.html"
            } 
        })
    }, 
    login: function(myName, myPassword) {
        console.log(myName,myPassword)
        $.post(baseUrl + 'admin/login',
            {
                user_name: myName, 
                password:myPassword
            },
            function(res){
                console.log(res);
                if(res.code === 200){
                    // window.alert('登陆成功')
                    location.href= './index.html'
                } else {
                    // alert(res.msg)
                    $('#msgInfo').text(res.msg)
                    $('#myModal').modal('show')
                }
            }
        )
    },
    getInfo: function() {
        // $.get(地址，参数，回调)
        $.get(baseUrl + 'admin/getuser',function(res){
            console.log(res);
            if(res.code === 200){
                $("#userImg").prop('src', res.data.user_pic)
                $('#userName').text(res.data.nickname)
            }
            
        })
    }
}