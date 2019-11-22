var article = {

    // 作用：获取第curPage页，类型是tpype,状态是state 的数据 
    show: function(curPage,type,state, callback){
        // 根据接口的定义，要请哪一页的数据，就传对应的值给page
        $.get(APIURLS.article_show,
            {
                page: curPage,
                type: type,
                state: state
            },
            function(res){
            callback(res)
        })
    },
    // 删除文章
    del: function(id,callback){
        $.get(APIURLS.article_del,{'id': id},function(res){
            callback(res)
        })
    }
}