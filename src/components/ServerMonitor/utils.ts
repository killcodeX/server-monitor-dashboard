export const handleDateChange = ({
  dates,
  setStartDate,
  setEndDate,
  daysInterval,
}: any) => {
  if (dates) {
    const startDate = new Date(dates);
    startDate.setHours(0, 0, 0, 0); // Set to start of day
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + daysInterval - 1);
    setStartDate(startDate);
    setEndDate(endDate);
  }
};

export const toggleCell = ({ sch, day, schedule, setSchedule }: any) => {
  let resSch = schedule.map((item: any) => {
    if (item.currDate === day.currDate) {
      let res = item.schedule.map((tim: any) => {
        if (tim.time === sch.time) {
          return {
            ...tim,
            status: "stopped",
          };
        } else {
          return tim;
        }
      });
      return {
        ...item,
        schedule: res,
      };
    } else {
      return item;
    }
  });
  setSchedule(resSch);
};

export const changeInterval = ({
  startDate,
  setStartDate,
  setEndDate,
  interval,
  setDaysInterval,
}: any) => {
  const startDt = new Date(startDate);
  startDt.setHours(0, 0, 0, 0); // Set to start of day
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + interval);
  setEndDate(endDate);
  setDaysInterval(interval);
};

export const prevIntervalUpdate = ({
  startDate,
  setStartDate,
  setEndDate,
  daysInterval,
}: any) => {
  const startDt = new Date(startDate);
  startDt.setHours(0, 0, 0, 0); // Set to start of day
  startDt.setDate(startDt.getDate() - daysInterval);

  const endDate = new Date(startDt);
  endDate.setDate(endDate.getDate() - daysInterval);

  setStartDate(startDt);
  setEndDate(endDate);
};

export const nxtIntervalUpdate = ({
  startDate,
  setStartDate,
  setEndDate,
  daysInterval,
}: any) => {
  const startDt = new Date(startDate);
  startDt.setHours(0, 0, 0, 0); // Set to start of day
  startDt.setDate(startDt.getDate() + daysInterval);

  const endDate = new Date(startDt);
  endDate.setDate(endDate.getDate() + daysInterval);

  setStartDate(startDt);
  setEndDate(endDate);
};
