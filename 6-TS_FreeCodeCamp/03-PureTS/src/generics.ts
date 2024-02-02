const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

// Generic function
// function identityThree<Type>(val: Type): Type {
//     return val;
// }

// Most programmers use T as a type parameter
function identityThree<T>(val: T): T {
    return val;
}
identityThree(11);
console.log(identityThree<string>("Hello"));

// Benefits of generics instead of any:
// 1. Type safety**
// 2. Better code reusability
// 3. Better code maintainability
// 4. Better code readability
// 5. Better code documentation
// 6. Better code performance
// 7. Better code debugging
// 8. Better code refactoring
// 9. Better code testing
// 10. Better code quality

interface Bootle {
    brand: string,
    type: number,
}

console.log(identityThree<Bootle>({ brand: "Coca-Cola", type: 1 }));