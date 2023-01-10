import { useCallback, useState } from 'react';
import DailyIframe, { DailyCall, DailyParticipant } from '@daily-co/daily-js';
import { endCall, selectRoom, useCallStore } from '../../../store/call';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../router';

interface Props {
  callObject?: DailyCall;
  startJoiningCall(): void;
  getParticipants(): DailyParticipant | undefined;
  leaveCall(): Promise<void>;
}

export const useCallAction = (): Props => {
  const callId = useCallStore(selectRoom);
  const [callObject, setCallObject] = useState<DailyCall>();
  const navigate = useNavigate();
  const endCallAction = useCallStore(endCall);

  const leaveCall = useCallback(async () => {
    if (callObject) {
      await callObject.destroy();
    }
    setCallObject(undefined);
    endCallAction();
    navigate(routes.RootRoutes.HOME);
  }, [callObject, endCallAction, navigate]);

  const getParticipants = useCallback((): DailyParticipant | undefined => {
    if (callObject) {
      return callObject.participants().local;
    }
  }, [callObject]);

  const startJoiningCall = useCallback(() => {
    if (callId?.url) {
      const newCallObject = DailyIframe.createCallObject();
      setCallObject(newCallObject);
      newCallObject.join({ url: callId?.url });
    }
  }, [callId?.url]);

  return {
    callObject,
    startJoiningCall,
    getParticipants,
    leaveCall,
  };
};
