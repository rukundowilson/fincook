
export default async function requestQuote(req,res){
    const {
        name,
        email, 
        phone, 
        message, 
        consultationType,
    } = req.body;

    if(!name && !email && !phone && !message && !consultationType){
        return res.status(400).json({
            message : "❌ service declined make sure you filled all fields correctly"
        })
    }
    return res.status(200).json({
        message : "quote was recieved successfully",
        notice : "please check your email within 24hrs"
    })

}