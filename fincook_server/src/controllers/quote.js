import saveQuote from "../services/quote.js";

export default async function requestQuote(req, res) {
    const {
        name,
        email,
        phone,
        message,
        consultationType,
    } = req.body;

    if (!name || !email || !phone || !message || !consultationType) {
        return res.status(400).json({
            message: "❌ Service declined. Please fill in all required fields."
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            message: "❌ Invalid email format"
        });
    }

    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
        return res.status(400).json({
            message: "❌ Invalid phone number"
        });
    }

    const quoteData = {
        name,
        email,
        phone,
        message,
        consultationType
    };

    try {
        await saveQuote(quoteData);
        return res.status(200).json({
            message: "✅ Quote was received successfully",
            notice: "📧 Please check your email within 24hrs"
        });
    } catch (error) {
        return res.status(500).json({
            message: "❌ Something went wrong while saving your request. Please try again later."
        });
    }
}
