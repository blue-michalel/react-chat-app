import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';
import Button from '../../components/Button/Button';
import { Layout } from '../../containers/Layout';
import { PlayIcon } from '../../icons';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../router';

const Home: React.FC = () => {
  const { t } = useTranslation('home');
  const navigate = useNavigate();

  const startCall = useCallback(() => {
    navigate(routes.RootRoutes.Call.replace(':id', 'test'));
  }, [navigate]);

  return (
    <Layout>
      <Container>
        <Button
          title={t('start_call')}
          LeftIcon={<PlayIcon />}
          big
          onClick={startCall}
        />
      </Container>
    </Layout>
  );
};

export default Home;
