import axios from "axios";

class HttpService {
  static _instance = Object.seal(axios.create({}));

  constructor() {
    HttpService._instance.defaults.baseURL = "https://api.example.com";

    HttpService._instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          alert("Unauthorized access. You will be redirected.");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
        return Promise.reject(error);
      }
    );
  }

  public get = HttpService._instance.get;
  public post = HttpService._instance.post;
  public put = HttpService._instance.put;
  public patch = HttpService._instance.patch;
  public delete = HttpService._instance.delete;

  public setGlobalHeader(headerName: string, headerValue: string) {
    HttpService._instance.defaults.headers.common[headerName] = headerValue;
  }

  public setBearerToken(token: string) {
    this.setGlobalHeader("authorization", `Bearer ${token}`);
  }

  public clearBearerToken() {
    this.setGlobalHeader("authorization", "");
  }

  public get instance() {
    return HttpService._instance;
  }
}

export const httpService = new HttpService();
