import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [bannerData, setBannerData] = useState({});
  const [timeLeft, setTimeLeft] = useState(null);

  const fetchBannerData = async () => {
    const response = await axios.get('https://backend-tuf-u112.onrender.com/banner');
    const data = response.data;
    setBannerData(data);
    setTimeLeft(data.timer);
  };

  const debounce = (func,delay)=>{
    let timeoutID;
    return function(...args){
      clearTimeout(timeoutID);
      timeoutID = setTimeout(()=>func(...args),delay);
    }
  }

  const toggleBanner = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      fetchBannerData();
    }
  };

  const toggleHandler = debounce(toggleBanner,300);

  
  useEffect(() => {
    if (isVisible && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft <= 0) {
      setIsVisible(false);
    }
  }, [isVisible, timeLeft]);

  return (
    <div>
      <Header isVisible={isVisible} toggleHandler={toggleHandler} />
      {isVisible && timeLeft > 0 && (
        <Banner
          description={bannerData.description}
          link={bannerData.link}
          timeLeft={timeLeft}
        />
      )}
    </div>
  );
}

export default App;
