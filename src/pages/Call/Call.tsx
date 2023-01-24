import DailyIframe, { DailyCall } from '@daily-co/daily-js';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';
import { Video } from '../../components/Video';
import { Layout } from '../../containers/Layout';
import {
  useEndCall,
  useHandleErrors,
  useInitCall,
  useParticipant,
} from './hooks';
import {
  Container,
  VideoWrapper,
  NavigationWrapper,
  JoinOthersWrappers,
} from './styles';
import { Spinner, SpinnerWrapper } from '../../components/Spinner';

const CallPage = () => {
  const [callObject, setCallObject] = useState<DailyCall | undefined>(
    DailyIframe.createCallObject(),
  );
  const { t } = useTranslation('call');
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

  if (!participants) {
    return (
      <Layout>
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container>
        {participants && (
          <Video videoTrack={participants.local.videoTrack} localVideo />
        )}
        <VideoWrapper>
          {participants?.remote.length ? (
            participants.remote.map((participant) => (
              <Video
                key={participant.user_id}
                videoTrack={participant.videoTrack}
              />
            ))
          ) : (
            <JoinOthersWrappers>
              <span>{t('actions.not_joined')}</span>
              <span>{window.location.href}</span>
            </JoinOthersWrappers>
          )}
        </VideoWrapper>
        <NavigationWrapper>
          <Button title="end call" onClick={handleLeaveCall} />
        </NavigationWrapper>
      </Container>
    </Layout>
  );
};

export default React.memo(CallPage);
