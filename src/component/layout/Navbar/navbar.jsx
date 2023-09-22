import { Dropdown, Space } from "antd";
import { ShoppingCartOutlined, MessageOutlined } from "@ant-design/icons";
const items = [
  {
    label: <a href="/">Login</a>,
    key: "0",
  },
  {
    label: <a href="/register">Register</a>,
    key: "1",
  },
];

function Navbar() {
  return (
    <>
      <nav>
        <h1>Toko Ku</h1>
        <input
          style={{ marginTop: "20px", marginLeft: "115px" }}
          type="text"
          placeholder="Cari barang...."
        />
        <div className="nav-button" style={{ marginTop: "10px" }}>
          <a
            href="/keranjang"
            style={{ fontSize: "30px", marginLeft: "250px" }}
          >
            <ShoppingCartOutlined />
          </a>

          <a
            href="/src/component/page/Login/login.jsx"
            style={{ fontSize: "28px", marginLeft: "15px" }}
          >
            <MessageOutlined />
          </a>
        </div>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a style={{ marginLeft: "85px" }} onClick={(e) => e.preventDefault()}>
            <Space>
              <img
                style={{ width: "40px", marginTop: "15px" }}
                src="https://cdn-icons-png.flaticon.com/512/219/219988.png"
                alt=""
              />
            </Space>
          </a>
        </Dropdown>
      </nav>
    </>
  );
}

export default Navbar;
