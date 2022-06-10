import'./chart.css';
import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class chart extends React.Component {

    data = [
        {
            "name": "Jan 2022",
            "Product A": 3432,
            "Procuct B": 2342
        },
        {
            "name": "Feb 2022",
            "Product A": 2342,
            "Procuct B": 3246
        },
        {
            "name": "Mar 2022",
            "Product A": 4565,
            "Procuct B": 4556
        },
        {
            "name": "Apr 2022",
            "Product A": 6654,
            "Procuct B": 4465
        },
        {
            "name": "May 2022",
            "Product A": 7765,
            "Procuct B": 3553
        },
        {
          "name": "June 2022",
          "Product A": 8765,
          "Procuct B": 4553
      },
      {
        "name": "July 2022",
        "Product A": 6865,
        "Procuct B": 2553
    },
    {
      "name": "August 2022",
      "Product A": 8765,
      "Procuct B": 4553
  }

    ]

    render() {
        return (
          <div className='chart'>
                <h3 className='chartTitle'>Analytics</h3>
            <LineChart width={730} height={250} data={this.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Product A" stroke="#0095FF" />
                <Line type="monotone" dataKey="Procuct B" stroke="#FF0000" />
            </LineChart>
            </div>
        )
    };
}

export default chart;


// import { LineChart,
//    Line,
//     XAxis, 
//     YAxis, 
//     CartesianGrid,
//      Tooltip, 
//      Legend,
//       ResponsiveContainer
//      } from 'recharts';


  

// export default function Chart(title,data,dataKey,grid) {

    
//   return (
//     <div className='chart'>
//         <h3 className='chartTitle'>{title}</h3>
//         < ResponsiveContainer width="100%" aspect={4/1}>

//         <LineChart
//           data={data}
//          >
//             <XAxis dataKey="name" stroke='"#5550bd"' ></XAxis>
//             <Line type="monotone" datakey={dataKey} stroke="#5550bd"/>
//             <Tooltip/>
//            {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>}


//                </LineChart>


//         </ResponsiveContainer>


//     </div>
//   )
// }
