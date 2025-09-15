import { Button, type ButtonVariants } from "@/components/base/button";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { createArgTypesClass } from "./utils/create-arg-types";

const argTypes = createArgTypesClass<ButtonVariants>({
  variant: ["default", "destructive", "outline", "secondary", "ghost", "link"],
  size: ['default', 'sm', 'lg', 'icon'],
})

const meta: Meta<typeof Button> = {
  title: "Base/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes,
  parameters: {
    slots: {
      default: {
        description: 'Button Text',
        defaultValue: '{{ args.default }}'
      }
    }
  },
  args: {
    variant: 'default',
    size: 'default',
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Story0: Story = {
  name: 'Show Case',
  args: {
    default: 'Button'
  }
}