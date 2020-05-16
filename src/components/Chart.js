// import React, {Component, PureComponent} from 'react';
// import {
//   PieChart, Pie, Sector, Cell,
// } from 'recharts';
//
//
// const COLORS = ['#0088FE', '#FF8042'];
//
// const RADIAN = Math.PI / 180;
//
//
// export default class Chart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: this.props.data
//     };
//     this.dataKey = props.dataKey;
//     this.dataValue = props.dataValue;
//
//     this.renderCustomizedLabel = this.renderCustomizedLabel.bind(this);
//   }
//
//
//     componentDidUpdate(oldProps) {
//       if (this.props.data != oldProps.data) {
//         console.log("component did mount");
//         console.log(this.props);
//         this.setState({data: this.props.data});
//
//       }
//     }
//
//   renderCustomizedLabel(e) {
//     const {cx, cy, midAngle, innerRadius, outerRadius, percent, index} = e;
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5 - 20;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);
//
//     const outX = cx + (outerRadius + 30) * Math.cos(-midAngle * RADIAN);
//     const outY = cy + (outerRadius + 30) * Math.sin(-midAngle * RADIAN);
//
//     console.log("oink")
//     console.log(this.state);
//     const item = this.state.data[index];
//     return <svg>
//       <text x={x} y={y} fill="white" fontSize={14} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" >
//         {`${(percent * 100).toFixed(1)}%`}
//       </text>
//       <text x={outX} y={outY} fontSize={14} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" >
//         {item[this.props.dataKey]}
//       </text>
//     </svg>
//   };
//
//   render() {
//     this.data = this.props.data;
//     this.dataKey = this.props.dataKey;
//     this.dataValue = this.props.dataValue;
//
//     return (
//         <div>
//           <div>Active/Close Restaurants</div>
//           {
//             this.state.data.length > 0 && <PieChart width={200} height={200}>
//               <Pie
//                   cx={100}
//                   cy={100}
//                   label={this.renderCustomizedLabel}
//                   data={this.state.data}
//                   outerRadius={70}
//                   fill="#8884d8"
//                   dataKey={this.dataValue}
//               >
//                 {
//                   this.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>)
//                 }
//               </Pie>
//             }
//             </PieChart>
//           }
//
//         </div>
//     );
//   }
// }
//
