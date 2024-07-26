import React, { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { ROUTER_BASE } from '../../../router/router.constant';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Xử lý logic đăng nhập ở đây
    console.log('Username:', username);
    console.log('Password:', password);
    // Ví dụ: Gửi dữ liệu đến server

    
    navigate(
      `${ROUTER_BASE.templateUi.path}`
    )
  };

  return (
    <div id="login__page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
