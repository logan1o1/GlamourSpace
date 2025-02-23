import jwt from "jsonwebtoken";

const generateAndSetTokens = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});

    res.cookie("access_token", token, {
		maxAge: 30 * 24 * 60 * 60 * 1000, 
		httpOnly: false,
		sameSite: "strict", 
        secure: process.env.NODE_ENV !== "development", 
	});
}

export default generateAndSetTokens;