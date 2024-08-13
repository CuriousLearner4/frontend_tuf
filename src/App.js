import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [bannerData, setBannerData] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);

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

  const toggleBanner = async() => {
    if(timeLeft===0)
    await fetchBannerData();
    setIsVisible(!isVisible);
  };

  const toggleHandler = debounce(toggleBanner,300);

  
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((timeLeft) => {
        if(timeLeft-1===0) setIsVisible(false);
        return timeLeft - 1;}), 1000);
      return () => clearInterval(timer);}
    else if(timeLeft<=0) {
      setIsVisible(false);
    }
  }, [timeLeft]);

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
