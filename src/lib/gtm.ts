export type ConsentStatus = 'granted' | 'denied';

const consentDefaults = {
  ad_personalization: 'denied' as ConsentStatus,
  ad_storage: 'denied' as ConsentStatus,
  ad_user_data: 'denied' as ConsentStatus,
  analytics_storage: 'denied' as ConsentStatus,
};

type ConsentSettings = typeof consentDefaults;
type DataLayerEntry = Record<string, unknown> | IArguments;

declare global {
  interface Window {
    dataLayer: DataLayerEntry[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const pushDataLayer = (event: Record<string, unknown>) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
};

export const updateConsent = (consent: Partial<ConsentSettings>) => {
  if (typeof window === 'undefined') {
    return;
  }

  const updatedConsent = {
    ...consentDefaults,
    ...consent,
  };

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', updatedConsent);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'consent_update',
    consent: updatedConsent,
  });
};

export const grantAllConsent = () =>
  updateConsent({
    ad_personalization: 'granted',
    ad_storage: 'granted',
    ad_user_data: 'granted',
    analytics_storage: 'granted',
  });

export const revokeAllConsent = () => updateConsent(consentDefaults);

export const getDefaultConsent = (): ConsentSettings => ({ ...consentDefaults });

export {}; // ensures this file is treated as a module
