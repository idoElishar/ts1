function modulo(arr: number[]): number {
    let sum: number = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i]
        }
    }
    return sum
}
console.log(modulo([1, 2, 4, 6, 2, 1]))

// 2

const rectangle: { len: number, height: number } = {
    len: 5,
    height: 20
}
console.log(area(rectangle))
function area(rec: { len: number, height: number }): number {
    return rec.len * rec.height
}
// 3
console.log(polindrom("adda"))
function polindrom(str: string): boolean {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}
// 4
let arr: string[] = ["da", "adsd", "das", "rew"]
console.log(bigLetters(arr))
function bigLetters(arr: string[]): string[] {
    const newArr = arr.map(sweetItem => {
        return sweetItem.charAt(0).toUpperCase() + sweetItem.slice(1);
    })
    return newArr
}
// 5
function uniqueNumbers(arr: number[]): number[] {
    const newArr: number[] = [];
    for (const num of arr) {
        if (!newArr.includes(num)) {
            newArr.push(num);
        }
    }
    return newArr;
}

const Arr: number[] = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6];
console.log(uniqueNumbers(Arr))
// 6
const fullName: { first: string, last: string } = {
    first: "John",
    last: "Doe"
}
console.log(oneLetter(fullName))
function oneLetter(fullName: { first: string, last: string }): { firstC: string, lastC: string } {
    const newO: { firstC: string, lastC: string } = {
        firstC: fullName.first.charAt(0),
        lastC: fullName.last.charAt(0)
    }
    return newO
}
// 7
interface Person {
    name: string;
    age: number;
}
const people: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 }
];
function avg(people: Person[]): number {
    let sum: number = 0
    for (let i = 0; i < people.length; i++) {
        sum += people[i].age
    }
    return (sum / people.length)
}
console.log(avg(people))
// 8
console.log(maxAndMin())
function maxAndMin(arr2: number[] = [2, 32, 43, 6]): object {
    let min = Math.min.apply(Math, arr2)
    let max = Math.max.apply(Math, arr2)
    const m: { maximum: number, minimum: number } = {
        maximum: max,
        minimum: min
    }
    return m
}
// 9
let arr4: any[] = ["dsfsd", 2, "das", true, 5]
reverse(arr4)
function reverse(arr: any[]): void {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
    }
}


