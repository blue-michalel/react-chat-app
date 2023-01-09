import { AxiosInstance } from 'axios';
import axiosInstance from '../config';
import { Endpoints } from '../endpoints';
import { RoomCreated } from '../models/room';

class RoomApi {
  constructor(private http: AxiosInstance) {}

  createRoom = () => {
    const exp = Math.round(Date.now() / 1000) + 60 * 30;
    const body = {
      properties: {
        exp,
      },
    };

    return this.http.post<RoomCreated>(Endpoints.ROOMS, body);
  };
}

export const roomApi = new RoomApi(axiosInstance);
