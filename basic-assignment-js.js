
//task 1: anaToVori............

function anaToVori(ana) {
    let vori = ana / 16;
    return vori;
}




// Task 2:pandaCost

function pandaCost(singara, somocha, jilapi) {

    let singaraCost = singara * 7;
    let somochaCost = somocha * 10;
    let jilapiCost = jilapi * 15;

    let totalCost = singaraCost + somochaCost + jilapiCost;

    return totalCost;

}


// console.log(pandaCost(1,1,1))




// Task 33: picnicBudget

function picnicBudget(person) {
    if (person <= 0) {
        return "you have entered a wrong number";
    }
    else {
        if (person > 200) {
            let budget = ((person - 200) * 3000) + 900000;
            return budget;
        }
        else if (person > 100) {

            let budget = ((person - 100) * 4000) + 500000;
            return budget;
        }
        else {
            let budget = person * 5000;
            return budget;
        }
    }
}




// Task 4:

function oddFriend(friendsName) {
    let arr = typeof friendsName;
    if (arr === "object") {
        let oddNames = [];
        for (let i = 0; friendsName.length > i; i++) {

            if (friendsName[i].length % 2 != 0) {
                oddNames.push(friendsName[i]);
            }

        }
        return oddNames[0];
    }
    else {
        return "Its not an Array";
    }

}

let a=["asd","wekjhd","edrfa","eoirfhack"]
console.log(oddFriend(a))