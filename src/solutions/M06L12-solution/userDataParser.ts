export function parseName(rawName?: unknown): string {
  rawName ??= 'Anonymous';
  return typeof rawName === 'string' ? rawName.trim() : 'Anonymous';
}

export function parseAge(rawAge: unknown): number | null {
  let age: number | null;

  if (typeof rawAge === 'string' || typeof rawAge === 'number') {
    const parsedAge = Number(rawAge);
    age = isNaN(parsedAge) ? null : parsedAge;
  } else {
    age = null;
  }

  return age;
}

export function parseScore(rawScore: unknown): number {
  let score: number;

  if (typeof rawScore === 'number') {
    score = isNaN(rawScore) ? 0 : rawScore;
  } else if (typeof rawScore === 'string') {
    const parsedScore = Number(rawScore);
    score = isNaN(parsedScore) ? 0 : parsedScore;
  } else {
    score = 0;
  }

  return score;
}

export function parseEmail(rawEmail: unknown): string {
  rawEmail ??= 'no-email@example.com';
  return String(rawEmail);
}
