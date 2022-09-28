export const generateData = (dataCount : number) => {
    let array : number[] = [];
    for (let i=0; i<dataCount; i++) {
        array.push(Math.random());
    }
    return array;
}

export const generateColours = (dataCount: number) => {
    let array : string[] = [];
    for (let i=0; i<dataCount; i++) {
        array.push("red");
    }
    return array;
}

// TODO: refactor this later, should be able to do it in one line
export const generateLabels = (dataCount: number) => {
    let array : string[] = [];
    for (let i=0; i<dataCount; i++) {
        array.push("");
    }
    return array;
}