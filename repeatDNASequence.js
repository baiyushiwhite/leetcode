/**
 * Created by daisy on 2015/2/10.
 *
 * map set 浏览器兼容性
 */
function findRepeatDnaSequences(s) {
    if (s == null) {
        return null;
    }
    var len = s.length;
    if (len < 10) {
        return [];
    }
    var map = new Map();
    map.set('A', 0);
    map.set('C', 1);
    map.set('G', 2);
    map.set('T', 3);

    var subDna = 0;
    for (var i = 0; i < 10; i++) {
        subDna += map.get(s[i]) * Math.pow(4, 9 - i);
    }
    var unique = [];
    var repeat = new Set();
    unique.push(subDna);
    //前一个10letter序列的首字符
    var preFirst = map.get(s[0]);

    for (i = 1; i < len - 9; i++) {
        subDna -= preFirst << 18;
        subDna = subDna << 2;
        subDna += map.get(s[i + 9]);
        preFirst = map.get(s[i]);
        if (unique.indexOf(subDna) === -1) {
            unique.push(subDna);
        } else {
            repeat.add(s.slice(i, i + 10));
        }
    }
    return repeat;
}
console.log(findRepeatDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));