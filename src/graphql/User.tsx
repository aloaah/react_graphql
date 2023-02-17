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
    const { data, loading } = useQuery(
        QUERY_ALL_USERS, {
        pollInterval: 500
    }
    );

    if (loading) return <p>Loading ...</p>

    return data.users.map(({ id, username, email }) => (
        <div key={id}>
            <p>
                User - {id}: {username} {email}
            </p>
        </div>
    ))
}