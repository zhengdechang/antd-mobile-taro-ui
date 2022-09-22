import React, { useState } from 'react';
import { Radio, Space } from 'antd-mobile-taro-ui';
import { DemoBlock } from 'demos';
import { View } from '@tarojs/components';
// import { SmileOutline, SmileFill } from 'antd-mobile-icons'

export default () => {
  const [value, setValue] = useState<string>();
  return (
    <>
      <DemoBlock title='基础用法'>
        <Space direction='vertical'>
          <View
            onClick={() => {
              console.log('点击了');
            }}
          >
            <Radio />
          </View>
          <Radio>有描述的单选框</Radio>
        </Space>
      </DemoBlock>

      <DemoBlock title='默认选中'>
        <Radio defaultChecked>默认选中</Radio>
      </DemoBlock>

      <DemoBlock title='占满整行宽度'>
        <Space direction='vertical' block>
          <Radio block>块级元素</Radio>
          <Radio>非块级元素</Radio>
        </Space>
      </DemoBlock>

      <DemoBlock title='单选'>
        <Radio.Group
          value={value}
          onChange={val => {
            setValue(val as string);
          }}
        >
          <Space direction='vertical'>
            <Radio
              value='radio1'
              // icon={checked =>
              //   checked ? (
              //     <SmileFill style={{ color: 'var(--adm-color-primary)' }} />
              //   ) : (
              //     <SmileOutline style={{ color: 'var(--adm-color-weak)' }} />
              //   )
              // }
            >
              单选框一
            </Radio>
            <Radio
              value='radio2'
              // icon={checked =>
              //   checked ? (
              //     <SmileFill style={{ color: 'var(--adm-color-primary)' }} />
              //   ) : (
              //     <SmileOutline style={{ color: 'var(--adm-color-weak)' }} />
              //   )
              // }
            >
              单选框二
            </Radio>
          </Space>
        </Radio.Group>
      </DemoBlock>

      <DemoBlock title='自定义大小'>
        <Radio
          style={{
            '--icon-size': '18px',
            '--font-size': '14px',
            '--gap': '6px',
          }}
        >
          小号的单选框
        </Radio>
      </DemoBlock>

      <DemoBlock title='禁用状态'>
        <Radio defaultChecked disabled>
          禁用状态
        </Radio>
      </DemoBlock>
    </>
  );
};
