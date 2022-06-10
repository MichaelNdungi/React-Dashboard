import "./widgetSm.css";
import amin from "../admin.jpg";
import {MdVisibility} from "react-icons/md";



export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src={amin} className="widgetSmImg"></img>
                <div className="widgetSmUser">
                <span className="widgetSmUsername">Mike Ndungi</span>
                <span className="widgetSmUsernTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <MdVisibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={amin} className="widgetSmImg"></img>
                <div className="widgetSmUser">
                <span className="widgetSmUsername">Mike Ndungi</span>
                <span className="widgetSmUsernTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <MdVisibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={amin} className="widgetSmImg"></img>
                <div className="widgetSmUser">
                <span className="widgetSmUsername">Mike Ndungi</span>
                <span className="widgetSmUsernTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <MdVisibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={amin} className="widgetSmImg"></img>
                <div className="widgetSmUser">
                <span className="widgetSmUsername">Mike Ndungi</span>
                <span className="widgetSmUsernTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <MdVisibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src={amin} className="widgetSmImg"></img>
                <div className="widgetSmUser">
                <span className="widgetSmUsername">Mike Ndungi</span>
                <span className="widgetSmUsernTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <MdVisibility className="widgetSmIcon"/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
