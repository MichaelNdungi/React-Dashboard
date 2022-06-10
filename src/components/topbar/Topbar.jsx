import React from 'react';
import "./Topbar.css";
import amin from "../admin.jpg"

import { MdSettingsApplications,MdEditNotifications,MdLanguage} from "react-icons/md";




export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className="topLeft">
                <span className="logo">admin</span>


                </div>
            <div className='topRight'>
                <div className='topbarIconContainer'>
                <MdEditNotifications/> 
                <span className="topIconBagde">2</span>
                </div>
                <div className='topbarIconContainer'>
               <MdLanguage/>
               
                </div>
                <div className='topbarIconContainer'>
                < MdSettingsApplications/>
              
                </div>
                <img src={amin} className='topAvatar'/>
                </div>
        </div>
  
    </div>
  )
}
