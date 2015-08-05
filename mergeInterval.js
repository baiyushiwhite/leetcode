/**
 * Created by daisy on 2015/2/5.
 * review array, 参数传递
 */

var Interval = function (s, e) {
    this.start = s;
    this.end = e;
};

function sortByIntervalStart(a, b) {
    return b.start - a.start;
}

function mergeInterval(intervals) {
    if (intervals == null) {
        return null;
    }
    intervals.sort(sortByIntervalStart);
    for (var i = intervals.length - 1; i > 0; i--) {
        if (intervals[i].end >= intervals[i - 1].start) {
            //重合，合并
            intervals[i - 1].start = intervals[i].start;
            intervals.pop();
        }
    }
    return intervals;
}
var list = [new Interval(1, 3), new Interval(2, 6), new Interval(5, 10)];
var newList = mergeInterval(list);
console.log(newList);