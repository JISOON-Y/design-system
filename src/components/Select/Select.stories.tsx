import { Meta, StoryFn } from '@storybook/react';
import { neutral } from '../../styles/color';
import Select, { SelectProps } from './Select';
import Flex from '../Flex/Flex';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg'],
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: ['outline', 'field', 'flushed', 'unStyled'],
      },
    },
  },
} as Meta;

const Template: StoryFn<typeof Select> = args => <Select {...args}></Select>;

const options = ['Option 1', 'Option 2', 'Option 3'];
const getSelectedValue = (value: string) =>
  console.log('get select value => ', value);

export const Basic = Template.bind({});
Basic.args = {
  size: 'md',
  variant: 'outline',
  options: options,
  borderColor: `${neutral['200']}`,
};

export const BySize: StoryFn<SelectProps> = args => (
  <Flex gap={16} flexDirection="column" alignItems="normal">
    <Select size="sm" options={options} getSelectedValue={getSelectedValue} />
    <Select size="md" options={options} getSelectedValue={getSelectedValue} />
    <Select size="lg" options={options} getSelectedValue={getSelectedValue} />
  </Flex>
);

export const ByVariant: StoryFn<SelectProps> = args => (
  <Flex gap={16} flexDirection="column" alignItems="normal">
    <Select options={options} getSelectedValue={getSelectedValue} />
    <Select
      variant="field"
      options={options}
      getSelectedValue={getSelectedValue}
    />
    <Select
      variant="flushed"
      options={options}
      getSelectedValue={getSelectedValue}
    />
    <Select
      variant="unStyled"
      options={options}
      getSelectedValue={getSelectedValue}
    />
  </Flex>
);
