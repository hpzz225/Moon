import * as React from 'react';

export interface IAppProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: IAppProps) {
    return <div>{children}</div>;
}
