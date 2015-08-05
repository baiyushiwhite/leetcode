/**
 * Created by daisy on 2015/2/6.
 *
 */
function maxProfit1(prices) {
    var maxFromIToN = -1;
    var maxProfit = -1;
    for (var i = prices.length - 1; i >= 0; i--) {
        maxFromIToN = prices[i] > maxFromIToN ? prices[i] : maxFromIToN;
        var profit = maxFromIToN - prices[i];
        maxProfit = profit > maxProfit ? profit : maxProfit;
    }
    return maxProfit;
}

console.log(maxProfit1([1,3,3,4,1,2]));

function maxProfit2(prices) {
    var maxProfit = 0;
    for (var i = 0, len = prices.length - 1; i < len; i++) {
        var profit = prices[i + 1] - prices[i];
        if (profit > 0) {
            maxProfit += profit;
        }
    }
    return maxProfit;
}

console.log(maxProfit2([1]));

function maxProfit3(prices) {
    var maxProfitFrom0ToI = [];
    var maxProfitFromIToN = [];
    //[i…n]天的最大交易额
    var maxFromIToN = prices[prices.length - 1];
    maxProfitFromIToN[prices.length - 1] = 0;
    for (var i = prices.length - 2; i >= 0; i--) {
        maxFromIToN = prices[i] > maxFromIToN ? prices[i] : maxFromIToN;
        var profit1 = maxFromIToN - prices[i];
        maxProfitFromIToN[i] = profit1 > maxProfitFromIToN[i + 1] ? profit1 : maxProfitFromIToN[i + 1];
    }
    //[0…i]天的最大交易额
    var minFrom0ToJ = prices[0];
    maxProfitFrom0ToI[0] = 0;
    for (var j = 1, len = prices.length; j < len; j++) {
        minFrom0ToJ = prices[j] < minFrom0ToJ ? prices[j] : minFrom0ToJ;
        var profit2 = prices[j] - minFrom0ToJ;
        maxProfitFrom0ToI[j] = profit2 > maxProfitFrom0ToI[j - 1] ? profit2 : maxProfitFrom0ToI[j - 1];
    }
    //寻找最大交易额
    var maxProfit = 0;
    for (var l = 1; l < prices.length - 1; l++) {
        var p = maxProfitFrom0ToI[l] + maxProfitFromIToN[l];
        if (p > maxProfit) {
            maxProfit = p;
        }
    }
    if (maxProfitFromIToN[0] > maxProfit) {
        maxProfit = maxProfitFromIToN[0];
    }
    return maxProfit;
}
console.log(maxProfit3([1, 5, 2, 6, 3, 9, 4]));