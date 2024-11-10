import React from "react";
import { useParams } from "react-router-dom";

const UpdateProject: React.FC = () => {
  const params = useParams();
  return (
    <div className="text-center pt-20">Update Project Id is: {params.id}</div>
  );
};

export default UpdateProject;
