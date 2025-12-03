import { useEffect, useState } from "react";

export default function InstallButton() {
  const [promptEvent, setPromptEvent] = useState(null);
  const [installedApps, setInstalledApps] = useState({
    customer: false,
    rider: false,
    admin: false
  });

  // Detect which app we are in (only in browser)
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  const isCustomer = currentPath.startsWith("/customer");
  const isRider = currentPath.startsWith("/rider");
  const isAdmin = currentPath.startsWith("/admin");

  // Determine which app is currently active
  const currentApp = isCustomer ? 'customer' : isRider ? 'rider' : isAdmin ? 'admin' : null;
  
  // Show button if current app is not installed yet
  const showButton = currentApp ? !installedApps[currentApp] : false;
  
  // Debug log
  useEffect(() => {
    console.log('Current app:', currentApp, 'Installed status:', installedApps);
    console.log('Show button:', showButton);
  }, [currentApp, installedApps, showButton]);

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return;

    const handler = (e) => {
      e.preventDefault();
      setPromptEvent(e);
    };

    // Only add the event listener if we're in a supported browser
    if ('onbeforeinstallprompt' in window) {
      window.addEventListener("beforeinstallprompt", handler);
    }

    return () => {
      if ('onbeforeinstallprompt' in window) {
        window.removeEventListener("beforeinstallprompt", handler);
      }
    };
  }, []);

  const installApp = async () => {
    if (!promptEvent || !currentApp) {
      console.log('Install prompt not available');
      return;
    }
    
    // Immediately hide the button when clicked to prevent multiple clicks
    setInstalledApps(prev => ({
      ...prev,
      [currentApp]: true
    }));

    try {
      promptEvent.prompt();
      const choiceResult = await promptEvent.userChoice;
      
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
        // Already marked as installed when button was clicked
      } else {
        console.log('User dismissed the install prompt');
      }
    } catch (error) {
      console.error('Error during installation:', error);
    }
  };

  if (!showButton) {
    console.log('Not showing button for', currentApp);
    return null;
  }

  return (
    <button 
      onClick={installApp}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        ':hover': {
          backgroundColor: '#45a049',
          transform: 'translateY(-2px)'
        }
      }}
    >
      Install {currentApp ? `${currentApp.charAt(0).toUpperCase() + currentApp.slice(1)} ` : ''}App
    </button>
  );
}
