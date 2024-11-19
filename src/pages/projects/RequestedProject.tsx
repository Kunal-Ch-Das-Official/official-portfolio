import React from "react";
import { useParams } from "react-router-dom";

const RequestedProject: React.FC = () => {
  const params = useParams();
  return <div className="text-white">RequestedProject {params.id} </div>;
};

export default RequestedProject;
