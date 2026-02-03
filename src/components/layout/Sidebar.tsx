import { Layout, Menu, Switch, Avatar, Typography } from 'antd'
import {
  AppstoreOutlined,
  ShoppingOutlined,
  OrderedListOutlined,
  BellOutlined,
  LogoutOutlined,
  BulbOutlined,
} from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'

const { Sider } = Layout
const { Text } = Typography

interface Props {
  collapsed: boolean
  setCollapsed: (value: boolean) => void
}


const Sidebar = ({ collapsed, setCollapsed }: Props) => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Sider
     collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      breakpoint="lg"       
      collapsedWidth={80}  
      width={240}
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
         display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #f0f0f0',
      }}

      theme="light"
    >
      {/* Logo */}
      <div
        style={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: 18,
        }}
      >
        🟣 BIRD BOX
      </div>

      {/* Main Menu */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={({ key }) => navigate(key)}
          items={[
            {
              key: '/dashboard',
              icon: <AppstoreOutlined />,
              label: 'Dashboard',
            },
            {
              type: 'group',
              label: 'ORDER',
              children: [
                {
                  key: '/products',
                  icon: <ShoppingOutlined />,
                  label: 'Product List',
                },
                {
                  key: '/orders',
                  icon: <OrderedListOutlined />,
                  label: 'Order List',
                },
              ],
            },
            {
              type: 'group',
              label: 'SYSTEM',
              children: [
                {
                  key: '/notifications',
                  icon: <BellOutlined />,
                  label: 'Notifications',
                },
                {
                  key: 'dark-mode',
                  icon: <BulbOutlined />,
                  label: (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      Dark Mode
                      <Switch size="small" disabled />
                    </div>
                  ),
                },
              ],
            },
          ]}
        />
      </div>

      {/* Profile Section */}
      <div
        style={{
          padding: 16,
          borderTop: '1px solid #f0f0f0',
          position: 'fixed',
          bottom: '10px',
          width: collapsed ? 50 : 240
        }}
      >
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Avatar src="https://i.pravatar.cc/40" />
          {!collapsed && (
             <div>
            <Text strong>Mia Smith</Text>
            <br />
            <Text type="secondary">Vendor</Text>
          </div>
          )}
         
        </div>

        <div
          style={{
            marginTop: 12,
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            color: '#ff4d4f',
          }}
        >
          <LogoutOutlined />
          { !collapsed && (<span style={{ marginLeft: 8 }}>Log Out</span>)}
        </div>
      </div>
    </Sider>
  )
}

export default Sidebar
