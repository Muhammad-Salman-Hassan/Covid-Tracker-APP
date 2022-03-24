import axios from "axios";

let url = "https://covid19.mathdro.id/api/";

export const fetchData = async () => {
  try {
    const {data:{confirmed,deaths,recovered,lastUpdate}} = await axios.get(url);

    return {confirmed,deaths,recovered,lastUpdate};
  } catch (error) {
    return error;
  }
};
