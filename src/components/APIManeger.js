import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",

  headers: { Authorization: "Bearer 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" },
  responseType: "blob",
});

export const query = async (prompt) => {
  try {
    const res = await instance.post("", { inputs: prompt });
    console.log(res.data);
    return res?.data;
  } catch (err) {
    console.log(err);
  }
};
