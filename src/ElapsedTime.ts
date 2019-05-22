export type ElapsedTimeType = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/**
 * Create a ElapsedTime from an amount of seconds
 * @param time
 * @returns {ElapsedTimeType}
 */
function create(time: number): ElapsedTimeType {
  if (time <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  let remainingSeconds = time;

  let days = Math.floor(remainingSeconds / (3600 * 24));
  remainingSeconds -= days * (3600 * 24);

  let hours = Math.floor(remainingSeconds / 3600);
  remainingSeconds -= hours * 3600;

  let minutes = Math.floor(remainingSeconds / 60);
  remainingSeconds -= minutes * 60;

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: remainingSeconds
  };
}

export default {
  create
};
