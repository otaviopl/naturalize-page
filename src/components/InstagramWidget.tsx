'use client';

import { InstagramLogo } from '@phosphor-icons/react';
import SocialMediaButton from './SocialMediaButton';

export default function InstagramWidget() {
  return (
    <SocialMediaButton
      href="https://www.instagram.com/naturalizeodontologia/"
      tooltipText="Siga-nos no Instagram"
      icon={InstagramLogo}
      backgroundColor="#E4405F"
      hoverColor="#D32F4D"
      position={1}
    />
  );
}
