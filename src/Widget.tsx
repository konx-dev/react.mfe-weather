import React, { useEffect } from 'react';
import './styles/thin.css';

const Widget = () => {

  useEffect(() => {
    const isShared = (window as any).shellReact === React;
    
    if (isShared) {
      console.log('Module: Success - Weather is using the Shell\'s React instance.');
    } else {
      console.warn('Module: Alert - Weather has its own independent React instance');
    }
  }, []);

  return (
    <div className="mfe-weather">
      <h4 className="text-white bg-primary">☀️ Weather Module</h4>
      <p>Location: London, UK</p>
      <p>Temp: 18°C</p>
    </div>
  );
};

export default Widget;