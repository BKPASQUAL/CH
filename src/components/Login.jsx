import React, { useState } from "react";
import "../assets/scss/Login.css";
import { Input, InputGroup } from "rsuite";
import AvatarIcon from "@rsuite/icons/legacy/Avatar";
import "rsuite/dist/rsuite-no-reset.min.css";
import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";
import LockIcon from "@rsuite/icons/legacy/Lock";
import { Button } from "rsuite";

function Login() {
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Trigger a click on the Login button
      document.getElementById("login-button").click();
    }
  };

  return (
    <div className="login-main">
      <div className="login-container">
        <div className="login-container-top">Login</div>
        <div className="login-container-mid">
          <InputGroup style={{ marginBottom: "7%" }}>
            <InputGroup.Addon>
              <AvatarIcon />
            </InputGroup.Addon>
            <Input placeholder="Username" onKeyPress={handleKeyPress} />
          </InputGroup>
          <div className="login-container-mid">
            <InputGroup style={{ marginBottom: "10%" }}>
              <InputGroup.Addon>
                <LockIcon />
              </InputGroup.Addon>
              <Input
                type={visible ? "text" : "password"}
                placeholder="Password"
                onKeyPress={handleKeyPress}
              />
              <InputGroup.Button onClick={handleChange}>
                {visible ? <EyeIcon /> : <EyeSlashIcon />}
              </InputGroup.Button>
            </InputGroup>
          </div>
        </div>
        <div className="login-container-bot">
          <Button
            id="login-button" // Add an ID to the Login button
            appearance="primary"
            style={{ width: "30%", marginBottom: "30%" }}
          >
            Login
          </Button>
          <p>Forgot Password</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
