import Image from 'next/image';
import logo from '../assets/icons/Icon.webp';
import styles from '../styles/nav.module.scss';
const NavBar = () => {
  return (
    <main
      //  className="flex w-full items-center justify-between h-12 px-6 mt-2"
      className={styles.navContainer}
    >
      <div
        // className="flex items-center gap-4 flex-1 "
        className={styles.navItemLeftContainer}
      >
        <Image src={logo} alt="logo" className="w-6" />
        <p className="text-2">Matcha</p>

        <input
          type="text"
          placeholder="Search by toke name, symbol, or address...."
          // className=" ml-4 h-10 px-2 w-1/3"
          className={styles.searchBar}
        />
      </div>
      <div
        // className="flex items-center gap-10"
        className={styles.navItemRightContainer}
      >
        <button>Home</button>
        <button>Trade</button>
        <button>Profile</button>
      </div>
    </main>
  );
};

export default NavBar;
