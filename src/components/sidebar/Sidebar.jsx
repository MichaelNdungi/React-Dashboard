import React from 'react';
import "./Sidebar.css";
import {MdLineStyle,MdOutlineReport,MdCases,MdOutlineMessage,MdMarkAsUnread,MdTimeline,MdAlignVerticalBottom,MdAttachMoney, MdTrendingUp,MdPersonOutline,MdProductionQuantityLimits} from "react-icons/md"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <li className="sidebarListItem active">
              <MdLineStyle className='sidebarIcon'/>
              Home

            </li>
            <li className="sidebarListItem ">
              <MdTimeline className='sidebarIcon'/>
              Analytics

            </li>
            <li className="sidebarListItem">
              <MdTrendingUp className='sidebarIcon'/>
              Sales

            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <li className="sidebarListItem ">
              <MdPersonOutline className='sidebarIcon'/>
              Users

            </li>
            <li className="sidebarListItem ">
              <MdProductionQuantityLimits className='sidebarIcon'/>
              Products

            </li>
            <li className="sidebarListItem">
              <MdAttachMoney className='sidebarIcon'/>
              Transactions

            </li>
            <li className="sidebarListItem">
              <MdAlignVerticalBottom className='sidebarIcon'/>
              Reports

            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notification</h3>
          <ul className='sidebarList'>
            <li className="sidebarListItem">
              <MdMarkAsUnread className='sidebarIcon'/>
            Mail

            </li>
            <li className="sidebarListItem ">
              <MdTimeline className='sidebarIcon'/>
              Feedback

            </li>
            <li className="sidebarListItem">
              <MdOutlineMessage className='sidebarIcon'/>
              Messages

            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className="sidebarListItem">
              <MdCases className='sidebarIcon'/>
              Manage

            </li>
            <li className="sidebarListItem ">
              <MdTimeline className='sidebarIcon'/>
              Analytics

            </li>
            <li className="sidebarListItem">
              <MdOutlineReport className='sidebarIcon'/>
              Reports

            </li>
          </ul>
        </div>
      </div>


    </div>
  )
  }

