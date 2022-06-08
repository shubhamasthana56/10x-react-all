export function getUserData(user) {
    const user1 = {
        firstName: "User1",
        age: 23
    };
    const user2 = {
        firstName: "User2",
        age: 23
    };
    const user3 = {
        firstName: "User2",
        age: 23
    };
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            switch(user) {
                case "user1":
                    resolve(user1);
                    break;
                case "user2":
                    resolve(user2);
                    break;
                case "user3":
                    resolve(user3);
                    break;
                default:
                    reject("User Not Found");
            }
            //resolve(userData);
            //reject("Failed to fetch Data")
        },10)
    })
   

}