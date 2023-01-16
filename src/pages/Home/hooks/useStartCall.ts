import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectRoom, useCallStore } from '../../../store/call';
import { routes } from '../../../router';

interface Props {
  startCall(): void;
}

export const useStartCall = (): Props => {
  const callId = useCallStore(selectRoom);
  const navigate = useNavigate();

  const startCall = useCallback(() => {
    if (callId) {
      const now = new Date(callId.created_at).getTime();
      const exp = now + callId.config.exp;

      if (exp > now) {
        console.info('navigate to existing call');
        navigate(routes.RootRoutes.Call.replace(':roomName', callId.name));
      }
    }
  }, [callId, navigate]);

  return { startCall };
};
