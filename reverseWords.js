/**
 * Created by daisy on 2015/2/11.
 */
function reverseWords(s) {
    var stack = [], word = "", len = s.length, result = "";
    for (var i = 0; i < len; i++) {
        if (s[i] !== " ") {
            word += s[i];
        } else if (word !== ""){
            stack.push(word);
            word = "";
        }
    }
    if (word !== "") {
        stack.push(word);
    }
    for (i = stack.length; i > 1; i--) {
        result += stack.pop() + " ";
    }
    result += stack.pop();
    return result;
}

function reverseWordsByAPI(s) {
    s = s.replace(/(^\s*)|(\s*$)/g, "");
    var wordList = s.split(/\s+/);
    wordList.reverse();
    var result = wordList.join(" ");
    return result;
}

console.log(reverseWords("the sky is blue"));
console.log(reverseWordsByAPI("   the    sky   is blue     "));