import axios from "axios";

const api = axios.create({
  baseURL: "http://18.140.254.213:8080/api/"
});

async function login() {
  const data = {
      "username": "nusakarya.teknologi@gmail.com",
      "password": "ThingsboardCrustea2023"
  };
  return await api.post("auth/login", data);
}

export const getThingsboard = async () => {
    let EBII = []
    const token = await login();
    const config = {
      headers : {
        "Content-Type": "application/json",
        "X-Authorization": `Bearer ${token.data.token}`
      }
    }
    
    const data = await api.get (`http://18.140.254.213:8080/api/plugins/telemetry/DEVICE/19b8ac30-36f3-11ee-ba5b-75958463e181/values/timeseries`, config)
    EBII = ({
        DO: data.data.DO,
        pH: data.data.pH,
        Temperature: data.data.temperature,
        Salinity: data.data.sal,
        IP: data.data.IP,
        Time: data.data.Time,
    });
    return {EBII};
  // const data = await axios.get ('http://18.140.254.213:8080/api/v1/TEST_TOKEN/telemtry', config)
  
}