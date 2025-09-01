import { useState, useEffect } from 'react';
import DataTable from './DataTable';
import { teacherAPI } from '@/services/api';

const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await teacherAPI.getAll();
                setTeachers(response.data);
            } catch (err) {
                setError('Failed to fetch teachers');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTeachers();
    }, []);

    const teacherColumns = [
        { key: 'id', title: 'ID' },
        { key: 'user_id', title: 'User ID' },
        { key: 'university_name', title: 'University' },
        { key: 'gender', title: 'Gender' },
        { key: 'year_joined', title: 'Year Joined' },
        { key: 'created_at', title: 'Created At' },
    ];

    if (loading) return <div>Loading teachers...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="page-container">
            <DataTable
                columns={teacherColumns}
                data={teachers}
                title="Teacher List"
            />
        </div>
    );
};

export default TeacherList;