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
  checkRoom(
    roomName: string,
    onSuccess?: () => void,
    onError?: () => void,
  ): Promise<void>;
  endCall(onSuccess?: () => void): void;
}

const endCallAction =
  (set: StoreApi<State>['setState']) => (onSuccess?: () => void) => {
    set({ data: undefined });
    onSuccess?.();
  };

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

const checkRoomAction =
  (set: StoreApi<State>['setState']) =>
  (roomName: string, onSuccess?: () => void, onError?: () => void) =>
    createAsyncAction(set)(
      async () => {
        const { data } = await roomApi.getRomDetails(roomName);
        set({ data });
      },
      onSuccess,
      onError,
    );

const store: StateCreator<State, [], [], State> = (set) => ({
  loading: false,
  createRoom: createRoomAction(set),
  endCall: endCallAction(set),
  checkRoom: checkRoomAction(set),
});

const persistStorage = persist<State>((...arg) => store(...arg), {
  name: STORE_NAME,
  storage: createJSONStorage(() => localStorage),
});

export const useStore = create(devtools(persistStorage));
