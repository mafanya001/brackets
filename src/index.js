module.exports = function check(str, bracketsConfig) {
    let result = [];
    let count = str.length;
    let imputStr = str;
    result = bracketsConfig.map(item => (item[0] + item[1]));


    for (let j = 0; j < count; j++){


        for (let i = 0; i < result.length; i++) {
            str = str.replace(result[i], '');
        }
        if (imputStr === str) {
            j = count;
        }
    }
    if (str.length === 0) {
        return true;
    } else return false;
}
