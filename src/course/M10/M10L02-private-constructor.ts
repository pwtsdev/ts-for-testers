/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable no-console */

class DBConnection {
  private static instance: DBConnection;

  private constructor() {
    console.log('🔌 Establishing new database connection...');
  }

  static getInstance(): DBConnection {
    if (!DBConnection.instance) {
      DBConnection.instance = new DBConnection();
    }
    return DBConnection.instance;
  }

  query(sql: string): void {
    console.log(`📄 Executing SQL: ${sql}`);
  }
}

const db1 = DBConnection.getInstance();
db1.query('SELECT * FROM users');

const db2 = DBConnection.getInstance();
console.log(db1 === db2);
