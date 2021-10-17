export interface TimeService {
  format(date: Date, structure?: string): string;
  intervalDuration(start: Date, end: Date): IntervalDuration;
}

export interface IntervalDuration {
  years?: number | undefined;
  months?: number | undefined;
  days?: number | undefined;
  hours?: number | undefined;
  minutes?: number | undefined;
  seconds?: number | undefined;
}
