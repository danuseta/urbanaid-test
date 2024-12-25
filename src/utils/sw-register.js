const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.warn('Service Worker is not supported in this browser');
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      type: 'module'
    });

    console.log('Service Worker registered successfully:', registration.scope);

    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;

      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          // New content is available and will be used when all tabs for this page are closed.
          console.log('New content is available and will be used when all tabs for this page are closed.');
        }
      });
    });

  } catch (error) {
    console.error('Service Worker registration failed:', error);
  }
};

export default swRegister;