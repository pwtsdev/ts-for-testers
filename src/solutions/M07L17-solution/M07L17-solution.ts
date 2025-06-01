/* eslint-disable no-console */
import { logger } from '../../utils/logger';
import {
  averageAge,
  countNameOccurrences,
  getActiveEmails,
  getMessageForStatus,
  getUniqueNames,
  HttpStatus,
  roleSummary,
  sortNamesNonMutating,
  splitName,
} from './M07L17-functions';

logger('Unique names using Set');
console.log(getUniqueNames());

logger('Count name occurrences using Map');
console.log(countNameOccurrences());

logger('Average age using reduce');
console.log(averageAge());

logger('Active emails only');
console.log(getActiveEmails());

logger('Count roles using Map');
console.log(roleSummary());

logger('Get message for http status');
console.log(getMessageForStatus(HttpStatus.CREATED));

logger('Split string into letters');
console.log(splitName('Bartek'));

logger('Sort names');
console.log(sortNamesNonMutating());
