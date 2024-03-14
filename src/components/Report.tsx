import React from "react";

interface ReportProps {
    src: string;
    title: string;
}

const Report: React.FC<ReportProps> = ({ src, title }) => {
    const iframe = `<iframe title=${title} src=${src} width="100%" height="100%" allowFullScreen="true"></iframe>`;

    return (
        <div className="iframe-container" dangerouslySetInnerHTML={{ __html: iframe }}>
        </div>
    );
};

export default Report;