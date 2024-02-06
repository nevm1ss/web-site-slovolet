import {Layout} from "antd";

const contentStyle = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 64px - 67px)',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};
export default function AppContent() {
  return (
    <Layout.Content style = {contentStyle}>
      <p>Content</p>
    </Layout.Content>
  )
}