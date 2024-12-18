
// import React from 'react';
// import { Link } from 'react-router-dom';
// import MenuButton from './MenuButton';
// import CartButton from './CartButton';
// import styles from './styles.module.css';
// import { useProduct } from '../../Context/ProductContext';
// import { useAuth } from '../../Context/AuthContext';
// import { Disclosure } from '@headlessui/react';
// import { MenuIcon, XIcon, LogoutIcon } from '@heroicons/react/outline';
// import NAVIGATION from '../../Config/navbarItemList';

// const Navbar = () => {
//   const { categories, setCategory } = useProduct();
//   const { loggedIn, currentUser, setIsSubmitting, logout } = useAuth();

//   const handleLogout = async () => {
//     setIsSubmitting(true);
//     try {
//       await logout();
//     } catch {
//       alert('Error');
//     }
//     setIsSubmitting(false);
//   };

//   return (
//     <>
//       <Disclosure as="nav">
//         {({ open }) => (
//           <>
//             <div className="bg-gradient-to-b from-gray-800 to-gray-900 pb-6">
//               <div className="relative flex items-center justify-between h-16">
//                 <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                   {/* Mobile menu button*/}
//                   <Disclosure.Button className="inline-flex items-center justify-center p-2">
//                     <span className="sr-only">Open main menu</span>
//                     {open ? (
//                       <XIcon className="block h-9 w-9" aria-hidden="true" />
//                     ) : (
//                       <MenuIcon className="block h-9 w-9" aria-hidden="true" />
//                     )}
//                   </Disclosure.Button>
//                 </div>
//                 <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//                   <div className={styles.logo}>
//                     <Link className={styles.link} to="/">
//                       <div className={styles.logoBox}>
//                         <img src="logo.png" alt="Logo" />
//                       </div>
//                     </Link>
//                   </div>
//                   <div className="hidden sm:block sm:ml-6"></div>
//                 </div>
//                 <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                   <div className="ml-3 relative hidden sm:block">
//                     <MenuButton className="mt-1" /> {/* Adjusted margin-top */}
//                   </div>
//                   <div className="ml-3 relative">
//                     <CartButton className="mt-1" /> {/* Adjusted margin-top */}
//                   </div>
//                   {/* Profile dropdown */}
//                 </div>
//               </div>
//             </div>

//             <Disclosure.Panel className={styles.disclosurePanel}>
//               <div>
//                 {!loggedIn && NAVIGATION.map(({ id, name, link, icon, underlined, loggedIn, onclick }) => (
//                   <Link
//                     to={link}
//                     onClick={onclick ? onclick : null}
//                     className={`${!loggedIn || loggedIn === 'public' || 'hidden'}`}
//                     key={`${name}-00${id}`}
//                   >
//                     <Disclosure.Button className={`${styles.disclosureButton} ${underlined ? 'border-b-2 border-yellow-300' : ''}`}>
//                       {icon}
//                       {name}
//                     </Disclosure.Button>
//                   </Link>
//                 ))}
//                 {loggedIn && NAVIGATION.map(({ id, name, link, icon, underlined, loggedIn, onclick }) => (
//                   <Link
//                     to={link}
//                     onClick={onclick ? onclick : null}
//                     className={`${loggedIn || loggedIn === 'public' || 'hidden'}`}
//                     key={`${name}-00${id}`}
//                   >
//                     <Disclosure.Button className={`${styles.disclosureButton} ${underlined ? 'border-b-2 border-yellow-300' : ''}`}>
//                       {icon}
//                       {name}
//                     </Disclosure.Button>
//                   </Link>
//                 ))}
//                 {loggedIn && (
//                   <Link to="/" onClick={handleLogout}>
//                     <Disclosure.Button className={styles.disclosureButton}>
//                       <LogoutIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />
//                       Logout
//                     </Disclosure.Button>
//                   </Link>
//                 )}
//               </div>
//             </Disclosure.Panel>
//           </>
//         )}
//       </Disclosure>
//     </>
//   );
// };

// export default Navbar;


















// import React from 'react';
// import { Link } from 'react-router-dom';
// import MenuButton from './MenuButton';
// import CartButton from './CartButton';
// import styles from './styles.module.css';
// import { useProduct } from '../../Context/ProductContext';
// import { useAuth } from '../../Context/AuthContext';
// import { Disclosure } from '@headlessui/react';
// import { MenuIcon, XIcon, LogoutIcon } from '@heroicons/react/outline';
// import NAVIGATION from '../../Config/navbarItemList';

// const Navbar = () => {
//   const { categories, setCategory } = useProduct();
//   const { loggedIn, currentUser, setIsSubmitting, logout } = useAuth();

//   const handleLogout = async () => {
//     setIsSubmitting(true);
//     try {
//       await logout();
//     } catch {
//       alert('Error');
//     }
//     setIsSubmitting(false);
//   };

//   return (
//     <>
//       <Disclosure as="nav">
//         {({ open }) => (
//           <>
//             <div className="bg-gradient-to-b from-gray-800 to-gray-900 pb-6">
//               <div className="relative flex items-center justify-between h-16">
//                 <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                   {/* Mobile menu button*/}
//                   <Disclosure.Button className="inline-flex items-center justify-center p-2">
//                     <span className="sr-only">Open main menu</span>
//                     {open ? (
//                       <XIcon className="block h-9 w-9" aria-hidden="true" />
//                     ) : (
//                       <MenuIcon className="block h-9 w-9" aria-hidden="true" />
//                     )}
//                   </Disclosure.Button>
//                 </div>
//                 <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//                   <div className={styles.logo}>
//                     <Link className={styles.link} to="/">
//                       <div className={styles.logoBox}>
//                         <img src="logo.png" alt="Logo" />
//                       </div>
//                     </Link>
//                   </div>
//                   <div className="hidden sm:block sm:ml-6"></div>
//                 </div>
//                 <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                   <div className="ml-3 relative hidden sm:block">
//                     <MenuButton className="mt-1" /> {/* Adjusted margin-top */}
//                   </div>
//                   <div className="ml-3 relative">
//                     <CartButton className="mt-1" /> {/* Adjusted margin-top */}
//                   </div>
//                   {/* Profile dropdown */}
//                 </div>
//               </div>
//             </div>

//             <Disclosure.Panel className={styles.disclosurePanel}>
//               <div>
//                 {!loggedIn && NAVIGATION.map(({ id, name, link, icon, underlined, loggedIn, onclick }) => (
//                   <Link
//                     to={link}
//                     onClick={onclick ? onclick : null}
//                     className={`${!loggedIn || loggedIn === 'public' || 'hidden'}`}
//                     key={`${name}-00${id}`}
//                   >
//                     <Disclosure.Button className={`${styles.disclosureButton} ${underlined ? 'border-b-2 border-yellow-300' : ''}`}>
//                       {icon}
//                       {name}
//                     </Disclosure.Button>
//                   </Link>
//                 ))}
//                 {loggedIn && NAVIGATION.map(({ id, name, link, icon, underlined, loggedIn, onclick }) => (
//                   <Link
//                     to={link}
//                     onClick={onclick ? onclick : null}
//                     className={`${loggedIn || loggedIn === 'public' || 'hidden'}`}
//                     key={`${name}-00${id}`}
//                   >
//                     <Disclosure.Button className={`${styles.disclosureButton} ${underlined ? 'border-b-2 border-yellow-300' : ''}`}>
//                       {icon}
//                       {name}
//                     </Disclosure.Button>
//                   </Link>
//                 ))}
//                 {loggedIn && (
//                   <Link to="/" onClick={handleLogout}>
//                     <Disclosure.Button className={styles.disclosureButton}>
//                       <LogoutIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />
//                       Logout
//                     </Disclosure.Button>
//                   </Link>
//                 )}
//               </div>
//             </Disclosure.Panel>
//           </>
//         )}
//       </Disclosure>
//     </>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import CartButton from './CartButton';
import styles from './styles.module.css';
import { useProduct } from '../../Context/ProductContext';
import { useAuth } from '../../Context/AuthContext';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon, LogoutIcon } from '@heroicons/react/outline';
import NAVIGATION from '../../Config/navbarItemList';

// Corrected logo import. If "logo.png" is in the "public" folder, use "/logo.png".
const logoPath = '/logo.png'; // Assuming logo.png is in the "public" folder

const Navbar = () => {
  const { categories, setCategory } = useProduct();
  const { loggedIn, currentUser, setIsSubmitting, logout } = useAuth();

  const handleLogout = async () => {
    setIsSubmitting(true);
    try {
      await logout();
    } catch {
      alert('Error');
    }
    setIsSubmitting(false);
  };

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 pb-6">
            <div className="relative flex items-center justify-between h-16">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-9 w-9" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-9 w-9" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo and Navigation */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className={styles.logo}>
                  <Link className={styles.link} to="/">
                    <div className={styles.logoBox}>
                      <img src={logoPath} alt="Logo" className="h-10 w-auto" /> {/* Added default height */}
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right-side buttons */}
              <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="ml-3 relative hidden sm:block">
                  <MenuButton className="mt-1" />
                </div>
                <div className="ml-3 relative">
                  <CartButton className="mt-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className={styles.disclosurePanel}>
            <div>
              {!loggedIn &&
                NAVIGATION.map(({ id, name, link, icon, underlined, loggedIn, onclick }) => (
                  <Link
                    to={link}
                    onClick={onclick ? onclick : null}
                    className={`${!loggedIn || loggedIn === 'public' || 'hidden'}`}
                    key={`${name}-00${id}`}
                  >
                    <Disclosure.Button
                      className={`${styles.disclosureButton} ${
                        underlined ? 'border-b-2 border-yellow-300' : ''
                      }`}
                    >
                      {icon}
                      {name}
                    </Disclosure.Button>
                  </Link>
                ))}
              {loggedIn &&
                NAVIGATION.map(({ id, name, link, icon, underlined, loggedIn, onclick }) => (
                  <Link
                    to={link}
                    onClick={onclick ? onclick : null}
                    className={`${loggedIn || loggedIn === 'public' || 'hidden'}`}
                    key={`${name}-00${id}`}
                  >
                    <Disclosure.Button
                      className={`${styles.disclosureButton} ${
                        underlined ? 'border-b-2 border-yellow-300' : ''
                      }`}
                    >
                      {icon}
                      {name}
                    </Disclosure.Button>
                  </Link>
                ))}
              {loggedIn && (
                <Link to="/" onClick={handleLogout}>
                  <Disclosure.Button className={styles.disclosureButton}>
                    <LogoutIcon className="mr-2 my-auto h-5 w-5" aria-hidden="true" />
                    Logout
                  </Disclosure.Button>
                </Link>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;

