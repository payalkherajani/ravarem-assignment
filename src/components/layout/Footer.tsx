import { Layout, Space, Select } from 'antd'

const { Footer } = Layout

const AppFooter = () => {
  return (
    <Footer
      style={{
        background: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid #f0f0f0',
      }}
    >
      <Space>
        <span>©2025 Send365. All Right Reserved</span>
        <a href="#">Privacy Policy</a>
        <span>Version 2.8.1</span>
      </Space>

      <Select
        defaultValue="en"
        options={[
          { value: 'en', label: 'English' },
          { value: 'fr', label: 'French' },
        ]}
        style={{ width: 120 }}
      />
    </Footer>
  )
}

export default AppFooter
