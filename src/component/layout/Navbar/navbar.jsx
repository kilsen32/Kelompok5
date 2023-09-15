import { Dropdown, Space } from "antd";
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
        <input type="text" placeholder="Cari barang...." />
        <div className="nav-button">
          <button onClick={{}}>
            <a href="/src/component/page/Login/login.jsx">Home</a>
          </button>

          <button>
            <a href="">About</a>
          </button>

          <button>
            <a href="/src/component/page/Login/login.jsx">Contact</a>
          </button>
        </div>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <img
                style={{ width: "40px", marginLeft: "25px", marginTop: "8px" }}
                src="https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png"
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
