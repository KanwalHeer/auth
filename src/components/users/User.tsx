'use client';
import { useEffect, useState } from 'react';

// Define a TypeScript interface for a user
interface User {
    _id: string;
    name: string;
    email: string;
    password: string; // Be cautious with displaying passwords
}

// Define the component function
export default function Users() {
    // State to store users with type `User[]` (array of User)
    const [users, setUsers] = useState<User[]>([]);

    // Function to fetch users
    async function getAllUsers() {
        try {
            const res = await fetch('/api/users');
            const data = await res.json();
            console.log('Fetched data:', data);

            // Adjust according to the actual response format
            if (Array.isArray(data.users)) {
                setUsers(data.users);
            } else {
                console.error('Unexpected data format:', data);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    // Fetch users on component mount
    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Users List</h1>
            {users.length > 0 ? (
                <ul className="space-y-4">
                    {users.map((user) => (
                        <li key={user._id} className="bg-white p-4 rounded shadow-md">
                            <p className="text-lg font-semibold">{user.name}</p>
                            <p className="text-sm text-gray-600">Email: {user.email}</p>
                            <p className="text-sm text-gray-600">Password: {user.password}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No users found.</p>
            )}
        </div>
    );
}
