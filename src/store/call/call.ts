import { AxiosError } from 'axios';
import create, { StateCreator, StoreApi } from 'zustand';
import { createAsyncAction } from '../middlewares';
import { roomApi } from '../../services/api/services';
import { RoomCreated } from '../../services/api/models/room';
import { persist, createJSONStorage, devtools } from 'zustand/middleware';

export const STORE_NAME = `@store/calls/call`;

export interface State {
  loading: boolean;
  error?: AxiosError;
  data?: RoomCreated;
  createRoom(onSuccess?: () => void, onError?: () => void): Promise<void>;
}

const createRoomAction =
  (set: StoreApi<State>['setState']) =>
  (onSuccess?: () => void, onError?: () => void) =>
    createAsyncAction(set)(
      async () => {
        const { data } = await roomApi.createRoom();
        set({ data });
      },
      onSuccess,
      onError,
    );

const store: StateCreator<State, [], [], State> = (set) => ({
  loading: false,
  createRoom: createRoomAction(set),
});

const persistStorage = persist<State>((...arg) => store(...arg), {
  name: STORE_NAME,
  storage: createJSONStorage(() => localStorage),
});

export const useStore = create(devtools(persistStorage));
