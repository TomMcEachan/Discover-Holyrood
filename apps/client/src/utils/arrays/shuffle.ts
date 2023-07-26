export function shuffleArray(array: any[]) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const swap = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = swap;
    }
    return newArray;
}
