import {Layout} from "antd";
import AppNav from "./AppNav.jsx";

const headerStyle = {
  disable: 'flex',
  justifyContent: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
export default function AppContent() {
  return (
    <Layout.Header style={headerStyle}>

      <AppNav />
    </Layout.Header>
  )
}