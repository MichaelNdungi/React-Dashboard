import "./user.css";
import amin from "../admin.jpg";
import {MdPermIdentity, MdOutlineCalendarToday, MdOutlinePhoneAndroid, MdMailOutline, MdLocationSearching, MdFileUpload } from "react-icons/md";
import { Link } from "react-router-dom"
export default function User() {
  return (
    <div className="users">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link>
          <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src={amin} alt="pic" className="userShowImg"/>
              <div className="userShowTopTitle">
                <span className="userShowUsername">Michael ndungi</span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowButton">
              <span className="userShowTitle">Account Details</span>
             


              <div className="userShowInfo">
              <MdPermIdentity className="userShowIcon"/>
              <span className="userShowInfoTitle">michaeldarkstar3</span>
              </div>
              <div className="userShowInfo">
              <MdOutlineCalendarToday className="userShowIcon"/>
              <span className="userShowInfoTitle">11.09.2000</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
              <MdOutlinePhoneAndroid className="userShowIcon"/>
              <span className="userShowInfoTitle">+254701537958</span>
              </div>
              <div className="userShowInfo">
              <MdMailOutline className="userShowIcon"/>
              <span className="userShowInfoTitle">michaelndungi3@gmail.com</span>
              </div>
              <div className="userShowInfo">
              <MdLocationSearching className="userShowIcon"/>
              <span className="userShowInfoTitle">Nairobi | Kenya</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
        <span className="userUpdateTitle">Edit</span>
        <form className="userUpdateForm">
          <div className="userUpdateLeft">
            <div className="userUpdateItem">
              <label>Username</label>
              <input
               type="text" 
              placeholder="michaelDarkstar"
               className="userUpdateInput">

               </input>
            </div>
            <div className="userUpdateItem">
              <label>Full Name</label>
              <input
               type="text" 
              placeholder="Michael Ndungi"
               className="userUpdateInput">
                 
               </input>
            </div>
            <div className="userUpdateItem">
              <label>Email</label>
              <input
               type="Email" 
              placeholder="michaelndungi3@gmail.com"
               className="userUpdateInput">
                 
               </input>
            </div>
            <div className="userUpdateItem">
              <label>Phone</label>
              <input
               type="text" 
              placeholder="+254701537958"
               className="userUpdateInput">
                 
               </input>
            </div>
            <div className="userUpdateItem">
              <label>Address</label>
              <input
               type="text" 
              placeholder="Nairobi | Kenya"
               className="userUpdateInput">
                 
               </input>
            </div>
           
          </div>
          <div className="userUpdateRight">
            <div className="userUpdateUpload">
              <img src={amin} alt="picprof" className="userUpdateImg"
               />
              <label htmlFor="file"><MdFileUpload className="userUpdateIcon"/></label>
              <input type="file" id="file" style={{display:"none"}}/>
            </div>
            <button className="userUpdateButton">Update</button>
          </div>

        </form>

          </div>
        </div>
        </div>
  )
}
