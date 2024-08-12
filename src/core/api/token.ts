import axios from "axios";

// Function to get the auth token
export const getAuthToken = async () => {
  try {
    const response = await axios.post(
      "https://project-auth.auth.ap-south-1.amazoncognito.com/oauth2/token",
      {
        // Include any required body parameters here
        clientId: "7nqglon5qr711jud651fegldig",
        clientSecret: "b217jll42p9peviq69n1vou2b0it37busj8vgikk6bh3bo4pbn8",
      }
    );

    if (response.status === 200) {
      return response.data.token; // Adjust according to the actual response structure
    } else {
      throw new Error("Failed to get auth token");
    }
  } catch (error) {
    console.error("Error getting auth token:", error);
    throw error;
  }
};
