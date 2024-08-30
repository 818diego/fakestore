const Layout = ({ children }) => {
    return (
        <div className='flex flex-col items-center bg-gray-800'>
            {children}
        </div>
    );
}

export default Layout;