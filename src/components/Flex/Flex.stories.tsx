import { Meta, StoryFn } from '@storybook/react';
import Flex, { FlexProps } from './Flex';
import Box from '../Box/Box';
import { PropsWithChildren } from 'react';

export default {
  title: 'Components/Flex', // story 이름
  component: Flex,
} as Meta;

const Template: StoryFn<PropsWithChildren<FlexProps>> = args => (
  <Flex {...args} />
);

const BoxChild = () => {
  return (
    <>
      <Box width={200} height={200} backgroundColor="red" borderRadius={10} />
      <Box
        width={180}
        height={180}
        backgroundColor="orange"
        borderRadius={10}
      />
      <Box
        width={160}
        height={160}
        backgroundColor="yellow"
        borderRadius={10}
      />
      <Box width={140} height={140} backgroundColor="green" borderRadius={10} />
      <Box width={120} height={120} backgroundColor="blue" borderRadius={10} />
    </>
  );
};

export const Vertical = Template.bind({});
Vertical.args = {
  flexDirection: 'column',
  height: 800,
  gap: 10,
  children: BoxChild(),
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  width: 800,
  gap: 20,
  children: BoxChild(),
};
