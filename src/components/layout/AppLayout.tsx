import { Layout } from 'antd'
import { useState } from 'react'
import Sidebar from './Sidebar'
import AppFooter from './Footer'
import { Outlet } from 'react-router-dom'

const { Content } = Layout

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <Layout>
        <Content
          style={{
            padding: 24,
            marginTop: 64, 
            overflow: 'auto',
          }}
        >
          <Outlet />
        </Content>

        <AppFooter />
      </Layout>
    </Layout>
  )
}

export default AppLayout
