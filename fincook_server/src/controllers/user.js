import newUser from "../services/user.js";
export default async function register(req,res){
    const inputs = req.body;
    const {firstName, lastName, email, phone, newsletter} = inputs;
    if (!firstName || !lastName || !email || !phone || !newsletter) {
        return res.status(400).json({
            message : "❌ All fields are required"
        });
    }
    await newUser(inputs);
    console.log("data received", )
    return res.status(200).json({
        message : "data received",
        data : req.body
    })
}