import db from "../config/db.js"

const newUser  = async function(dataSet){
    console. log("service is called", dataSet);
    try{
        const statement = `
        INSERT INTO Users("firstName,lastName,email,phone, newsletter
        VALUES(?, ?, ?, ?, ?)
        `
    }
    catch(error){
        console.log(error)
    }

}

export default newUser;