'use client';

import { WhatsappLogo } from '@phosphor-icons/react';
import SocialMediaButton from './SocialMediaButton';

export default function WhatsAppWidget() {
  return (
    <SocialMediaButton
      href="https://wa.me/551633711212"
      tooltipText="Fale conosco no WhatsApp"
      icon={WhatsappLogo}
      backgroundColor="#25D366"
      hoverColor="#128C7E"
    />
  );
}
