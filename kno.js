// all the api realted to authentication are in the auth.routes.js
// all the middleware are in the app.js
// also server is created in app.js
// kind of data i have to store in schema stored in models
// jo api mene route folder k andr likhi hoi hongi uske logic jaa rhe honge






// tHERE ARE TWO TYPES OF hashing
// 1) is there is same input you goona get the same hash
// 2)It does not permit to ki wo wapas s hashing s normal convert krle

// Password hashing is a critical 
// security practice that transforms plaintext 
// passwords into irreversible, fixed-length 
// strings using algorithms like bcrypt or Argon2. 
// It protects user credentials by ensuring that even if a database is stolen, hackers cannot easily read or use the original passwords. Proper hashing, especially with salt, prevents dictionary attacks and unauthorized access


// if attacker get the hashing on the data base attack then he can't reverse to the normal string thats the benift f hashing


// query = {
// $or:[
//  {username:a}
//  {email:udefined}
// ]
// 
// 
// }














// 1pahele app.js m jao api k  reference routes k do
// then  2) api k naam likho routes m or abhi logic nhi likha
// 3)schema banao models m jaake wha s export kro
// then 4)controllers m jao import kro schema c