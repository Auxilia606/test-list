const throttle = (callback: () => void, limit = 500) => {
  let waiting = false;

  return () => {
    if (waiting) return;

    callback();

    waiting = true;

    setTimeout(() => {
      waiting = false;
    }, limit);
  };
};

export default throttle;
