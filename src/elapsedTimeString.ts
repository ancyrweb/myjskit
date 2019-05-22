import ElapsedTime from "./ElapsedTime";
import twoDigits from "./twoDigits";
import timestampToDate from "./timestampToDate";
import timestamp from "./timestamp";

/**
 * Return the minified version of an elapsed time date
 * @param when
 * @param from
 * @returns {string}
 */
function elapsedTimeMin(when: number, from: number = timestamp()) {
  let time = ElapsedTime.create(from - when);

  if (time.days > 3) {
    let date = timestampToDate(when);
    return twoDigits(date.getDate()) + "/" + twoDigits(date.getMonth() + 1);
  } else if (time.days > 0) {
    return time.days + "j";
  } else if (time.hours > 0) {
    return time.hours + "h";
  } else if (time.minutes > 0) {
    return time.minutes + "mn";
  } else {
    return time.seconds + "s";
  }
}

export type FormatType = "normal" | "minified";

/**
 * Calculate the elapsed
 * @param when
 * @param format
 * @param from
 * @returns {string}
 */
function elapsedTimeString(
  when: number,
  format: FormatType,
  from: number = timestamp()
) {
  if (format === "minified") {
    return elapsedTimeMin(when, from);
  }

  let time = ElapsedTime.create(from - when);
  let prefix = "Il y a ";

  if (time.days > 3) {
    return "le " + elapsedTimeMin(when, from);
  } else {
    return prefix + elapsedTimeMin(when, from);
  }
}

export default elapsedTimeString;
