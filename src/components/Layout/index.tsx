import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import {Navbar} from '../Navbar'
import styled from 'styled-components'
const Main =styled.main`
    width: 90%;
    margin:  auto;
    @media (max-width: 768px) {
        margin:  auto;
    }
`


export const Layout = () => {
  return (
    <>
    <Main>
    <Navbar />

      <Outlet/>
    <Footer />
    </Main>
    </>
  )
}
