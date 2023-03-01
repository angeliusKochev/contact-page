import axios from "axios";
const url = "https://coda.io/apis/v1";
const doc = "QE6Xt6x-Xk";
const table = "grid-CML1yaM2jb";
const token = "d2c437b6-004e-42cd-b378-309abb1ce324";

const rows = {
  create: async (data) => {
    await axios.post(`${url}/docs/${doc}/tables/${table}/rows`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default { rows };
