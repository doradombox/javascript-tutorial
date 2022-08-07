define(["random"], function (rand) {
    //封装一个概率函数
    function percent(num) {
        //获取 1-100 的随机值
        let n = rand(1, 100);
        //判断
        if (n <= num) {
            return true;
        } else {
            return false;
        }
    }
    //暴露数据
    return percent;
})