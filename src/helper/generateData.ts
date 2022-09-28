export const generateData = (dataCount : number) => {
    let array : number[] = [];
    for (let i=0; i<dataCount; i++) {
        array.push(Math.random())
    }
    return array;
}

export const generateColours = (dataCount: number) => {
    let array : string[] = [];
    for (let i=0; i<dataCount; i++) {
        array.push("rgba(255, 99, 132, 1)")
    }
    return array;
}