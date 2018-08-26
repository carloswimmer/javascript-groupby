groupBy(array, prop, sum) {
    let grouped = []
    array.forEach(element => {
        if (!grouped.find(item => item[prop] === element[prop])) {
            let obj = {[prop]: element[prop]}
            grouped.push(obj)
        }
    })
    grouped.forEach(element => {
        let values = []
        values = array.filter(item => item[prop] === element[prop])
        values.reduce((prev, item) => element[sum] = prev + item[sum], 0)
    })
    return grouped
}
