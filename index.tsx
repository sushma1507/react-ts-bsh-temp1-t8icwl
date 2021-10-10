import React from "react";
import ReactDOM from "react-dom";
import { Menu } from "antd";
import "./style.scss";
import "antd/dist/antd.css";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";

interface INavNames {
  name: Array<string>;
}

const App = () => {
  const navList: INavNames = { name: ["nav1", "nav2", "nav3"] };

  return (
    <React.Fragment>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={"2"}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          {navList.name[0]}
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          {navList.name[1]}
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          {navList.name[2]}
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
