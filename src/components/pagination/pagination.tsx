import './pagination.css';

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
    onPageChange(page);
  }, [location.search]);

  const goToPage = (pageNumber: number) => {
    navigate(`?page=${pageNumber}`);
  };

  const onPreviousClick = () => goToPage(currentPage - 1);
  const onNextClick = () => goToPage(currentPage + 1);

  return (
    <div className='pagination'>
      <div className='pagination__info info'>
        <p className='info__text'>Pokémons per page: {itemsPerPage}</p>
        <p className='info__text'>Total pokémons: {totalItems}</p>
      </div>
      <div className='pagination__buttons'>
        <button
          className='pagination-button pagination-button--neighbour'
          disabled={currentPage === 1}
          onClick={onPreviousClick}
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`pagination-button ${index + 1 === currentPage ? 'pagination-button--current' : ''}`}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className='pagination-button pagination-button--neighbour'
          disabled={currentPage === totalPages}
          onClick={onNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
