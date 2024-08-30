import { SearchIcon } from '@heroicons/react/solid';

export default function SearchBar({ searchTerm, onSearchChange }) {
    return (
        <div className='mb-4 relative'>
            <SearchIcon className='absolute w-5 h-5 text-gray-400 left-3 top-3.5' />
            <input
                type='text'
                value={searchTerm}
                onChange={onSearchChange}
                placeholder='Search for products...'
                className='w-96 p-3 pl-10 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200'
            />
        </div>
    );
}
