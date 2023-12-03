// import React, { useState } from "react";
// import { FaBars, FaReact } from "react-icons/fa";
// import { HiOutlineX } from 'react-icons/hi'; // Correct the import for HiOutlineX
// import { Link } from "react-router-dom";
// import './styles.scss';

// // const data = [
// //   {
// //     label: 'HOME',
// //     to: '/',
// //   },
// //   {
// //     label: 'ABOUT ME',
// //     to: '/about',
// //   },
// //   {
// //     label: 'SKILLS',
// //     to: '/skills',
// //   },
// //   {
// //     label: 'RESUME',
// //     to: '/resume',
// //   },
// //   {
// //     label: 'PORTFOLIO',
// //     to: '/portfolio',
// //   },
// //   {
// //     label: 'CONTACT',
// //     to: '/contact',
// //   },
// // ];

// const Navbar = () => {
//   const [toggleIcon, setToggleIcon] = useState(false);

//   const handleToggle = () => {
//     setToggleIcon(!toggleIcon);
//   };

//   const links = [
//     { label: 'HOME', to: '/' },
//     { label: 'ABOUT ME', to: '/about' },
//     { label: 'SKILLS', to: '/skills' },
//     { label: 'RESUME', to: '/resume' },
//     { label: 'PORTFOLIO', to: '/portfolio' },
//     { label: 'CONTACT', to: '/contact' },
//   ];

// //   return (
// //     <nav className="navbar"> 
// //       <div className="navbar_container"> 
// //        <Link to="/" className="navbar_container_logo"> {/* Make sure you have CSS classes for 'navbar_container_logo' */}
// //           <FaReact size={30} />
// //         </Link>
// //       </div>
// //       {/* <ul className={`navbar_container_menu ${toggleIcon ? "active" : " "}`}> */}
// //       <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
// //         {data.map((item, key) => (
// //           <li key={key} className="navbar_container_menu_item"> {/* Make sure you have CSS classes for 'navbar_container_menu_item' */}
// //             <Link
// //               className="navbar_container_menu_item_links" 
// //               to={item.to}
// //               onClick={() => setToggleIcon(false)} // Close the menu when a link is clicked
// //             >
// //               {item.label}
// //             </Link>
// //           </li>
// //         ))}
// //       </ul>
// //       <div className="nav-icons" onClick={handleToggle}>
// //         {toggleIcon ? <HiOutlineX size={30} /> : <FaBars size={30} />}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// return (
//   <nav className="navbar">
//     <div className="navbar_container">
//       <Link to="/" className="navbar_container_logo">
//         <FaReact size={30} />
//       </Link>
//     </div>
//     <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
//       {links.map((link, key) => (
//         <li key={key} className="navbar_container_menu_item">
//           <Link
//             className="navbar_container_menu_item_links"
//             to={link.to}
//             onClick={() => setToggleIcon(false)}
//           >
//             {link.label}
//           </Link>
//         </li>
//       ))}
//     </ul>
//     <div className="nav-icons" onClick={handleToggle}>
//       {toggleIcon ? <HiOutlineX size={30} /> : <FaBars size={30} />}
//     </div>
//   </nav>
// );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { FaBars, FaReact } from "react-icons/fa";
// import { HiOutlineX } from 'react-icons/hi';
// import { Link } from "react-router-dom";
// import './styles.scss';

// const Navbar = () => {
//   const [toggleIcon, setToggleIcon] = useState(false);

//   const handleToggle = () => {
//     setToggleIcon(!toggleIcon);
//   };

//   const links = [
//     { label: 'HOME', to: '/' },
//     { label: 'ABOUT ME', to: '/about' },
//     { label: 'SKILLS', to: '/skills' },
//     { label: 'RESUME', to: '/resume' },
//     { label: 'PORTFOLIO', to: '/portfolio' },
//     { label: 'CONTACT', to: '/contact' },
//   ];

//   return (
//     <nav className="navbar">
//       <div className="navbar_container">
//         <Link to="/" className="navbar_container_logo">
//           <FaReact size={30} />
//         </Link>
//       </div>
//       <ul className={`navbar_container_menu ${toggleIcon ? "active" : ""}`}>
//         {links.map((link, key) => (
//           <li key={key} className="navbar_container_menu_item">
//             <Link
//               className="navbar_container_menu_item_links"
//               to={link.to}
//               onClick={() => setToggleIcon(false)}
//             >
//               {link.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <div className="nav-icons" onClick={handleToggle}>
//         {toggleIcon ? <HiOutlineX size={30} /> : <FaBars size={30} />}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiOutlineX } from 'react-icons/hi';
import { Link } from "react-router-dom";
import './styles.scss';

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };

  const links = [
    { label: 'HOME', to: '/' },
    { label: 'ABOUT ME', to: '/about' },
    { label: 'SKILLS', to: '/skills' },
    { label: 'RESUME', to: '/resume' },
    { label: 'PORTFOLIO', to: '/portfolio' },
    { label: 'CONTACT', to: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <Link to="/" className="navbar_container_logo">
          <FaReact size={30} />
        </Link>
      </div>
      <ul
        className={`navbar_container_menu ${
          toggleIcon
            ? 'active md:flex-col justify-center items-center w-full absolute text-gray-300 top-16 bg-black/90 px-4 py-7 flex flex-col'
            : 'hidden md:flex'
        }`}
      >
        {links.map((link, key) => (
          <li key={key} className="navbar_container_menu_item">
            <Link
              className="navbar_container_menu_item_links"
              to={link.to}
              onClick={() => setToggleIcon(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-icons" onClick={handleToggle}>
        {toggleIcon ? <HiOutlineX size={30} /> : <FaBars size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;
