import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/base/select";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof Select> = {
  title: "Base/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      defaultValue: false
    }
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Story0: Story = {
  name: 'Show Case',
  render: (args: Story["args"]) => ({
    components: {
      Select,
      SelectContent,
      SelectItem,
      SelectTrigger,
      SelectValue
    },
    setup() {
      return { args };
    },
    template: `
      <Select v-bind="args">
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    `
  })
}