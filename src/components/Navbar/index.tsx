
import type{ FC } from 'react';
import { MenuNav } from '../Menu';
import { Button,  Select, Avatar, Badge,} from 'antd';
import Search from 'antd/lib/input/Search';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

import logo from '../../assets/logo.svg';
import logoMobile from '../../assets/logoMobile.svg';

const Header = styled.header`
  width: 100%;
  background-color: #ffffffee;
  backdrop-filter: blur(1px);
  position: sticky;
  top: 0;
  padding: 30px 0px;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-areas:' logo search search search wishlist';

  .desktop-logo {
  display: block; 
  }
.mobile-logo {
  display: none; 
}
  .logo {
    grid-area: logo;
    min-width: 203px;
    height: 64px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .wishList {
    grid-area: wishlist;
    display: flex;
    gap: 15px;
  }
.searcAndMenu{
  width: 100%;
  grid-template-columns: span 5;
  grid-area: search;
    display: flex;
    align-items: center;

    .search-bar {
    flex-grow: 1; 
  }
  
  }

 
  .login-signup{
     display: flex;
     gap: 15px;
  }

  @media (max-width: 900px) {
    grid-template-areas:'0.1fr 0.5fr   1fr';
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    padding: 10px 0px;
    .logo {

    min-width: 50px;
    height: 34px;
    .desktop-logo {
    display: none; 
  }

  .mobile-logo {
    display: block; 
  }
}
.search-bar{
  display: none;
}

.wishList {

    gap: 5px;
  }
  .login-signup{
 
     gap: 5px;
  }
  }
`;


const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};


export const Navbar: FC = () => {
  return (
    <>
      <Header>
          <div className="logo">
          <NavLink to="/">
  <img src={logo} alt="" className="desktop-logo" />
  <img src={logoMobile} alt="" className="mobile-logo" />
</NavLink>
          </div>

          <div className='searcAndMenu'>
          <MenuNav />

        <div className="search-bar">
          <Search
        
            placeholder="Search over 30 million book titles..."
            size="large"
            onSearch={(value: string) => {
              console.log('Searched for:', value);
            }}
          />
        </div>
          </div>

        <div className='wishList'>
        <div>
        <Badge count={55}>
        
      <Avatar  size="large" shape='square' style={{background:'#fff', borderRadius:'8px', border:'1px solid gray'}}> <HeartOutlined style={{fontSize: '20px', color:'#000'}}/></Avatar>
    </Badge>
        </div>

     
        <div>
        <Badge count={55}>
        
      <Avatar  size="large" shape='square' style={{background:'#fff', borderRadius:'8px', border:'1px solid gray'}}> <ShoppingCartOutlined style={{fontSize: '20px', color:'#000'}}/></Avatar>
    </Badge>
        </div>
        <div className="login-signup">
         
     
       
          <Button
            style={{ background: '#6C5DD3', color: 'white' }}
            type="primary"
            size={'large'}
          >
            <UserOutlined />
          </Button>
          <Select
            size={'large'}
      defaultValue="en"
      style={{ width: 70 }}
      onChange={handleChange}
      options={[
        { value: 'en', label: 'EN' },
        { value: 'az', label: 'AZ' },

      ]}
    />
       </div>
        </div>
      </Header>
    </>
  );
};
