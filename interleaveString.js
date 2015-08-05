function isInterLeaveString(s1, s2, s3) {
    var len1 = s1.length, len2 = s2.length, len3 = s3.length;
    //M[i][j] = 1代表s1[0-j]和s2[0-i]可以组合成s3[i + j]
    if (len1 + len2 !== len3) {
        return false;
    }
    if (len3 === 0) {
        return true;
    }
    var M = [];
    for (var i = 0; i < len2 + 1; i++) {
        M[i] = [];
        for(var j = 0; j < len1 + 1; j++) {
            M[i][j] = false;
        }
    }

    //初始化M[0][:]，s1前i个字符能否组合成s3[i]
    for (i = 1; i <= len1; i++) {
        if (s1[i - 1] === s3[i - 1]) {
            M[0][i] = true;
        } else {
            break;
        }
    }
    for (j = 1; j <= len2; j++) {
        if (s2[j - 1] === s3[j - 1]) {
            M[j][0] = true;
        } else {
            break;
        }
    }

    for (j = 1; j <= len2; j++) {
        for (i = 1; i <= len1; i++) {
            if (M[j][i - 1] === true && s1[i - 1] === s3[i + j - 1]) {
                M[j][i] = true;
            }

            if (M[j - 1][i] === true && s2[j - 1] === s3[i + j - 1]) {
                M[j][i] = true;
            }
        }
    }
    return M[len2][len1];
}

console.log(isInterLeaveString("aac", "bca", "aacbca"));