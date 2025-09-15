import { Label } from "@/components/base/label";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import type { LabelProps } from "reka-ui";

const meta: Meta<typeof Label> = {
  title: "Base/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    class: {
      control: "text",
      defaultValue: ''
    },
    htmlFor: {
      control: "text",
      defaultValue: ''
    }
  },
  parameters: {
    slots: {
      default: {
        description: 'Label Text',
        defaultValue: '{{ args.default }}'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Story0: Story = {
  name: 'Show Case',
  args: {
    default: 'Label Text'
  }
}