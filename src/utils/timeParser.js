import moment from "moment";

export const getNowDifferences = (targetTime) => {
  if (moment(new Date()).diff(moment(targetTime), "minutes") < 60) {
    const time = moment(new Date()).diff(moment(targetTime), "minutes");
    return `${time} minute${time > 1 ? "s" : ""} ago`;
  }
  if (moment(new Date()).diff(moment(targetTime), "hours") < 24) {
    const time = moment(new Date()).diff(moment(targetTime), "hours");
    return `${time} hour${time > 1 ? "s" : ""} ago`;
  }
  if (moment(new Date()).diff(moment(targetTime), "days") < 30) {
    const time = moment(new Date()).diff(moment(targetTime), "days");
    return `${time} day${time > 1 ? "s" : ""} ago`;
  }
  if (moment(new Date()).diff(moment(targetTime), "months") < 30) {
    const time = moment(new Date()).diff(moment(targetTime), "months");
    return `${time} month${time > 1 ? "s" : ""} ago`;
  }

  const time = moment(new Date()).diff(moment(targetTime), "years");
  return `${time} year${time > 1 ? "s" : ""} ago`;
};
