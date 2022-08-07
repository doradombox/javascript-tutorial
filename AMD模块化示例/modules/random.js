define(function () {
    //关于抽奖 中奖的概率实现
    var random =  function (m, n) {
        return Math.ceil(Math.random() * (n - m + 1)) + m - 1;
    }
    //暴露数据
    return random;
})