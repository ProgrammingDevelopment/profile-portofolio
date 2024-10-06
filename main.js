let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Show your custom install button
    const installButton = document.getElementById('installButton');
    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
        installButton.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    });
});
