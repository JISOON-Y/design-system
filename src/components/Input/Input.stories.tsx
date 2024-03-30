import { Meta, StoryFn } from '@storybook/react';
import Input, { InputProps } from './Input';
import { neutral, red } from '../../styles/color';
import Flex from '../Flex/Flex';

export default {
  title: 'Components/Input',
  component: Input,
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

const Template: StoryFn<typeof Input> = args => <Input {...args}></Input>;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Basic placeholder',
  size: 'md',
  variant: 'outline',
  borderColor: `${neutral['200']}`,
};

export const BySize: StoryFn<InputProps> = args => (
  <Flex gap={16} flexDirection="column" alignItems="normal">
    <Input {...args} placeholder="Small size placeholder" size="sm" />
    <Input {...args} placeholder="Medium size placeholder" size="md" />
    <Input {...args} placeholder="Large size placeholder" size="lg" />
  </Flex>
);

export const ByVariant: StoryFn<InputProps> = args => (
  <Flex gap={16} flexDirection="column" alignItems="normal">
    <Input {...args} placeholder="Outline style placeholder" />
    <Input {...args} placeholder="Field style placeholder" variant="field" />
    <Input
      {...args}
      placeholder="Flushed style placeholder"
      variant="flushed"
    />
    <Input {...args} placeholder="UnStyled placeholder" variant="unStyled" />
  </Flex>
);

export const ByState: StoryFn<InputProps> = args => (
  <Flex gap={16} flexDirection="column" alignItems="normal">
    <Input {...args} placeholder="Available state placeholder" />
    <Input {...args} placeholder="Disabled state placeholder" disabled={true} />
    <Input {...args} placeholder="ReadOnly state placeholder" readOnly={true} />
    <Input {...args} placeholder="Invalid state placeholder" error={true} />
  </Flex>
);

export const ByFocusAndErrorBorderColor: StoryFn<InputProps> = args => (
  <Flex gap={16} flexDirection="column" alignItems="normal">
    <Input
      {...args}
      placeholder="Focus placeholder"
      focusBorderColor="orange"
    />
    <Input {...args} placeholder="Focus placeholder" focusBorderColor="green" />
    <Input
      {...args}
      placeholder="Error placeholder"
      error={true}
      errorBorderColor={red['200']}
    />
    <Input
      {...args}
      placeholder="Error placeholder"
      error={true}
      errorBorderColor={red['600']}
    />
  </Flex>
);
