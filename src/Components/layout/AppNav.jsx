import {Menu, theme } from "antd";

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const items = new Array(5).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));
export default function AppNav() {
  return (
    <nav style={navStyle}>
      <p>Logo</p>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items}
        style={{background: 'none', marginLeft: '100px'}}
      />
    </nav>
  )
}