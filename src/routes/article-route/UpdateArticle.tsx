import React from "react";
import { useParams } from "react-router-dom";

const UpdateArticle: React.FC = () => {
  const params = useParams();
  return <div className="text-center">Update Article {params.id}</div>;
};

export default UpdateArticle;
