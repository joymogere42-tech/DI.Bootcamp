let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};

//  1. displayGroceries
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

displayGroceries();


//  2. cloneGroceries
const cloneGroceries = () => {

    // copy primitive value (string)
    let user = client;

    console.log("Original user:", user);

    // change client
    client = "Betty";

    console.log("After change client:", client);
    console.log("User still:", user);

    /*
     Will user change?
    NO 
    Because strings are PASS BY VALUE
    (a copy is made)
    */


    // reference copy
    let shopping = groceries;

    // change totalPrice
    shopping.totalPrice = "35$";

    console.log("Updated shopping:", shopping.totalPrice);
    console.log("Original groceries:", groceries.totalPrice);

    /*
     Will groceries change?
    YES 
    Because objects are PASS BY REFERENCE
    (both variables point to same object)
    */

    // change nested object
    shopping.other.paid = false;

    console.log("shopping paid:", shopping.other.paid);
    console.log("groceries paid:", groceries.other.paid);

    /*
     Will this change both?
    YES 
    Nested objects are also shared (same reference)
    */
};

cloneGroceries();