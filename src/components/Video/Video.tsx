import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ImageOff from '../../assets/images/camera_off.png';
import { StyledVideo, Props as StyledVideoProps } from './styles';

export interface Props extends StyledVideoProps {
  videoTrack?: MediaStreamTrack;
}

const Video: React.FC<Props> = React.memo(({ videoTrack, ...props }) => {
  const { t } = useTranslation('call');
  const videoEl = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoEl.current && videoTrack) {
      videoEl.current.srcObject = new MediaStream([videoTrack]);
    }
  }, [videoTrack]);

  return (
    <StyledVideo
      ref={videoEl}
      autoPlay
      playsInline
      poster={ImageOff}
      {...props}>
      <span> {t('errors.not_support')}</span>
    </StyledVideo>
  );
});

Video.displayName = 'Video';

export default Video;
