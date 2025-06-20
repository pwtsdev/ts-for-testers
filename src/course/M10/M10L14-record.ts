/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-console */
import { logger } from '../../utils/logger';

logger('Record<Keys, ValueType> - typ obiektu');
// Typ obiektu z określonym zestawem kluczy i wartości.

const settings: Record<string, boolean> = {
  admin: true,
  editor: false,
  viewer: true,
};

console.log(settings);
console.log(settings.admin);

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30';

const headers: Record<string, string> = {
  Authorization: `Bearer ${token}`,
  Host: 'api.example.com',
  'Content-Type': 'application/json',
  'User-Agent': 'PostmanRuntime/7.36.1',
};

console.log(headers);
