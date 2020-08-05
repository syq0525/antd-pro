
import React, { PureComponent } from 'react';
import { PageContainer,PageHeaderWrapper } from '@ant-design/pro-layout';
import {
	Card,
	Spin,
} from 'antd';
class ceshiList extends PureComponent {
  constructor(props) {
		super(props);
		this.state = {};
  }
  render(){
    return (
      <PageHeaderWrapper>
        <Spin spinning={false}>
					<Card>11111111111</Card>
        </Spin>
      </PageHeaderWrapper>
    )
  }
}

export default ceshiList;