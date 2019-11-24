var article = {
    
    getFiveFocus: function(callback){
        $.get(APIURLS.article_show,
            {
                perpage: 5,
                state: '已发布'
            },
            function(res){
            callback(res)
        })
    },
   
    // 获取文章的详情
    getDetail: function(id, callback){
        $.get(APIURLS.article_show,
            {
                "id": id
            },
            function(res){
                callback(res)
            }
        )
    }
}