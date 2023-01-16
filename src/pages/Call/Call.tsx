import DailyIframe, { DailyCall } from '@daily-co/daily-js';
import React, { useCallback, useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import { Video } from '../../components/Video';
import { Layout } from '../../containers/Layout';
import {
  useEndCall,
  useHandleErrors,
  useInitCall,
  useParticipant,
} from './hooks';
import { Container } from './styles';

const CallPage = () => {
  const [callObject, setCallObject] = useState<DailyCall | undefined>(
    DailyIframe.createCallObject(),
  );
  const { startJoiningCall } = useInitCall(callObject);
  const { participants } = useParticipant(callObject);
  const { leaveCall } = useEndCall(callObject);
  useHandleErrors(callObject);

  const handleLeaveCall = useCallback(() => {
    leaveCall(() => {
      setCallObject(undefined);
    });
  }, [leaveCall]);

  useEffect(() => {
    startJoiningCall();
  }, [startJoiningCall]);

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
        <Button title="end call" onClick={handleLeaveCall} />
      </Container>
    </Layout>
  );
};

export default React.memo(CallPage);
