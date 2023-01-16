import { State } from './call';

type CommonState = State;

export const selectLoading = (state: CommonState) => state.loading;

export const selectError = (state: CommonState) => state.error;

export const selectRoom = (state: CommonState) => state.data;

export const createRoom = (state: CommonState) => state.createRoom;

export const endCall = (state: CommonState) => state.endCall;

export const checkRoom = (state: CommonState) => state.checkRoom;
