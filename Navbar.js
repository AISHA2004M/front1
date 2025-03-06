import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/basket" style={styles.navLink}>
            Basket
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/login" style={styles.navLink}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#ffffff", // خلفية بيضاء
    padding: "15px 30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 12px rgba(0, 123, 255, 0.1)", // ظل أزرق فاتح
    position: "sticky",
    top: 0,
    zIndex: 1000,
    borderBottom: "2px solid #007bff", // حدود أزرق
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "30px",
    margin: 0,
    padding: 0,
  },
  navItem: {
    position: "relative",
  },
  navLink: {
    color: "#007bff", // لون نص أزرق
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "600",
    padding: "10px 20px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    display: "block",
    background: "linear-gradient(135deg, #ffffff, #f0f8ff)", // تدرج لوني أبيض وأزرق فاتح
    boxShadow: "0 2px 8px rgba(0, 123, 255, 0.1)", // ظل أزرق فاتح
  },
  navLinkHover: {
    background: "linear-gradient(135deg, #007bff, #0056b3)", // تدرج لوني أزرق
    color: "#ffffff", // لون نص أبيض عند التحويم
    transform: "translateY(-2px)", // تحريك الزر لأعلى قليلاً
    boxShadow: "0 4px 12px rgba(0, 123, 255, 0.2)", // ظل أزرق أقوى عند التحويم
  },
};

export default Navbar;

