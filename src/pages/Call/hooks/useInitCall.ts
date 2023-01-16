import { DailyCall } from '@daily-co/daily-js';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { checkRoom, selectRoom, useCallStore } from '../../../store/call';

interface Props {
  startJoiningCall(): void;
}

export const useInitCall = (callObject?: DailyCall): Props => {
  const callId = useCallStore(selectRoom);
  const checkRoomAction = useCallStore(checkRoom);
  const { roomName } = useParams<{ roomName?: string }>();

  const joinCall = useCallback(() => {
    if (callObject) {
      callObject.join({ url: callId!.url });
    }
  }, [callId, callObject]);

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

  return { startJoiningCall };
};
