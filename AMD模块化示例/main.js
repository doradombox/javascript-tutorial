requirejs.config({
    //模块标识名与模块路径映射
    paths: {
        //不需要加文件后缀
        "jquery": "../node_modules/jquery/dist/jquery",
        "random": "modules/random",
        "percent": "modules/percent",
        "math1": "modules/math1",
        "underscore":"../node_modules/underscore/underscore"
    }
})



requirejs(['percent','math1','jquery','underscore'], function(percent,math1,$,_) {
    console.log(_.first([5, 4, 3, 2, 1]));
    console.log(math1.add(1,3));
    //绑定事件
    $('button').click(function(){
        let result = percent(80);
        //判断
        if(result){
            console.log("我们中奖啦, 自由啦!! 远方啦!! 诗在哪儿呢!!")
        }else{
            console.log("再接再厉, 继续努力, 埋头苦干, 也要抬头看看!!");
        }
    });
})