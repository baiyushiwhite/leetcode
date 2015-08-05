/**
 * Created by daisy on 2015/2/12.
 *
 */
//错啦。。
//function calculateMinimumHP (dungeon) {
//    var minHealthVal = [], healthVal = [];
//    for (var i = 0; i < dungeon.length; i++) {
//        minHealthVal[i] = [];
//        healthVal[i] = [];
//    }
//    minHealthVal[0][0] = healthVal[0][0] = dungeon[0][0];
//    var curHealth;
//    for (i = 1; i < dungeon[0].length; i++) {
//        curHealth = healthVal[0][i - 1] + dungeon[0][i];
//        minHealthVal[0][i] = Math.min(curHealth, minHealthVal[0][i - 1]);
//        healthVal[0][i] = healthVal[0][i - 1] + dungeon[0][i];
//    }
//    for (i = 1; i < dungeon.length; i++) {
//        for (var j = 0; j < dungeon[i].length; j++) {
//            var topHealth = healthVal[i - 1][j] + dungeon[i][j];
//            var fromTopMinHealthVal = Math.min(topHealth, minHealthVal[i - 1][j]);
//            if (j === 0) {
//                minHealthVal[i][j] = fromTopMinHealthVal;
//                healthVal[i][j] = topHealth;
//                continue;
//            }
//            var leftHealth = healthVal[i][j - 1] + dungeon[i][j];
//            var fromLeftMinHealthVal = Math.min(leftHealth, minHealthVal[i][j - 1]);
//            if (fromLeftMinHealthVal > fromTopMinHealthVal) {
//                minHealthVal[i][j] = fromLeftMinHealthVal;
//                healthVal[i][j] = leftHealth;
//            } else {
//                minHealthVal[i][j] = fromTopMinHealthVal;
//                healthVal[i][j] = topHealth;
//            }
//        }
//    }
//    return 1 - minHealthVal[i - 1][j - 1];
//}

function calculateMinimumHP (dungeon) {
    var minHealthValToP = [];
    for (var i = 0; i < dungeon.length; i++) {
        minHealthValToP[i] = [];
    }
    var row = dungeon.length, col = dungeon[0].length;
    minHealthValToP[row - 1][col - 1] = Math.max(1, 1 - dungeon[row - 1][col - 1]);
    //计算最后一列
    for (i = row - 2; i >= 0; i--) {
        minHealthValToP[i][col - 1] = Math.max(1, minHealthValToP[i + 1][col - 1] - dungeon[i][col - 1]);
    }
    //计算最后一行
    for (var j = col - 2; j >= 0; j--) {
        minHealthValToP[row - 1][j] = Math.max(1, minHealthValToP[row - 1][j + 1] - dungeon[row - 1][j]);
    }

    //根据右边和下面的格子，计算当前格子
    for (i = row - 2; i >= 0; i--) {
        for (j = col -2; j >= 0; j--) {
            var fromRight =  Math.max(1, minHealthValToP[i][j + 1] - dungeon[i][j]);
            var fromBottom = Math.max(1, minHealthValToP[i + 1][j] - dungeon[i][j]);
            minHealthValToP[i][j] = Math.min(fromRight, fromBottom);
        }
    }
    return minHealthValToP[0][0];
}
var dungeon = [];
dungeon[0] = [1,-3,3];
dungeon[1] = [0,-2,0];
dungeon[2] = [-3,-3,-3];
//    dungeon[0] = [2];
//    dungeon[1] = [1];
console.log(calculateMinimumHP(dungeon));