import { Badge, type BadgeVariants } from "@/components/base/badge";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { createArgTypesClass } from "./utils/create-arg-types";

const argTypes = createArgTypesClass<BadgeVariants>({
  variant: ["default"],
})

const meta: Meta<typeof Badge> = {
  title: "Base/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes,
  parameters: {
    slots: {
      default: {
        description: 'Badge Text',
        defaultValue: '{{ args.default }}'
      }
    }
  },
  args: {
    variant: 'default',
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Story0: Story = {
  name: 'Show Case',
  args: {
    default: 'Badge'
  }
}