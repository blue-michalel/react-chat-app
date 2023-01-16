import { DailyCall, DailyEventObjectFatalError } from '@daily-co/daily-js';
import { useCallback, useEffect } from 'react';
import { useEndCall } from './useEndCall';

export const useHandleErrors = (callObject?: DailyCall) => {
  const { leaveCall } = useEndCall(callObject);

  const handleErrors = useCallback(
    (error?: DailyEventObjectFatalError) => {
      if (error?.error?.type === 'exp-room') {
        console.log('rom expires');
        leaveCall();
      }
      console.log('unsupported error', error);
    },
    [leaveCall],
  );

  // todo clear event after leave call
  useEffect(() => {
    callObject?.on('error', handleErrors);
  }, [callObject, handleErrors]);
};
