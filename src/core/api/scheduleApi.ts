import axios from "axios";
import { getAuthToken } from "./token";

// Function to call the main API with the auth token

export const scheduleApi = async () => {
  try {
    const token = await getAuthToken();

    const response = await axios.get("https://example.com/main-api", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to fetch data from main API");
    }
  } catch (error) {
    console.error("Error calling main API:", error);
    throw error;
  }
};
