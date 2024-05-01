import axios from "axios";

const api = axios.create({
  baseURL:"https://raw.githubusercontent.com/Dan0Silva/cafealeatorio/main/public/_posts"
})

export default api

