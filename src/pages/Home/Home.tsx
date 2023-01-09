import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { Layout } from '../../containers/Layout';
import { PlayIcon } from '../../icons';
import { routes } from '../../router';
import { Container } from './styles';
import { createRoom, selectRoom, useCallStore } from '../../store/call';

const Home: React.FC = () => {
  const { t } = useTranslation('home');
  const navigate = useNavigate();
  const createCallRoom = useCallStore(createRoom);
  const callId = useCallStore(selectRoom);

  // todo add error handling
  const crateCall = useCallback(async () => {
    createCallRoom(() => {
      console.log('oks');
    });
  }, [createCallRoom]);

  const startCall = useCallback(() => {
    if (callId?.id) {
      console.log('navigate to existing call');
      navigate(routes.RootRoutes.Call.replace(':id', callId.id));
    }
  }, [callId, navigate]);

  useEffect(() => {
    startCall();
  }, [startCall]);

  return (
    <Layout>
      <Container>
        <Button
          title={t('start_call')}
          LeftIcon={<PlayIcon />}
          big
          onClick={crateCall}
        />
      </Container>
    </Layout>
  );
};

export default Home;
