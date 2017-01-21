
export function addAge(age:number){
    return (targetClass)=>{
        return class {
            name = new targetClass().name;
            age = age;
        }
    }
}

