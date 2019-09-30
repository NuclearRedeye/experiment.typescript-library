export const Add = (a: number, b: number) => {
    return a + b;
};

export const Subtract = (a : number, b : number) => {
    return a - b;
};

export const Multiply = (a : number, b : number) => {
    return a * b;
};

export const Divide = (a : number, b : number) => {
    if (b === 0) b = 1;
    return a / b;
};