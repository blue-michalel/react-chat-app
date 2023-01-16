import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';
import { Layout } from '../../containers/Layout';
import { PlayIcon } from '../../icons';
import { Container } from './styles';
import { createRoom, useCallStore } from '../../store/call';
import { useStartCall } from './hooks';

const Home: React.FC = () => {
  const { t } = useTranslation('home');
  const createCallRoom = useCallStore(createRoom);
  const { startCall } = useStartCall();

  // todo add error handling
  const crateCall = useCallback(async () => {
    createCallRoom(() => {
      console.log('room created');
      startCall();
    });
  }, [createCallRoom, startCall]);

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
