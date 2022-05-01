// code your solution here
function superbowlWin (record) {
    function isWin (element) {
        if (element.result === 'W') {
            return true;
        }
    }
    
    const result = record.find(isWin);
    if (result === undefined) {
        return result;
    } else {
        return result.year;
    }
}

