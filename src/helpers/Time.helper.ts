import { IntervalDuration } from '../entities/TimeService';
import intervalToDuration from 'date-fns/intervalToDuration';
import { format as fsFormat } from 'date-fns';

/**
 *
 * @note Para más información visitar la página de date fns https://date-fns.org/docs/Getting-Started
 */

const intervalDuration = (start: Date, end: Date): IntervalDuration => {
  return intervalToDuration({ start, end });
};
const format = (
  date: Date,
  structure: string = 'yyyy/MM/dd hh:mm:ss'
): string => {
  return fsFormat(date, structure);
};

export default { format, intervalDuration };
