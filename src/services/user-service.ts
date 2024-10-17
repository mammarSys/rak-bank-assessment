import { httpService } from "./http-service";
import { AxiosResponse } from "axios";

interface BodySchema {
  answers: string[];
}

export const submitResponse = (body: BodySchema): Promise<AxiosResponse> => {
  return httpService.post(`/submitResponse`, body);
};
