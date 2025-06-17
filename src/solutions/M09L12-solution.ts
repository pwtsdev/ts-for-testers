/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/prefer-readonly */
class BugReport {
  public readonly id: number;
  public readonly createdAt: Date;

  private title: string;
  private description: string;
  private _status: 'open' | 'in progress' | 'closed';

  constructor(id: number, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this._status = 'open';
    this.createdAt = new Date();
  }

  get status(): 'open' | 'in progress' | 'closed' {
    return this._status;
  }

  set status(newStatus: 'open' | 'in progress' | 'closed') {
    const validStatuses = ['open', 'in progress', 'closed'];
    if (!validStatuses.includes(newStatus)) {
      throw new Error('Invalid status');
    }
    this._status = newStatus;
  }

  summarize(): string {
    return `#${String(this.id)} – [${this._status}] ${this.title}`;
  }
}

// Bonus class
class BugTracker {
  private reports: BugReport[] = [];

  addReport(report: BugReport): void {
    this.reports.push(report);
  }

  getOpenReports(): BugReport[] {
    return this.reports.filter((r) => r.status === 'open');
  }

  closeReportById(id: number): void {
    const report = this.reports.find((r) => r.id === id);
    if (report) {
      report.status = 'closed';
    } else {
      throw new Error('Report not found');
    }
  }
}

// Example usage
const bug1 = new BugReport(123, 'User cannot log in', 'Login form returns a 500 error');
console.log(bug1.summarize());

const bug2 = new BugReport(
  222,
  'Incorrect http status',
  'After creating a user with POST, API should return 201 CREATED not 404 NOT FOUND',
);
console.log(bug2.summarize());

const tracker = new BugTracker();
tracker.addReport(bug1);
tracker.addReport(bug2);
console.log(tracker.getOpenReports());

tracker.closeReportById(123);
console.log(bug1.summarize());
