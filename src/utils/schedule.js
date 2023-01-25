export const getSchedule = (currentOrder) => {
  const schedule = {};

  for (const key in currentOrder.conference) {
    if (key.includes("_start") || key.includes("_end")) {
      schedule[key] = currentOrder.conference[key]?.substring(0, 5);
    }
  }

  function formatDays(days) {
    let result = "";
    let weekdays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    let weekdaysEng = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];
    for (let i = 0; i < weekdaysEng.length; i++) {
      let day = weekdaysEng[i];
      let end = days[day + "_end"];
      let start = days[day + "_start"];
      if (!end || !start) {
        result += weekdays[i] + " выходной; ";
      } else {
        result += weekdays[i] + " " + start + "-" + end + "; ";
      }
    }
    return result;
  }

  const result = formatDays(schedule).split(";");

  result.pop();

  return result;
};
