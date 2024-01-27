import React from "react";
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const styles = {
  nav: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  siteTitle: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  pointsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    width: '20px', // Adjust the width as needed
    height: '20px', // Adjust the height as needed
    marginRight: '5px',
    fill: 'white',
    transform: 'scaleX(-1)', // Invert the icon horizontally
  },
  points: {
    fontSize: '1rem',
    color: 'white',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  li: {
    margin: '0 15px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1rem',
  },
  activeLink: {
    borderBottom: '2px solid white',
  },
};

const Points = ({ value = '50 points' }) => {
  return (
    <div style={styles.pointsContainer}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={styles.icon}>
        <title>Star</title>
        <path d="M256,73.8247c-100.6128,0-182.18,81.5625-182.18,182.1717A182.18,182.18,0,1,0,256,73.8247ZM357.5488,238.3384l-45.756,38.7774,14.2335,58.3065c2.5092,10.89-9.4788,19.53-18.9711,13.6764L256,317.5717l-51.0561,31.527c-9.76,6.1344-21.7611-2.7864-18.9666-13.6674l14.23-58.3155-45.7515-38.7774c-8.6535-7.25-4.1886-21.2076,7.2459-22.3236l59.9769-4.4649,22.6008-55.521c4.4649-10.3185,19.2528-10.3185,23.436,0l22.5972,55.521,59.985,4.4649A12.663,12.663,0,0,1,357.5488,238.3384Z"/>
      </svg>
      <div style={styles.points}>{value}</div>
    </div>
  );
};

export default function NavBar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.siteTitle}>
        Stuber
      </Link>
      <ul style={styles.ul}>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/profile">Profile</CustomLink>
      </ul>
      <Points />
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li style={{ ...styles.li, ...(isActive && styles.activeLink) }}>
      <Link to={to} style={styles.link} {...props}>
        {children}
      </Link>
    </li>
  );
}
