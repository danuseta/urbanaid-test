const swRegister = async () => {
  // Tambahkan delay untuk memastikan app sudah ter-render
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (!('serviceWorker' in navigator)) {
    console.warn('Service Worker is not supported in this browser');
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
    });

    console.log('Service Worker registered successfully:', registration.scope);

    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;

      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          console.log('New content is available and will be used when all tabs for this page are closed.');
        }
      });
    });

  } catch (error) {
    console.error('Service Worker registration failed:', error);
    // Gagalnya SW registration tidak akan menghentikan app
    return null;
  }
};

export default swRegister;