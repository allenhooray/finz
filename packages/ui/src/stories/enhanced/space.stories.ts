import { Button } from "@/components/base";
import { Space } from "@/components/enhanced";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof Space> = {
  title: "Enhanced/Space",
  component: Space,
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ['start', 'end', 'center', 'baseline'],
      defaultValue: 'start',
    },
    justify: {
      control: "select",
      options: ['start', 'end', 'center', 'between', 'around', 'evenly'],
      defaultValue: 'start',
    },
    gap: {
      control: "number",
      defaultValue: 8,
    },
    vertical: {
      control: "boolean",
      defaultValue: false,
    },
    wrap: {
      control: "boolean",
      defaultValue: false,
    },
  },
  parameters: {
    slots: {
      default: {
        description: 'Content to be spaced',
        defaultValue: '{{ args.default }}'
      }
    }
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Story0: Story = {
  name: 'Show Case',
  args: {
    align: 'start',
    justify: 'start',
    gap: 8,
    vertical: false,
    wrap: false,
  },
  render: (args) => ({
    components: { Space, Button },
    setup() {
      return { args };
    },
    template: `
      <Space v-bind="args">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Space>
    `,
  }),
};

export const Vertical: Story = {
  name: 'Vertical Layout',
  args: {
    align: 'start',
    justify: 'start',
    gap: 8,
    vertical: true,
    wrap: false,
  },
  render: (args) => ({
    components: { Space, Button },
    setup() {
      return { args };
    },
    template: `
      <Space v-bind="args">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Space>
    `,
  }),
};

export const JustifyBetween: Story = {
  name: 'Justify Between',
  args: {
    align: 'center',
    justify: 'between',
    gap: 8,
    vertical: false,
    wrap: false,
  },
  render: (args) => ({
    components: { Space, Button },
    setup() {
      return { args };
    },
    template: `
      <div class="w-full">
        <Space v-bind="args">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </Space>
      </div>
    `,
  }),
};

export const CustomGap: Story = {
  name: 'Custom Gap',
  args: {
    align: 'start',
    justify: 'start',
    gap: 24,
    vertical: false,
    wrap: false,
  },
  render: (args) => ({
    components: { Space, Button },
    setup() {
      return { args };
    },
    template: `
      <Space v-bind="args">
        <Button>Wider</Button>
        <Button>Spacing</Button>
        <Button>Between</Button>
      </Space>
    `,
  }),
};