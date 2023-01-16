import { DailyCall } from '@daily-co/daily-js';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../router';
import { endCall, useCallStore } from '../../../store/call';

interface Props {
  leaveCall(onSuccess?: () => void): Promise<void>;
}

export const useEndCall = (callObject?: DailyCall): Props => {
  const navigate = useNavigate();
  const endCallAction = useCallStore(endCall);

  const leaveCall = useCallback(
    async (onSuccess?: () => void) => {
      if (callObject) {
        await callObject.destroy();
      }
      onSuccess?.();
      endCallAction();
      navigate(routes.RootRoutes.HOME);
    },
    [callObject, endCallAction, navigate],
  );

  return { leaveCall };
};
