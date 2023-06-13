import NavBar from "../components/NavBar";
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';


const ViewArticles = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Introduction to React',
      author: 'John Doe',
      createdDate: '2023-05-01',
      updatedDate: '2023-05-05',
      editedBy: 'Jane Smith',
    },
    {
      id: 2,
      title: 'Getting Started with Tailwind CSS',
      author: 'Jane Smith',
      createdDate: '2023-05-02',
      updatedDate: '2023-05-06',
      editedBy: 'John Doe',
    },
    {
      id: 3,
      title: 'JavaScript Basics',
      author: 'John Doe',
      createdDate: '2023-05-03',
      updatedDate: '2023-05-07',
      editedBy: 'Jane Smith',
    },
    {
      id: 4,
      title: 'HTML5 and CSS3 Fundamentals',
      author: 'Jane Smith',
      createdDate: '2023-05-04',
      updatedDate: '2023-05-08',
      editedBy: 'John Doe',
    },
    {
      id: 5,
      title: 'Responsive Web Design Techniques',
      author: 'John Doe',
      createdDate: '2023-05-05',
      updatedDate: '2023-05-09',
      editedBy: 'Jane Smith',
    },
    {
      id: 6,
      title: 'React State Management with Redux',
      author: 'Jane Smith',
      createdDate: '2023-05-06',
      updatedDate: '2023-05-10',
      editedBy: 'John Doe',
    },
    {
      id: 7,
      title: 'Building RESTful APIs with Node.js',
      author: 'John Doe',
      createdDate: '2023-05-07',
      updatedDate: '2023-05-11',
      editedBy: 'Jane Smith',
    },
    {
      id: 8,
      title: 'Database Design and Modeling',
      author: 'Jane Smith',
      createdDate: '2023-05-08',
      updatedDate: '2023-05-12',
      editedBy: 'John Doe',
    },
    {
      id: 9,
      title: 'Introduction to Python Programming',
      author: 'John Doe',
      createdDate: '2023-05-09',
      updatedDate: '2023-05-13',
      editedBy: 'Jane Smith',
    },
    {
      id: 10,
      title: 'Data Analysis with Pandas and NumPy',
      author: 'Jane Smith',
      createdDate: '2023-05-10',
      updatedDate: '2023-05-14',
      editedBy: 'John Doe',
    },
    {
      id: 11,
      title: 'Machine Learning Algorithms',
      author: 'John Doe',
      createdDate: '2023-05-11',
      updatedDate: '2023-05-15',
      editedBy: 'Jane Smith',
    },
    {
      id: 12,
      title: 'Deep Learning Fundamentals',
      author: 'Jane Smith',
      createdDate: '2023-05-12',
      updatedDate: '2023-05-16',
      editedBy: 'John Doe',
    },
    {
      id: 13,
      title: 'AWS Cloud Computing Essentials',
      author: 'John Doe',
      createdDate: '2023-05-13',
      updatedDate: '2023-05-17',
      editedBy: 'Jane Smith',
    },
    {
      id: 14,
      title: 'Cybersecurity Best Practices',
      author: 'Jane Smith',
      createdDate: '2023-05-14',
      updatedDate: '2023-05-18',
      editedBy: 'John Doe',
    },
    {
      id: 15,
      title: 'Web Application Security',
      author: 'John Doe',
      createdDate: '2023-05-15',
      updatedDate: '2023-05-19',
      editedBy: 'Jane Smith',
    },
    // Add more data here...
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = () => {
    if (sortConfig.key) {
      const sortedItems = [...filteredData].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
      return sortedItems;
    }
    return filteredData;
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData().slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <NavBar />
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="p-2 mb-4 rounded"
      />
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th
              onClick={() => handleSort('title')}
              className="cursor-pointer py-2 px-4"
            >
              Article Title
              {sortConfig.key === 'title' && (
                <span className="ml-1">
                  {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                </span>
              )}
            </th>
            <th
              onClick={() => handleSort('author')}
              className="cursor-pointer py-2 px-4"
            >
              Author
              {sortConfig.key === 'author' && (
                <span className="ml-1">
                  {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                </span>
              )}
            </th>
            <th
              onClick={() => handleSort('createdDate')}
              className="cursor-pointer py-2 px-4"
            >
              Date Created
              {sortConfig.key === 'createdDate' && (
                <span className="ml-1">
                  {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                </span>
              )}
            </th>
            <th
              onClick={() => handleSort('updatedDate')}
              className="cursor-pointer py-2 px-4"
            >
              Date Updated
              {sortConfig.key === 'updatedDate' && (
                <span className="ml-1">
                  {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                </span>
              )}
            </th>
            <th
              onClick={() => handleSort('editedBy')}
              className="cursor-pointer py-2 px-4"
            >
              Edited By
              {sortConfig.key === 'editedBy' && (
                <span className="ml-1">
                  {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                </span>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id} className="bg-white">
              <td className="border py-2 px-4">{item.title}</td>
              <td className="border py-2 px-4">{item.author}</td>
              <td className="border py-2 px-4">{item.createdDate}</td>
              <td className="border py-2 px-4">{item.updatedDate}</td>
              <td className="border py-2 px-4">{item.editedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-2 rounded ${
              currentPage === index + 1
                ? 'bg-gray-600 text-white'
                : 'bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>

    </>
    
  );
};

export default ViewArticles;
