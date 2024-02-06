import {Layout, Flex} from 'antd';
import AppHeader from "./AppHeader.jsx";
import AppContent from "./AppContent.jsx";
import AppFooter from "./AppFooter.jsx";

export default function AppLayout() {
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout>
        <AppHeader />
        <AppContent />
        <AppFooter />
      </Layout>
    </Flex>
  )
}
