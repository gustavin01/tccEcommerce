import { Helmet } from "react-helmet";
import "./admLoginStyle.css";
import { FaLock, FaLockOpen, FaUserTie, FaUser } from 'react-icons/fa';
import Navbar from "../navbar";

export default function AdmLogin() {
  return (
    <><Navbar/>
      <form action={"homeadm"}>
        <h2><span class="entypo-login"><FaUserTie/></span> Login</h2>
        <button class="submit" className="buttonLogin"><span class="entypo-lock"><FaLockOpen/></span></button>
        
        <span class="entypo-user inputUserIcon"><FaUser /></span>
        <input type="text" class="user" placeholder="ursername"/>

        <span class="entypo-key inputPassIcon"><FaLock/></span>
        <input type="password" class="pass"placeholder="password"/>
      </form>

      <Helmet>
          <script type="text/javascript">
              {`
                $(".user").focusin(function(){
                  $(".inputUserIcon").css("color", "#e74c3c");
                  }).focusout(function(){
                  $(".inputUserIcon").css("color", "white");
                  });
          
                  $(".pass").focusin(function(){
                  $(".inputPassIcon").css("color", "#e74c3c");
                  }).focusout(function(){
                  $(".inputPassIcon").css("color", "white");
                  });
              `}
          </script>
      </Helmet>
    </>
  );
}
