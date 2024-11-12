import React from "react";
import { useParams } from "react-router-dom";

const PreviewArticle: React.FC = () => {
  const params = useParams();
  return <div className="text-center">Preview Article {params.id}</div>;
};

export default PreviewArticle;
