import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div style={styles.cartContainer}>
      <h2 style={styles.cartTitle}>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p style={styles.emptyCartMessage}>Your cart is empty.</p>
      ) : (
        <ul style={styles.cartList}>
          {cartItems.map((item) => (
            <li key={item.id} style={styles.cartItem}>
              <span style={styles.itemName}>{item.name} - ${item.price}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                style={styles.removeButton}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  cartContainer: {
    marginTop: "24px",
    padding: "16px",
    border: "1px solid #007bff", // حدود أزرق
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 123, 255, 0.1)", // ظل أزرق فاتح
    backgroundColor: "#ffffff", // خلفية بيضاء
  },
  cartTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#007bff", // لون نص أزرق
    marginBottom: "12px",
  },
  emptyCartMessage: {
    color: "#666",
    fontSize: "16px",
  },
  cartList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid #e0e0e0", // حدود فاتحة بين العناصر
  },
  itemName: {
    fontSize: "16px",
    color: "#333",
  },
  removeButton: {
    backgroundColor: "#007bff", // لون خلفية أزرق
    color: "#ffffff", // لون نص أبيض
    border: "none",
    borderRadius: "6px",
    padding: "8px 16px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 8px rgba(0, 123, 255, 0.2)", // ظل أزرق
  },
  removeButtonHover: {
    backgroundColor: "#0056b3", // لون خلفية أزرق غامق عند التحويم
    transform: "translateY(-2px)", // تحريك الزر لأعلى قليلاً
    boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)", // ظل أزرق أقوى عند التحويم
  },
};

export default Cart;