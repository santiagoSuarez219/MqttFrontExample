const Layout = ({ children }) => {
    return (
        <div className='bg-primary w-full h-screen flex flex-col items-center justify-center'>
            { children }
        </div>
    )
}

export default Layout