import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type TPaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination = ({totalItems, itemsPerPage, onPageChange}: TPaginationProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Функция для получения параметра "page" из URL
  const getCurrentPage = () => {
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page');
    return page ? parseInt(page) : 1;
  };

  const [currentPage, setCurrentPage] = useState(getCurrentPage());
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    const page = getCurrentPage();
    setCurrentPage(page);
  }, [location.search]);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage])

  const goToPage = (pageNumber: number) => {
    navigate(`?page=${pageNumber}`);
  };

  const goToPreviousPage = () => goToPage(currentPage - 1);
  const goToNextPage = () => goToPage(currentPage + 1);

  return (
    <div className='pagination'>
      <div className='pagination__info'>
        <p>Pokémons per page: {itemsPerPage}</p>
        <p>Total pokémons: {totalItems}</p>
      </div>
      <div className='pagination__buttons'>
        <button
          className='pagination-button'
          disabled={currentPage === 1}
          onClick={goToPreviousPage}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className='pagination-button'
            onClick={() => goToPage(index + 1)}
            style={{
              fontWeight: index + 1 === currentPage ? 'bold' : 'normal',
            }}
          >
            {index + 1}
          </button>
        ))}

        <button
          className='pagination-button'
          disabled={currentPage === totalPages}
          onClick={goToNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
