import { DailyCall, DailyParticipant } from '@daily-co/daily-js';
import { useCallback, useEffect, useState } from 'react';

export interface Participants {
  local: DailyParticipant;
  remote: DailyParticipant[];
}

interface Props {
  participants: Participants | undefined;
}

export const useParticipant = (callObject?: DailyCall): Props => {
  const [participants, setParticipants] = useState<Participants>();

  const getParticipants = useCallback(() => {
    if (callObject) {
      const { local, ...remote } = callObject.participants();
      const participants = { local, remote: Object.values(remote) };
      setParticipants(participants);
    }
  }, [callObject]);

  // todo clear event after leave call
  useEffect(() => {
    if (callObject) {
      callObject?.on('participant-joined', getParticipants);
      callObject?.on('participant-updated', getParticipants);
      callObject?.on('participant-left', getParticipants);
    }
  }, [callObject, getParticipants]);

  return { participants };
};
