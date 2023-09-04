import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination(props: PaginationProps) {
  const { currentPage, totalPages } = props;

  const arrayValues = Array.from(Array(totalPages).keys());
  const pages = arrayValues.map((value) => {
    return { value: value + 1, text: value + 1 };
  });

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        <li
          className={`page-item ${
            currentPage - 1 === 0 ? 'disabled' : ''
          }`}
        >
          <Link
            className="page-link page-link-prev"
            href={`/products/?page=${currentPage - 1}`}
          >
            <span aria-hidden="true">
              <i className="icon-long-arrow-left"></i>
            </span>
            Prev
          </Link>
        </li>
        {pages.map((page, index) => (
          <li
            className={`page-item ${
              currentPage === page.value ? 'active' : ''
            }`}
          >
            <Link
              className="page-link"
              href={`/products/?page=${page.value}`}
              key={index}
            >
              {page.text}
            </Link>
          </li>
        ))}
        <li className="page-item-total">de {totalPages}</li>
        <li className={`page-item ${
            currentPage + 1 > totalPages ? 'disabled' : ''
          }`}
        >
          <Link
            className="page-link page-link-next"
            href={`/products/?page=${currentPage + 1}`}
          >
            Next{' '}
            <span aria-hidden="true">
              <i className="icon-long-arrow-right"></i>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
