const Header = () => {
  return (
    <header className='bg-teal-800 pt-5 pb-5 fixed left-0 right-0 z-20'>
      <nav className='container my-auto'>
        <ul className='flex justify-end'>
          <li className='hover:text-black transition-all'>
            <a href='#home' className='navLink'>
              Home
            </a>
          </li>
          <li className='hover:text-black transition-all'>
            <a href='#about' className='navLink'>
              About me
            </a>
          </li>
          <li className='hover:text-black transition-all'>
            <a href='#articles' className='navLink'>My work</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
