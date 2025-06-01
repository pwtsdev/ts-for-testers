/* eslint-disable no-console */

import { logger } from '../../utils/logger';

logger('Enum - struktura w TypeScript, która służy do definiowania zbioru nazwanych stałych.');

enum WeekDay {
  MON = 'Monday',
  TUE = 'Tuesday',
  WED = 'Wednesday',
  THU = 'Thursday',
  FRI = 'Friday',
  SAT = 'Saturday',
  SUN = 'Sunday',
}

console.log(WeekDay.SAT);

function isWeekend(day: WeekDay): boolean {
  return day === WeekDay.SAT || day === WeekDay.SUN;
}

console.log(isWeekend(WeekDay.SAT));

logger('Alternatywa dla enum:');
type WeekDayType = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

function isWeekendType(day: WeekDayType): boolean {
  return day === 'sunday' || day === 'saturday';
}
console.log(isWeekendType('saturday'));
