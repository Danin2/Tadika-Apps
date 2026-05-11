import React, { useEffect, useState } from 'react';
import { IonPage, IonContent, useIonRouter } from '@ionic/react';
import { syncOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import './Loading.css';

const Loading: React.FC = () => {
  const router = useIonRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          sessionStorage.setItem('Tadika_loaded', 'true');
          router.push('/profiles', 'forward', 'replace');
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <IonPage>
      <IonContent className="loading-content-v2">
        <div className="loading-screen-v3">
          {/* Animated Background Elements */}
          <div className="floating-elements">
            {['🍎', '🦒', '🎮', '🔢', '🎨', '🦁', '🍌', '🚀'].map((emoji, i) => (
              <div key={i} className={`float-emoji float-${i + 1}`}>{emoji}</div>
            ))}
          </div>

          {/* Background Blobs */}
          <div className="blob-bg-1"></div>
          <div className="blob-bg-2"></div>

          <div className="loading-container-v3">
            {/* Logo Section */}
            <div className="logo-wrapper-v3">
              <div className="logo-glow"></div>
              <img src="/assets/images/logo.png" alt="Tadika Logo" className="loading-logo-v3" />
            </div>

            {/* Title & Progress */}
            <div className="loading-footer-v3">
              <h1 className="loading-title-v3">Tadika</h1>
              <div className="progress-outer-v3">
                <div className="progress-inner-v3" style={{ width: `${progress}%` }}>
                  <div className="progress-shimmer"></div>
                </div>
              </div>
              <p className="loading-status-v3">
                <span className="sync-icon">🔄</span> Menyiapkan Petualangan... {Math.round(progress)}%
              </p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Loading;
