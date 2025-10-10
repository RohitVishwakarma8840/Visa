import { bgcolor } from '@mui/system';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PaginationComponent = ({
  currentPage,
  itemPerPage,
  handleChange,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <div
      style={{
       
         display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '24px 0',
        width: '100%',
        marginTop: 'auto', // Push to bottom
      }}
    >
      {/* Prev Icon */}
      <button
        style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaChevronLeft size={16} />
      </button>

      {Array.from({ length: totalPages })?.map((page, i) => {
        const pageNumber = i + 1;
        return (
          <button
            key={i}
            onClick={(e) => handleChange(e, pageNumber)} // Pass event and page number
            style={{
              width: 40,
              height: 40,
              backgroundColor: currentPage === pageNumber ? '#1976d2' : '#f0f0f0',
              color: currentPage === pageNumber ? 'white' : 'black',
              border: '1px solid #ddd',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Icon */}
      <button
        style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
        onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight size={16} />
      </button>
    </div>
  );
};

export default PaginationComponent;