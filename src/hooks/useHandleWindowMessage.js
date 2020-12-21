import { useEffect } from 'react';
import { useIsClient } from './useIsClient';

const WindowMessageSources = {
  UDB: 'UDB',
};

const WindowMessageTypes = {
  URL_CHANGED: 'URL_CHANGED',
  JOB_ADDED: 'JOB_ADDED',
};

const useHandleWindowMessage = (eventsMap = {}) => {
  const isClient = useIsClient();

  const internalHandler = (event) => {
    const { source, type, ...data } = event.data;
    if (source !== WindowMessageSources.UDB) return;
    eventsMap?.[type]?.(data); // call handler when it exists
  };

  useEffect(() => {
    if (!isClient) return;
    window.addEventListener('message', internalHandler);
    return () => window.removeEventListener('message', internalHandler);
  }, [isClient]);
};

export { useHandleWindowMessage, WindowMessageTypes };