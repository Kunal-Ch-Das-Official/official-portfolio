import React from "react";
import { useParams } from "react-router-dom";

const DeleteArticle: React.FC = () => {
  const params = useParams();
  return <div className="text-center">Delete Article {params.id}</div>;
};

export default DeleteArticle;
