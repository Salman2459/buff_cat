'use client'
import { useEffect, useState } from 'react';

const IframeComponent = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    setIframeLoaded(true); // Ensures the iframe is loaded only on the client side
  }, []);

  return (
    <div>
      {iframeLoaded && (
        <iframe
          src="https://your-url-here.com"
          width="600"
          height="400"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default IframeComponent;
