'use client';

import { signInDataSave } from '@/redux/features/auth';
import { AppDispatch, RootState } from '@/redux/store';
import { useSession } from 'next-auth/react';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from './loading';

interface SessionCheckComponentProps {
    children?: React.ReactNode;
    requiredScopes: string[];
}

export default function SessionCheckComponent(props: SessionCheckComponentProps) {

    const { children, requiredScopes } = props;

    const dispatch = useDispatch<AppDispatch>();

    const session = useSession();
    const allowedScopes = useSelector((state: RootState) => state.authReducer.allowedScopes);

    useEffect(() => {
        if (session.status === 'authenticated' && !allowedScopes) {
            dispatch(signInDataSave({ allowedScopes: session.data.scopes }));
        }
    }, [ session, allowedScopes, dispatch ]);

    switch (session.status) {
        case 'authenticated':
            break;
        case 'loading':
            return <LoadingScreen />;
        case 'unauthenticated':
            notFound();
    }

    return (
        <>
            { 
                requiredScopes.every(scope => session?.data?.scopes?.includes(scope)) 
                    ? children
                    : notFound()
            }
        </>
    );
}
