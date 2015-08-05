/**
 * Created by daisy on 2015/2/13.
 * 递归，回溯
 */

var visited = [];
function exist(board, word){
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (travel(board, i, j, 0, word)) {
                return true;
            }
        }
    }
    return false;
}

function travel(board, i, j, currentIndex, word){
    //全部匹配结束
    if (currentIndex === word.length) {
        return true;
    }
    var offset = i * board[i].length + j;
    //该格子没访问过且该格子和当前字符相同
    if (board[i][j] === word[currentIndex] && visited.indexOf(offset) === -1) {
        //标记该格子为访问过
        visited.push(offset);
        //上
        if (i > 0 &&  travel(board, i - 1, j, currentIndex + 1, word)) {
            return true;
        }
        //下
        if (i < board.length - 1 && travel(board, i + 1, j, currentIndex + 1, word)) {
            return true;
        }
        //左
        if (j > 0 && travel(board, i, j - 1, currentIndex + 1, word)) {
            return true;
        }
        //右
        if (j < board[i].length - 1 && travel(board, i, j + 1, currentIndex + 1, word)) {
            return true;
        }
        //上下左右都不行，该格子不行，出栈
        visited.pop();
    }
    return false;
}
var board = [];
board[0] = ['A', 'B', 'C', 'E'];
board[1] = ['D', 'C', 'D', 'S'];
board[2] = ['F', 'D', 'E', 'E'];
console.log(exist(board, "ABCDCD"));