import axios from "axios";

export default {
  facts: {
    getFact: () => axios.get(`http://localhost:3100/fact`)
  }
};
