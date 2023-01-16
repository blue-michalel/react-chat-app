import React, { useCallback, useEffect, useState } from 'react';
import { Container } from './styles';
import { Layout } from '../../containers/Layout';
import { Video } from '../../components/Video';
import { useCallAction, Participants } from './hooks';
import { DailyEventObjectFatalError } from '@daily-co/daily-js';
import Button from '../../components/Button/Button';

const CallPage = () => {
  const [participants, setParticipants] = useState<Participants>();
  const { callObject, startJoiningCall, getParticipants, leaveCall } =
    useCallAction();

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

  const handleParticipants = useCallback(() => {
    const participants = getParticipants()!;
    setParticipants(participants);
  }, [getParticipants]);

  useEffect(() => {
    startJoiningCall();
  }, [startJoiningCall]);

  useEffect(() => {
    callObject?.on('error', handleErrors);
    callObject?.on('participant-counts-updated', handleParticipants);
    callObject?.on('participant-joined', handleParticipants);
    callObject?.on('participant-left', handleParticipants);
  }, [callObject, handleErrors, handleParticipants]);

  return (
    <Layout>
      <Container>
        {participants && <Video videoTrack={participants.local.videoTrack} />}
        {participants &&
          participants.remote.map((participant) => (
            <Video
              key={participant.user_id}
              videoTrack={participant.videoTrack}
            />
          ))}
        <Button title="end call" onClick={leaveCall} />
      </Container>
    </Layout>
  );
};

export default React.memo(CallPage);
