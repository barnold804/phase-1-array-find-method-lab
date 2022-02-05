function superbowlWin(record) {
    const result = record.find(object => object.result === "W"); // find object with result: "W"
    if (result) {
        return result.year // select year from object
    } else return undefined
    
}
