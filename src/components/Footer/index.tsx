import styled from "styled-components"
import Logo from '../../assets/logo.svg'
import {
  EnvironmentOutlined,
  FacebookFilled, 
  InstagramFilled, 
  LinkedinFilled, 
  MailOutlined, 
  PhoneOutlined, 
  TwitterOutlined, 
  YoutubeFilled,
} from "@ant-design/icons"
import { Link } from "react-router-dom"
import { MapComponent } from "../Map"






const FooterSection = styled.footer`
margin: 30px 0 30px 0;
  display: grid;
  gap: 25px;

  grid-template-columns: 2fr 2fr 1fr 2fr;
  .socialAndLogo{
    display: flex;
    flex-direction: column;
    gap: 25px;
  p{
    font-family: Open Sans;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: #11142d;
  }

  .social{
    display: flex;
    justify-content: space-between;
    span{
      display: flex;
      justify-content: center;
      width: 54px;
      height: 54px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 8px;
     cursor: pointer;
    }
  }
}
h3{
    font-family: Open Sans;
font-size: 20px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0em;
text-align: left;

color: #11142d;
  }
  /* .categories{
    display: flex;
    flex-direction: column;
    
  } */

.list{
  display: flex;
  gap: 25px;
  font-family:Open Sans;
font-size: 18px;
font-weight: 600;
line-height: 41px;
letter-spacing: 0em;
text-align: left;
color: #11142d;
}

@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
        grid-template-columns: 1fr;
        grid-area: auto;
    }
`

export const Footer = () => {
  return (
    <>
      <FooterSection>
        <div className="socialAndLogo">
          <div><img src={Logo} alt="" /></div>
          <div>
            <p>Bookoe is a Book Store Website lorem
               ipsum dolor sit amet, consectetur adipiscing 
               elit, sed do eiusmod tempor incididunt ut labore 
               et dolore magna aliqua. Ut enim ad minim veniam, 
               quis nostrud</p>
          </div>
          <div>
            <h3>Follow Us</h3>
            <br />
            <div className="social">
            <span><FacebookFilled style={{color: '#1e33e5', fontSize:'30px', }}/></span>
            <span><YoutubeFilled style={{color: '#ff2a2a', fontSize:'30px', }}/></span>
            <span><TwitterOutlined style={{color: '#3cb5db', fontSize:'30px', }} /></span>
            <span><LinkedinFilled style={{color: '#286fa3', fontSize:'30px', }}/></span>
            <span><InstagramFilled style={{color: ' #fd3e77', fontSize:'30px', }}/></span>

            </div>
          </div>
        </div>
        <div className="categories">
          <h3>Books Categories</h3>
          <br />
          <br />
          <br />
          <div className="list">
            <ul>
              <li>Action</li>
              
              <li>Advanture</li>
              
              <li>Comedy</li>
              
              <li>Crime</li>
              
              <li>Drama</li>
              
              <li>Fantasy</li>
              
              <li>Horror</li>
            </ul>
            <ul>
              <li>Law</li>
              <li>Mystrey</li>
              <li>Professional</li>
              <li>Romance</li>
              <li>TV Series</li>
              <li>Horror</li>
              <li style={{
                color:'#6c5dd3'
              }}><Link to='/booklist'>View moore</Link></li>
            </ul>
          </div>
        </div>
        <div className="links">
          <h3>Quick Links</h3>
          <br />
          <br />
          <br />
          <div className="list">
            <ul>
              <li>About us</li>
              
              <li>Contact us</li>
              
              <li>Products</li>
              
              <li>Login</li>
              
              <li>Sign up</li>
              
              <li>FAQ</li>
              
              <li>Shipment</li>
            </ul>

          </div>
        </div>
        <div className="store">
          <h3>Our Store</h3>
          <br />
          <br />
          <br />
          <div className="list">
            <ul>
              <li>
                <MapComponent />
              </li>
              
              <li> <EnvironmentOutlined
              style={{
                color:'#6c5dd3',
                fontSize:'25px'
              }}
              /> 832  Thompson Drive, San Fransisco
CA 94107, United States</li>
              
              <li><PhoneOutlined
                            style={{
                              color:'#6c5dd3',
                              fontSize:'25px'
                            }}
              /> +123 345123 556</li>
              
              <li><MailOutlined
                            style={{
                              color:'#6c5dd3',
                              fontSize:'25px'
                            }} /> support@bookoe.id</li>
              
             
            </ul>

          </div>
        </div>

      </FooterSection>

    </>
  )
}
