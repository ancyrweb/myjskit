import twoDigits from "./twoDigits";

class Duration {
  hours: number;
  minutes: number;
  seconds: number;

  constructor(time: number) {
    this.setTime(time);
  }

  format(format: string) {
    return format
      .replace("%H", this.getHours())
      .replace("%h", this.hours.toString())
      .replace("%M", this.getMinutes())
      .replace("%m", this.minutes.toString())
      .replace("%S", this.getSeconds())
      .replace("%s", this.seconds.toString());
  }

  setTime(time: number) {
    this.hours = Math.floor(time / 3600);
    this.minutes = Math.floor((time - this.hours * 3600) / 60);
    this.seconds = time - this.hours * 3600 - this.minutes * 60;
  }
  getHours() {
    return twoDigits(this.hours);
  }
  getMinutes() {
    return twoDigits(this.minutes);
  }
  getSeconds() {
    return twoDigits(this.seconds);
  }
}

export default Duration;
