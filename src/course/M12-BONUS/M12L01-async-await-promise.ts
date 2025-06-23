/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${String(id)}`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${String(response.status)}`);
  }

  const user: User = await response.json();
  return user;
}

async function showUser(): Promise<void> {
  try {
    const user = await fetchUser(1);
    console.log(`👤 User: ${user.name}`);
    console.log(`📧 Email: ${user.email}`);
    console.log(`📱 Phone: ${user.phone}`);
    console.log(`🌐 Website: ${user.website}`);
  } catch (error) {
    console.error('❌ Failed to fetch user:', error);
  }
}

showUser();
