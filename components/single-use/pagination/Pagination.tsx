import React from "react";

interface PaginationProps {
  blogPerPage: number;
  totalBlog: number;
  isCurrentPage: number;
  pagination: (event: any, num: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({
  blogPerPage,
  isCurrentPage,
  totalBlog,
  pagination,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalBlog / blogPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <section className="mt-12 flex justify-center">
      {pageNumber.map((page, index) => (
        <ul
          key={index}
          className="inline-flex justify-center items-center mx-3"
        >
          <li
            onClick={(e) => pagination(e, page)}
            id={`${index + 1}`}
            className="flex flex-row items-center justify-center shrink-0 bg-orange-500  border-2 border-orange-500 cursor-pointer text-base font-bold text-white w-10 h-10 rounded-lg"
          >
            {isCurrentPage === page ? (
              <span className="text-black">{page}</span>
            ) : (
              <span className="text-white">{page}</span>
            )}
          </li>
        </ul>
      ))}
    </section>
  );
};

export default Pagination;
