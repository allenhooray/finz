import { Input } from "@/components/base/input";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof Input> = {
  title: "Base/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "text",
      defaultValue: ''
    },
    class: {
      control: "text",
      defaultValue: ''
    }
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Story0: Story = {
  name: 'Show Case',
  args: {
    defaultValue: 'Type here...'
  }
}