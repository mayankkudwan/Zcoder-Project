// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();

//   const styles = {
//     navbar: {
//       backgroundColor: '#343a40',
//       height: '100px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       padding: '0 20px',
//       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       width: '100%'
//     },
//     brand: {
//       color: '#ffffff',
//       fontSize: '24px',
//       fontWeight: 'bold',
//       textDecoration: 'none'
//     },
//     profileButton: {
//       backgroundColor: '#007bff',
//       color: '#ffffff',
//       border: 'none',
//       borderRadius: '5px',
//       padding: '8px 16px',
//       cursor: 'pointer',
//       marginRight: '10px'
//     },
//     searchForm: {
//       display: 'flex',
//       alignItems: 'center'
//     },
//     searchInput: {
//       marginRight: '10px',
//       padding: '8px',
//       border: '1px solid #ced4da',
//       borderRadius: '5px',
//       fontSize: '16px'
//     },
//     searchButton: {
//       backgroundColor: '#28a745',
//       color: '#ffffff',
//       border: 'none',
//       borderRadius: '5px',
//       padding: '8px 16px',
//       cursor: 'pointer'
//     }
//   };

//   const handleProfileClick = () => {
//     navigate("/profilepage");
//   };
//   const handleLogOutClick = () => {
//     navigate("/logout");
//   };
//   return (
//     <nav style={styles.navbar}>
//       <a href="#" style={styles.brand}>
//         <h1>Zcoder</h1>
//       </a>
//       <form style={styles.searchForm}>
//         <button type="button" style={styles.profileButton} onClick={handleProfileClick}>
//           <FontAwesomeIcon icon={faUser} /> Profile
//         </button>
//         <button type="button" style={styles.profileButton} onClick={handleLogOutClick}>
//           Logout
//         </button>
//         <input
//           type="text"
//           placeholder="Search"
//           style={styles.searchInput}
//         />
//         <button type="submit" style={styles.searchButton}>
//           Search
//         </button>
//       </form>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const styles = {
    navbar: {
      backgroundColor: '#1F2937', // Dark gray background
      height: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000 // Ensure the navbar stays on top
    },
    brand: {
      color: '#ffffff',
      fontSize: '24px',
      fontWeight: 'bold',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center'
    },
    profileButton: {
      backgroundColor: '#3B82F6', // Blue background
      color: '#ffffff',
      border: 'none',
      borderRadius: '5px',
      padding: '8px 16px',
      cursor: 'pointer',
      marginRight: '10px',
      transition: 'background-color 0.3s ease',
    },
    logoutButton: {
      backgroundColor: '#EF4444', // Red background for logout
      color: '#ffffff',
      border: 'none',
      borderRadius: '5px',
      padding: '8px 16px',
      cursor: 'pointer',
      marginRight: '10px',
      transition: 'background-color 0.3s ease',
    },
    profileButtonHover: {
      backgroundColor: '#2563EB', // Darker blue on hover
    },
    logoutButtonHover: {
      backgroundColor: '#DC2626', // Darker red on hover
    },
    searchForm: {
      display: 'flex',
      alignItems: 'center'
    },
    searchInput: {
      marginRight: '10px',
      padding: '8px',
      border: '1px solid #9CA3AF',
      borderRadius: '5px',
      fontSize: '16px',
      transition: 'border-color 0.3s ease',
    },
    searchInputFocus: {
      borderColor: '#3B82F6',
    },
    searchButton: {
      backgroundColor: '#10B981', // Green background
      color: '#ffffff',
      border: 'none',
      borderRadius: '5px',
      padding: '8px 16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    searchButtonHover: {
      backgroundColor: '#059669', // Darker green on hover
    }
  };

  const handleProfileClick = () => {
    navigate("/profilepage");
  };
  const handleLogOutClick = () => {
    navigate("/logout");
  };

  return (
    <nav style={styles.navbar}>
      <a href="#" style={styles.brand}>
        <h1>Zcoder</h1>
      </a>
      <form style={styles.searchForm}>
        <button 
          type="button" 
          style={styles.profileButton} 
          onClick={handleProfileClick}
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.profileButtonHover.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.profileButton.backgroundColor}
        >
          <FontAwesomeIcon icon={faUser} /> Profile
        </button>
        <button 
          type="button" 
          style={styles.logoutButton} 
          onClick={handleLogOutClick}
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.logoutButtonHover.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.logoutButton.backgroundColor}
        >
          Logout
        </button>
        <input
          type="text"
          placeholder="Search"
          style={styles.searchInput}
          onFocus={(e) => e.target.style.borderColor = styles.searchInputFocus.borderColor}
          onBlur={(e) => e.target.style.borderColor = styles.searchInput.borderColor}
        />
        <button 
          type="submit" 
          style={styles.searchButton}
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.searchButtonHover.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.searchButton.backgroundColor}
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
