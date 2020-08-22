import axios from "axios";
import type { AxiosInstance } from "axios";
import { DefaultApi } from "../openapi/api";
import { Configuration } from "../openapi/configuration";

const baseURL = "http://127.0.0.1/";
const axiosClient: AxiosInstance = axios.create({ baseURL });

const configuration: Configuration = new Configuration({
  basePath: baseURL,
});

const apiClient: DefaultApi = new DefaultApi(
  configuration,
  configuration.basePath,
  axiosClient
);

export { apiClient };
