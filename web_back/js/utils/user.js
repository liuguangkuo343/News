var user = {
    logout: function () {
        $.post('http://localhost:8000/admin/logout',function(res){
            if(res.code === 200){
                // 退出, 回到登陆页
                window.location.href = "./login.html"
            } 
        })
    }, 
    login: function(myName, myPassword) {
        console.log(myName,myPassword)
        $.post('http://localhost:8000/admin/login',
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
    }
}