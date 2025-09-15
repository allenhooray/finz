import { Skeleton } from "@/components/base/skeleton";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof Skeleton> = {
  title: "Base/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
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
    class: "h-10 w-full"
  }
}