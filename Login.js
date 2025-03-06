import React, { useState } from "react";

const Login = () => {
  const [focused, setFocused] = useState(null);
  const [isLogin, setIsLogin] = useState(true); // لتحديد ما إذا كان المستخدم في وضع تسجيل الدخول أو إنشاء حساب
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // تسجيل الدخول
      console.log("Logging in with:", email, password);
    } else {
      // إنشاء حساب
      console.log("Signing up with:", email, password, username);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{isLogin ? "Login" : "Sign Up"}</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        {!isLogin && (
          <div style={styles.inputContainer}>
            <span style={styles.icon}>👤</span>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={DynamicStyles(focused).input}
              onFocus={() => setFocused("username")}
              onBlur={() => setFocused(null)}
              required
            />
          </div>
        )}
        <div style={styles.inputContainer}>
          <span style={styles.icon}>✉️</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={DynamicStyles(focused).input}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            required
          />
        </div>
        <div style={styles.inputContainer}>
          <span style={styles.icon}>🔒</span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={DynamicStyles(focused).input}
            onFocus={() => setFocused("password")}
            onBlur={() => setFocused(null)}
            required
          />
        </div>
        <button type="submit" style={DynamicStyles(focused).btn}>
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <p style={styles.toggleText}>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span
          style={styles.toggleLink}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f7fc",
  },
  title: {
    fontSize: "36px",
    marginBottom: "20px",
    color: "#333",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "350px",
    padding: "40px",
    borderRadius: "15px",
    backgroundColor: "#fff",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    padding: "10px",
    border: "2px solid #ddd",
    transition: "all 0.3s ease",
  },
  icon: {
    fontSize: "20px",
    color: "#666",
  },
  input: {
    flex: 1,
    padding: "12px",
    fontSize: "16px",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    transition: "all 0.3s ease",
  },
  inputFocus: {
    borderColor: "#007bff",
    boxShadow: "0 0 12px rgba(0, 123, 255, 0.3)",
  },
  btn: {
    padding: "14px 20px",
    background: "linear-gradient(135deg, #007bff, #0056b3)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "20px",
    fontWeight: "bold",
    letterSpacing: "1px",
    boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
  },
  btnHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 16px rgba(0, 123, 255, 0.4)",
  },
  toggleText: {
    marginTop: "20px",
    color: "#666",
    textAlign: "center",
    fontSize: "14px",
  },
  toggleLink: {
    color: "#007bff",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "underline",
    transition: "all 0.3s ease",
  },
  toggleLinkHover: {
    color: "#0056b3",
  },
};

// تطبيق الأنماط الديناميكية بناءً على حالة التركيز
const DynamicStyles = (focused) => ({
  input: {
    ...styles.input,
    ...(focused ? styles.inputFocus : {}),
  },
  btn: {
    ...styles.btn,
    ...(focused ? styles.btnHover : {}),
  },
  toggleLink: {
    ...styles.toggleLink,
    ...(focused ? styles.toggleLinkHover : {}),
  },
});

export default Login;
