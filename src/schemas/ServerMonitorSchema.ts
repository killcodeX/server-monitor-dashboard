import { Dayjs } from "dayjs";

export interface ServerMonitorProps {
  heading?: string;
  subheading?: string;
  startDate: Dayjs;
  setStartDate: (event: Dayjs) => void;
  endDate: Dayjs;
  setEndDate: (event: Dayjs) => void;
  autopark?: any;
  setAutopark?: (event: any) => void;
}

export interface ServerHeaderProps {
  heading?: string;
  subheading?: string;
  daysInterval: number;
  setDaysInterval: (event: number) => void;
  startDate: Dayjs;
  setStartDate: (event: Dayjs) => void;
  endDate: Dayjs;
  setEndDate: (event: Dayjs) => void;
}

export interface ServerGridProps {
  schedule: number[];
  setSchedule: (data: number[][]) => void;
  days: any;
}

export interface ServerFooterProps {
  startDate: Date;
  setStartDate: (event: Date) => void;
  setEndDate: (event: Date) => void;
  daysInterval: number;
}

export interface ScheduleItem {
  time: number;
  status: string;
}

export interface ScheduleProps {
  currDate: Date;
  schedule: ScheduleItem[];
}
