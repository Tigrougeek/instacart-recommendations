// import React, {Component, useState} from 'react';
// import LinearProgress from '@material-ui/core/LinearProgress';
//
// const HorizontalBarChart = (props) => {
//   const [showAll, setShowAll] = useState(false);
//   const {title, data, dataKey, dataValue, sortBy} = props;
//
//   if (sortBy) {
//       data.sort((r1, r2) => r2[sortBy] - r1[sortBy]);
//   }
//   const sumValue = data.map(r => r[dataValue]).reduce((a, b) => a + b, 0);
//
//   const displayedData = showAll ? data : data.slice(0, 10);
//   return (
//     <div style={{paddingLeft: 40, paddingRight: 50}}>
//         <h3>{title}</h3>
//         <table style={{marginTop: 40}}>
//             <colgroup>
//                 <col />
//                 <col width="120"/>
//                 <col />
//             </colgroup>
//             <tbody>
//             {
//                 displayedData.map(
//                     r =>
//                         <tr key={r[dataKey]}>
//                             <td style={{fontSize: 14}}>{r[dataKey]}</td>
//                             <td><LinearProgress variant="determinate" value={r[dataValue] * 100 / sumValue} /></td>
//                             <td style={{textAlign: 'right', fontSize: 12, color: '#444'}}>{r[dataValue]}</td>
//                         </tr>
//                 )
//             }
//             {
//                 data.length > 10 && <tr>
//                     <td colSpan={3}>
//                         {
//                             showAll
//                                 ? <a style={{color: '#4a4', fontSize: 12}} href='javascript:void(0)' onClick={() => setShowAll(false)}>[-] Collapse</a>
//                                 : <a style={{color: '#4a4', fontSize: 12}} href='javascript:void(0)' onClick={() => setShowAll(true)}>[+] Expand</a>
//                         }
//
//                     </td>
//                 </tr>
//
//             }
//             </tbody>
//         </table>
//     </div>
//   );
// }
//
// export default HorizontalBarChart;
//
//
//
