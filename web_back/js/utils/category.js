var baseUrl = 'http://localhost:8000/'

var category = {
    show : function( callback ){
        // alert('获取数据')
        $.get(baseUrl + 'admin/category_search',function(res){
            callback(res)
        })
    }
}