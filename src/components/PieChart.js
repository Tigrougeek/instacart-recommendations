// import React, { Component } from 'react';
// import {RadialChart} from 'react-vis';
//
// const PieChart = (props) => {
//     console.log("==="+props.data+"====")
//  console.log(props.data)
//   const {data, dataKey, dataValue, title} = props;
//   const sumValue = data.map(r => r[dataValue]).reduce((a, b) => a + b, 0);
//   const pieData = data.map(
//       r => ({
//         angle: r[dataValue] * 360 / sumValue,
//         label: r[dataKey],
//         value: r[dataValue]
//       })
//   );
//   return (
//     <div style={{paddingRight: 50, paddingLeft: 230}}>
//         <h3 style={{paddingLeft:40}}>{title}</h3>
//         <RadialChart
//           data={pieData}
//           width={270}
//           height={270}
//           labelsAboveChildren={true}
//           showLabels={true}
//           labelsStyle={{color: 'red', fontSize: 14}}
//           getLabel={r => r.value + " -" + r.label}
//         />
//     </div>
//   );
// }
//
// export default PieChart;
//
//
//
