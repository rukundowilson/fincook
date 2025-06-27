import db from "../config/db.js";

export default async function saveQuote(quoteData) {
    const {
        name,
        email,
        phone,
        message,
        consultationType,
    } = quoteData;

    const query = `
        INSERT INTO consultations
        (name, email, phone, message, consultation_type)
        VALUES (?, ?, ?, ?, ?)
    `;

    try {
        const [result] = await db.execute(query, [
            name,
            email,
            phone,
            message,
            consultationType
        ]);

        console.log("✅ Quote saved:", quoteData);
        return result;
    } catch (err) {
        console.error("❌ Failed to save quote");
        console.error("🧨 ========================");
        console.error(err);
        throw new Error("Database insert failed");
    }
}
