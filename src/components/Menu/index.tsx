import { FC, useState, useEffect } from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const { SubMenu, Item } = Menu;

export const MenuNav: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [menuWidth, setMenuWidth] = useState<string>('130px'); // Default width

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 900) {
        setMenuWidth('80px'); // Set the width for smaller screens
      } else {
        setMenuWidth('130px'); // Set the width for larger screens
      }
    };

    // Add an event listener to handle window resize
    window.addEventListener('resize', handleWindowResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []); // Empty dependency array means this effect runs once on component mount

  const style = {
    width: menuWidth, // Use the dynamically calculated menu width
    padding: 'unset',
    margin: 'unset',
  };

  return (
    <Menu
      style={style}
      mode="inline"
      openKeys={isMenuOpen ? ['sub1'] : []}
      onClick={handleCloseMenu}
      onOpenChange={handleMenuClick}
      triggerSubMenuAction="click"
    >
      <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Menu">
        <Item
          key="1"
          style={{
            background: '#fff',
            width: '120px',
            position: 'absolute',
            top: '70px',
            zIndex: '1',
          }}
        >
          <NavLink to="/">Home</NavLink>
        </Item>
        <Item
          key="2"
          style={{
            background: '#fff',
            width: '120px',
            top: '100px',
            position: 'absolute',
            zIndex: '1',
          }}
        >
          <NavLink to="/booklist">Book List</NavLink>
        </Item>
      </SubMenu>
    </Menu>
  );
};
