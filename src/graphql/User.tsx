import React from 'react';
import { useQuery, gql } from '@apollo/client';

const QUERY_ALL_USERS = gql`
    query {
        users {
            id
            username
            email

        }
    }
`;

export function UserInfo() {
    const { data, loading, error } = useQuery(
        QUERY_ALL_USERS, {
        pollInterval: 500
    }
    );

    if (loading) return <p>Loading ...</p>
    if (error) return `Error! ${error.message}`
    return data.users.map((user: { id: number; username: string; email: string; }) => (
        <div key={user.id}>
            <p>
                User - {user.id}: {user.username} {user.email}
            </p>
        </div>
    ))
}