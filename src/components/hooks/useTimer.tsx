import { useState, useEffect } from 'react';

interface UseTimerInterface {
  startTimer: () => void;
  resetTimer: () => void;
  progress: number;
  percentProgress: number;
}

const useTimer = (time: number, callback?: () => void): UseTimerInterface => {
  const [start, setStart] = useState(false);
  const [progress, setProgress] = useState(0);
  const [percentProgress, setPercentProgress] = useState(0);

  useEffect(() => {
    let timer = 0;
    if (start) {
      timer = window.setInterval(() => {
        const unit = 1;
        setProgress(progress + unit);
        setPercentProgress(Math.ceil((100 / time) * (progress + 1)));
        if (progress + unit >= time + unit) {
          setStart(false);
          clearInterval(timer);
          if (callback) {
            callback();
          }
        }
      }, 1000);
    }
    return (): void => {
      clearInterval(timer);
    };
  }, [progress, time, start, callback]);

  const startTimer = (): void => {
    setStart(true);
  };

  const resetTimer = (): void => {
    setProgress(0);
    setPercentProgress(0);
    setStart(false);
  };

  return {
    startTimer,
    resetTimer,
    progress,
    percentProgress,
  };
};

export default useTimer;
