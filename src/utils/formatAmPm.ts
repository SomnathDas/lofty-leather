const formatAmPm = (date: Date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ap = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  let minutesStr = minutes.toString().padStart(2, "0");
  let mergeTime = hours + ":" + minutesStr + " " + ap;
  return mergeTime;
};
export default formatAmPm;
