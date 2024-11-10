import React from "react";
import { useParams } from "react-router-dom";

const DeleteProject: React.FC = () => {
  const params = useParams();
  return (
    <div className="text-center pt-20">Delete Project Id is: {params.id}</div>
  );
};

export default DeleteProject;
