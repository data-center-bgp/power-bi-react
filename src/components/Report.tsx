import React from "react";

interface ReportProps {
  src: string;
  title: string;
}

const Report: React.FC<ReportProps> = ({ src, title }) => {
  const iframe = `<iframe title=${title} src=${src} width="1280" height="720" allowFullScreen="true"></iframe>`;

  return (
    <div className="flex items-center justify-center">
      <div
        className="iframe-container w-full h-full border-0"
        dangerouslySetInnerHTML={{ __html: iframe }}
      ></div>
    </div>
  );
};

export default Report;
