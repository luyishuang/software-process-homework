import React, { Component } from 'react'

// import { PickerView, WhiteSpace } from 'antd-mobile';

// const seasons = [
//   [
//     {
//       label: '2013',
//       value: '2013',
//     },
//     {
//       label: '2014',
//       value: '2014',
//     },
//   ],
//   [
//     {
//       label: '春',
//       value: '春',
//     },
//     {
//       label: '夏',
//       value: '夏',
//     },
//   ],
// ];

// const season = [
//   {
//     label: '春',
//     value: '春',
//   },
//   {
//     label: '夏',
//     value: '夏',
//   },
// ];

// const province = [
//   {
//     label: '北京',
//     value: '01'
//   },
//   {
//     label: '浙江',
//     value: '02',
//   },
//   {
//     label: '北',
//     value: '03'
//   },
//   {
//     label: '浙',
//     value: '04',
//   },
//   {
//     label: '京',
//     value: '05'
//   },
//   {
//     label: '江',
//     value: '06',
//   },
// ];

// export default class Casecade extends Component {
//     state = {
//     value: [],
//   };
//   onChange = (value) => {
//     console.log(value);
//     this.setState((state)=>{
//       return {
//           value:value
//       }
//     },()=>{
//         province.map((item)=>{
//             console.log(item);
//             if(item.value === this.state.value[0]){
//                 this.props.getvalue(item.label);
//             }
//         })
//     });
    
//   }
// //   onScrollChange = (value) => {
// //     console.log(value);
// //   }
//   render() {
//     return (
//       <div>
//         {/* <PickerView
//           onChange={this.onChange}
//         //   onScrollChange={this.onScrollChange}
//             value={this.state.value}
//           data={seasons}
//           cascade={false}
//         /> */}
//         <PickerView
//         onChange={this.onChange}
//         // onScrollChange={this.onScrollChange}
//         data={province}
//         value={this.state.value}
//         cascade={false}
//         />
//       </div>
//     );
//   }
// }
import { Picker, List, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';

// import { district, provinceLite } from 'antd-mobile-demo-data';

// 如果不是使用 List.Item 作为 children
// const CustomChildren = props => (
//   <div
//     onClick={props.onClick}
//     style={{ backgroundColor: '#fff', paddingLeft: 15 }}
//   >
//     <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
//       <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
//       <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
//     </div>
//   </div>
// );
const initialcity="北京市";
const district=[
  {
    label: '北京',
    value: '北京',
    children:[
      {
        label: '北京市',
        value: '北京市',
      }
    ]
  },
  {
    label: '陕西省',
    value: '陕西省',
    children:[
      {
        label: '西安',
        value: '西安',
      }
    ]
  }
];
const provinceLite=[
  [
    {
    label: '2013',
    value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
    label: '2010',
    value: '2010',
    },
    {
      label: '2019',
      value: '2019',
    },
  ]
  
];
// const seasons = [
//   [
//     {
//       label: '2013',
//       value: '2013',
//     },
//     {
//       label: '2014',
//       value: '2014',
//     },
//   ],
//   [
//     {
//       label: '春',
//       value: '春',
//     },
//     {
//       label: '夏',
//       value: '夏',
//     },
//   ],
// ];

const colorStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  width: '16px',
  height: '16px',
  marginRight: '10px',
};

// const colors = [
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle, backgroundColor: '#FF0000' }}
//       />
//       <span>红色</span>
//     </div>),
//     value: '#FF0000',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle, backgroundColor: '#00FF00' }}
//       />
//       <span>绿色</span>
//     </div>),
//     value: '#00FF00',
//   },
//   {
//     label:
//     (<div>
//       <span
//         style={{ ...colorStyle, backgroundColor: '#0000FF' }}
//       />
//       <span>蓝色</span>
//     </div>),
//     value: '#0000FF',
//   },
// ];

class Test extends React.Component {
  state = {
    data: [],
    cols: 1,
    pickerValue: [],
    // asyncValue: [],
    // sValue: ['2013', '春'],
    // visible: false,
    // colorValue: ['#00FF00'],
  };
  onClick = () => {
    setTimeout(() => {
      this.setState({
        data: provinceLite,
      });
    }, 120);
  };
  onPickerChange = (val) => {
    console.log(val);
    let colNum = 1;
    const d = [...this.state.data];
    const asyncValue = [...val];
    if (val[0] === 'zj') {
      d.forEach((i) => {
        if (i.value === 'zj') {
          colNum = 2;
          if (!i.children) {
            i.children = [{
              value: 'zj-nb',
              label: '宁波',
            }, {
              value: 'zj-hz',
              label: '杭州',
            }];
            asyncValue.push('zj-nb');
          } else if (val[1] === 'zj-hz') {
            i.children.forEach((j) => {
              if (j.value === 'zj-hz') {
                j.children = [{
                  value: 'zj-hz-xh',
                  label: '西湖区',
                }];
                asyncValue.push('zj-hz-xh');
              }
            });
            colNum = 3;
          }
        }
      });
    } else {
      colNum = 1;
    }
    this.setState({
      data: d,
      cols: colNum,
      asyncValue,
    });
  };
  getSel() {
    const value = this.state.pickerValue;
    if (!value) {
      return '';
    }
    const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
    return treeChildren.map(v => v.label).join(',');
  }
  // setVal() {
  //   this.props.form.setFieldsValue({
  //     district: ['340000', '340800', '340822'],
  //   });
  // },
  componentDidMount(){
    this.props.getvalue(initialcity);
  }
  

  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <WhiteSpace size="lg" />
      <List style={{ backgroundColor: 'white' }} className="picker-list">
        <Picker 
        // extra="请选择(可选)"
          extra="北京"
          data={district}
          title="城市"
          {...getFieldProps('district', {
            initialValue: ['北京','北京市'],
          })}
          // onOk={e => console.log('ok', e)}
          onOk={e => this.props.getvalue(e[1])}
          onDismiss={e => console.log('dismiss', e)}
        >
          <List.Item arrow="horizontal">切换城市</List.Item>
        </Picker>
      </List>
    </div>);
  }
}

const TestWrapper = createForm()(Test);
export default TestWrapper;