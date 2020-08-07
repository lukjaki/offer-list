/* eslint-disable no-undef */
import React from 'react';
import { Helmet } from 'react-helmet';

interface PageProps {
    title: string,
    rest?: any
}

const Page: React.FC<PageProps> = ({ title, children, ...rest }) => {

    return (
        <div { ...rest }>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </div>
    );
};

export default Page;
