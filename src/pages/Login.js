
import { useState } from 'react';
import { Auth } from '../components/Auth';
import Cookies from 'universal-cookie'
import { LogoutButton } from '@/components/LogoutButton';

export default function Home() {
    
  const cookie = new Cookies();
  const [isAuth, setIsAuth] = useState(cookie.get("auth-token"));

      
  return (


    <>
  
  you are logged in sucsessfully
  <LogoutButton/>
  </>


  )
}
