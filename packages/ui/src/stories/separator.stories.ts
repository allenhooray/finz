import { Separator } from "@/components/base/separator";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof Separator> = {
  title: "Base/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      defaultValue: "horizontal"
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
    orientation: "horizontal"
  }
}