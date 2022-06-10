import "./featuredinfo.css";
import {MdSouth,MdNorth} from "react-icons/md";
export default function featuredinfo()

{
    return(

        <div className="featured">
            <div className="featuredItem">

            <span className=" featuredTitle" >Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">Ksh2,415</span>
                <span className="featuredMoneyRate">-11.4
               <MdSouth className="featuredIcon-negative"/>
                </span>
            </div>
            <span className="featuredSub">Compare to last month</span>
            </div>
            <div className="featuredItem">

<span className=" featuredTitle" >Sales</span>
<div className="featuredMoneyContainer">
    <span className="featuredMoney">Ksh4,415</span>
    <span className="featuredMoneyRate">-1.4
   <MdSouth className="featuredIcon-negative"/>
    </span>
</div>
<span className="featuredSub">Compare to last month</span>
</div>
<div className="featuredItem">

<span className=" featuredTitle"> Cost </span>
<div className="featuredMoneyContainer">
    <span className="featuredMoney">Ksh2,225</span>
    <span className="featuredMoneyRate">+4.4
   <MdNorth className="featuredIcon"/>
    </span>
</div>
<span className="featuredSub">Compare to last month</span>
</div>
        </div>
        

    )



}