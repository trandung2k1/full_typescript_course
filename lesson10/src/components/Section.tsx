import React from 'react';
const Section: React.FunctionComponent<{ children: React.ReactNode; title?: string }> = ({
    children,
    title,
}): React.ReactElement => {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    );
};

Section.defaultProps = {
    title: 'My Subheading',
};
export default Section;
