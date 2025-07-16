import { Layout as AntLayout, Menu, Button } from 'antd';
import { Link, Outlet, useLocation } from 'react-router-dom';

const { Header, Content } = AntLayout;

const items = [
  { label: <Link to="/">Home</Link>, key: '/' },
  { label: <Link to="/society">Society</Link>, key: '/society' },
];

const logoStyle: React.CSSProperties = {
  fontWeight: 'bold',
  fontSize: 22,
  color: '#1677ff',
  letterSpacing: 1,
  marginRight: 32,
};

const Layout = () => {
  const location = useLocation();
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center', background: 'linear-gradient(90deg, #e3ffe6 0%, #f7faff 100%)', boxShadow: '0 2px 8px #f0f1f2', padding: '0 32px' }}>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=48&q=80" alt="Logo" style={{ height: 40, borderRadius: 8, marginRight: 16 }} />
        <div style={logoStyle}>Krishna Devs</div>
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={items}
          style={{ flex: 1, justifyContent: 'center', borderBottom: 'none', background: 'transparent', fontWeight: 500, fontSize: 16 }}
        />
        <Button type="primary" shape="round" size="large" style={{ marginLeft: 24 }}>
          Contact Us
        </Button>
      </Header>
      <Content style={{ background: '#fff' }}>
        <Outlet />
      </Content>
    </AntLayout>
  );
};

export default Layout; 