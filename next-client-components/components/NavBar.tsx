import Link from 'next/link';
import Search from './Search';

const NavBar = () => {
  return (
    <nav>
     <h1>
        <Link href='/'>Wiki Rocket!</Link>
        <Search/>
     </h1>
    </nav>
  )
}

export default NavBar