var comment = {
    add:function(name,content,article_id,callback ){
        $.post(APIURLS.comment_add,{
            'name': name,
            'content' : content,
            'article_id': article_id
        },
        function(res){
            callback(res)
        })
    }
}