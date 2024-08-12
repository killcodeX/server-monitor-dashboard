import axios from "axios";
import { notification } from "antd";

// Function to call the main API with the auth token

export const newScheduleApi = async (body: any) => {
  //console.log(JSON.stringify(body));
  try {
    const response = await axios.post(
      "https://e9wud3hxdc.execute-api.ap-south-1.amazonaws.com/rest-api-stage/schedule",
      body, // Remove the "data" key as axios.post already expects data as the second parameter
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      if (response.data.errorMessage) {
        notification.error({
          message: response.data.errorType,
          description: response.data.errorMessage,
        });
      } else {
        notification.success({
          message: "Schedule Success!",
          description: response.data.body,
        });
      }
      console.log(response);
    } else {
      throw new Error("Failed to fetch data from main API");
    }
  } catch (error) {
    console.error("Error calling main API:", error);
    notification.error({
      message: "API Call Failed",
      description:
        "Failed to fetch data from main API. Please try again later.",
    });
    throw error;
  }
};
