let obj = {
    "name": "John",
    "age": 30,
    "city": "New York",
    arr: [
        {
            "name": "John",
            "age": 30,
            "city": "New York",
        }
    ]
}

let obj1 = {
    "name": "John",
    "age": 30,
    "city": "New York",
    arr: [
        {
            "name": "John",
            "age": 28,
            "city": "New York",
        }
    ]
}

const uniqueObj = (arr) => {
    return arr.reduce((acc, current) => {
        // 检查acc数组中是否已经存在具有相同id的对象
        let exists = acc.some(item.id === current.id)
        // 如果不存在，则将当前对象添加到acc中
        if (!exists) acc.push(current)
        return acc
    }, [])
}
