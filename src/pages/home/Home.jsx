import"./home.css";
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
import Chart from "../../components/chart/Chart";
import{userData } from "../../dummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
export default function Home(){
    return(
        <div className="home"> 
        <Featuredinfo/>         
        <Chart/>
        {/* <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> */}
        <div className="homeWidget">
        <WidgetLg/>
        <WidgetSm/>
            
          
        </div>

        </div>
    );
};