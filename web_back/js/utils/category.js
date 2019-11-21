
var category = {
    show : function( callback ){
        // alert('获取数据')
        $.get(APIURLS.category_show,function(res){
            callback(res)
        })
    }
}