import React from "react";
import { useParams } from "react-router-dom";

const PreviewProject: React.FC = () => {
  const params = useParams();
  return (
    <div className="text-center pt-20">Preview Project Id is: {params.id}</div>
  );
};

export default PreviewProject;
