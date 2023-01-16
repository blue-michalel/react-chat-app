import { useCallback, useState } from 'react';
import DailyIframe, { DailyCall, DailyParticipant } from '@daily-co/daily-js';
import {
  endCall,
  selectRoom,
  useCallStore,
  checkRoom,
} from '../../../store/call';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '../../../router';

export interface Participants {
  local: DailyParticipant;
  remote: DailyParticipant[];
}

interface Props {
  callObject?: DailyCall;
  startJoiningCall(url?: string): void;
  getParticipants(): Participants | undefined;
  leaveCall(): Promise<void>;
}

export const useCallAction = (): Props => {
  const callId = useCallStore(selectRoom);
  const [callObject, setCallObject] = useState<DailyCall>();
  const navigate = useNavigate();
  const endCallAction = useCallStore(endCall);
  const checkRoomAction = useCallStore(checkRoom);
  const { roomName } = useParams<{ roomName?: string }>();

  const leaveCall = useCallback(async () => {
    if (callObject) {
      await callObject.destroy();
    }
    setCallObject(undefined);
    endCallAction();
    navigate(routes.RootRoutes.HOME);
  }, [callObject, endCallAction, navigate]);

  const getParticipants = useCallback((): Participants | undefined => {
    if (callObject) {
      const { local, ...remote } = callObject.participants();

      return { local, remote: Object.values(remote) };
    }
  }, [callObject]);

  const joinCall = useCallback(() => {
    const newCallObject = DailyIframe.createCallObject();
    setCallObject(newCallObject);
    newCallObject.join({ url: callId!.url });
  }, [callId]);

  const startJoiningCall = useCallback(() => {
    if (callId?.url) {
      joinCall();
    } else if (roomName) {
      checkRoomAction(roomName, () => {
        joinCall();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callId?.url, checkRoomAction, joinCall]);

  return {
    callObject,
    startJoiningCall,
    getParticipants,
    leaveCall,
  };
};
