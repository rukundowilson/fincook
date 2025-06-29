import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

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
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI,
} = process.env;

export function redirectToGoogleOAuth(req, res) {
  const redirectUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${GOOGLE_CLIENT_ID}` +
    `&redirect_uri=${encodeURIComponent(GOOGLE_REDIRECT_URI)}` +
    `&response_type=code` +
    `&scope=openid%20email%20profile`;

  res.redirect(redirectUrl);
}

export async function googleOAuthCallback(req, res) {
  const code = req.query.code;

  if (!code) {
    return res.status(400).send("Missing authorization code");
  }

  try {
    const tokenResponse = await axios.post(
      "https://oauth2.googleapis.com/token",
      null,
      {
        params: {
          code,
          client_id: GOOGLE_CLIENT_ID,
          client_secret: GOOGLE_CLIENT_SECRET,
          redirect_uri: GOOGLE_REDIRECT_URI,
          grant_type: "authorization_code",
        },
      }
    );

    const { access_token } = tokenResponse.data;

    // Fetch user info
    const userInfoResponse = await axios.get(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const user = userInfoResponse.data;

    // call service

    res.json(user);
  } catch (error) {
    console.error("Google OAuth callback error:", error.response?.data || error.message);
    res.status(500).send("Authentication failed");
  }
}
