import { RunTimeDriver } from "@mongez/cache";
import Endpoint, { setCurrentEndpoint } from "@mongez/http";
import { apiBaseUrl, apiOS } from "./flags";

const endpoint = new Endpoint({
  putToPost: false,
  baseURL: apiBaseUrl,
  cache: false,
  cacheOptions: {
    driver: new RunTimeDriver(),
    expiresAfter: 60 * 60 * 24 * 7, // 1 week, but because it is a runtime driver, it will be cleared when the page is refreshed
  },
});

const endpointEvents = endpoint.events;

endpointEvents.beforeSending(config => {
  const headers: any = config.headers;
  headers["os"] = apiOS;
});

endpointEvents.onError(response => {
  if (response.data?.data) {
    response.data = response.data.data;
  }
});

setCurrentEndpoint(endpoint);

export default endpoint;
