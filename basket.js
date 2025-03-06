import React from "react";

const Basket = ({ basketItems, removeFromBasket, clearBasket }) => {
  const totalPrice = basketItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    clearBasket();
  };

  const handleClearBasket = () => {
    if (window.confirm("Are you sure you want to clear the basket?")) {
      clearBasket();
    }
  };

  const styles = {
    basketPage: {
      padding: "20px",
      textAlign: "center",
      backgroundColor: "#121212", // خلفية داكنة
      minHeight: "100vh",
      color: "#fff", // نص بلون فاتح
    },
    basketItems: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignItems: "center",
      marginTop: "20px",
    },
    basketItem: {
      border: "1px solid #444", // إطار غامق أكثر
      borderRadius: "15px",
      padding: "20px",
      width: "350px",
      textAlign: "left",
      backgroundColor: "#1e1e1e", // لون داكن للصندوق
      boxShadow: "0 4px 12px rgba(255, 255, 255, 0.1)", // ظل خفيف فاتح
      display: "flex",
      gap: "20px",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
    basketItemImage: {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "10px",
    },
    basketItemDetails: {
      flex: 1,
    },
    basketItemDetailsH3: {
      fontSize: "20px",
      color: "#fff", // لون نص فاتح
      margin: "0 0 10px",
      fontWeight: "bold",
    },
    price: {
      fontSize: "18px",
      color: "#4db8ff", // أزرق فاتح
      fontWeight: "bold",
      margin: "10px 0",
    },
    removeButton: {
      padding: "8px 16px",
      background: "linear-gradient(135deg, #ff4d4d, #b30000)", // أحمر متدرج
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "14px",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    basketSummary: {
      marginTop: "30px",
      padding: "20px",
      border: "1px solid #444",
      borderRadius: "15px",
      backgroundColor: "#1e1e1e",
      boxShadow: "0 4px 12px rgba(255, 255, 255, 0.1)",
      maxWidth: "400px",
      margin: "20px auto",
    },
    checkoutButton: {
      padding: "12px 24px",
      background: "linear-gradient(135deg, #4db8ff, #007acc)", // أزرق متدرج
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "transform 0.2s, box-shadow 0.2s",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.basketPage}>
      <h1 style={{ fontSize: "36px", color: "#fff", marginBottom: "20px" }}>
        Your Basket
      </h1>
      {basketItems.length === 0 ? (
        <p style={{ fontSize: "18px", color: "#ccc" }}>Your basket is empty.</p>
      ) : (
        <div>
          <div style={styles.basketItems}>
            {basketItems.map((item) => (
              <div key={item.id} style={styles.basketItem}>
                <img src={item.image} alt={item.name} style={styles.basketItemImage} />
                <div style={styles.basketItemDetails}>
                  <h3 style={styles.basketItemDetailsH3}>{item.name}</h3>
                  <p style={{ color: "#aaa" }}>{item.description}</p>
                  <p style={styles.price}>Price: ${item.price}</p>
                  <button
                    onClick={() => removeFromBasket(item.id)}
                    style={styles.removeButton}
                  >
                    🗑️ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.basketSummary}>
            <h3 style={{ fontSize: "24px", color: "#fff" }}>
              Total Items: {basketItems.length}
            </h3>
            <h3 style={{ fontSize: "24px", color: "#fff" }}>
              Total Price: ${totalPrice}
            </h3>
            <button onClick={handleClearBasket} style={styles.removeButton}>
              🧹 Clear Basket
            </button>
            <button onClick={handleCheckout} style={styles.checkoutButton}>
              💳 Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;