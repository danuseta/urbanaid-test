const swRegister = async () => {
  // Tambahkan delay untuk memastikan app sudah ter-render
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (!('serviceWorker' in navigator)) {
    console.warn('Service Worker is not supported in this browser');
    return;
  }

  try {
    // Cek apakah ada SW yang sudah teregistrasi
    const registrations = await navigator.serviceWorker.getRegistrations();
    
    // Jika tidak ada registrasi, atau registrasi sebelumnya sudah unregister
    if (registrations.length === 0) {
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
    } else {
      // Jika sudah ada SW yang teregistrasi
      console.log('Service Worker already registered');
      
      // Cek apakah perlu update
      registrations.forEach(async (registration) => {
        try {
          await registration.update();
          console.log('Service Worker updated');
        } catch (error) {
          console.error('Failed to update Service Worker:', error);
        }
      });
    }

  } catch (error) {
    console.error('Service Worker registration failed:', error);
    // Coba register ulang jika gagal
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
      });
      console.log('Service Worker re-registered successfully:', registration.scope);
    } catch (retryError) {
      console.error('Service Worker re-registration also failed:', retryError);
      return null;
    }
  }
};

// Tambahkan event listener untuk handled unregistered
navigator.serviceWorker.addEventListener('controllerchange', () => {
  console.log('Service Worker controller changed');
});

export default swRegister;