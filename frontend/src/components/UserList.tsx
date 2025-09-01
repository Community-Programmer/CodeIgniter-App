import { userAPI } from '@/services/api';
import { useState, useEffect } from 'react';
import DataTable from './DataTable';


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await userAPI.getAll();
                setUsers(response.data);
            } catch (err) {
                setError('Failed to fetch users');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const userColumns = [
        { key: 'id', title: 'ID' },
        { key: 'email', title: 'Email' },
        { key: 'first_name', title: 'First Name' },
        { key: 'last_name', title: 'Last Name' },
        { key: 'created_at', title: 'Created At' },
    ];

    if (loading) return <div>Loading users...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="page-container">
            <DataTable
                columns={userColumns}
                data={users}
                title="User List"
            />
        </div>
    );
};

export default UserList;