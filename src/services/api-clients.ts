import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7c68a448a22b45af9f9139a7589bd512",
  },
});
