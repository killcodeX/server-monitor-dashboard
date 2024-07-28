export interface ServerMonitorProps {
  heading?: string;
  subheading?: string;
}

export interface ServerHeaderProps {
  heading?: string;
  subheading?: string;
  daysInterval: number;
  setDaysInterval: (event: number) => void;
  startDate: Date;
  setStartDate: (event: Date) => void;
  endDate: Date;
  setEndDate: (event: Date) => void;
}

export interface ServerGridProps {
  schedule: number[][];
  setSchedule: (data: number[][]) => void;
  days: any;
}

export interface ServerFooterProps {
  startDate: Date;
  setStartDate: (event: Date) => void;
  setEndDate: (event: Date) => void;
  daysInterval: number;
}
