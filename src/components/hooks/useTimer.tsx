import { useState, useEffect } from 'react';

interface UseTimerInterface {
  startTimer: () => void;
  resetTimer: () => void;
  progress: number;
  percentProgress: number;
}

const useTimer = (time = 10, callback?: () => void): UseTimerInterface => {
  const [start, setStart] = useState(false);
  const [progress, setProgress] = useState(0);
  const [percentProgress, setPercentProgress] = useState(0);

  useEffect(() => {
    let timer = 0;
    if (start) {
      timer = window.setInterval(() => {
        const unit = time / 100;
        setProgress(progress + time / 100);
        setPercentProgress(Math.ceil(progress / unit));
        if (progress + time / 100 >= time) {
          setStart(false);
          clearInterval(timer);
          if (callback) {
            callback();
          }
        }
      }, 100);
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
