import { Popover, PopoverContent, PopoverTrigger } from "@/components/base/popover";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { Button } from "@/components/base/button";

const meta: Meta<typeof Popover> = {
  title: "Base/Popover",
  component: Popover,
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
      Popover,
      PopoverContent,
      PopoverTrigger,
      Button
    },
    setup() {
      return { args };
    },
    template: `
      <Popover v-bind="args">
        <PopoverTrigger as-child>
          <Button variant="secondary">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div class="space-y-1">
            <h3 class="font-medium">Popover Title</h3>
            <p class="text-sm text-muted-foreground">Popover content goes here</p>
          </div>
        </PopoverContent>
      </Popover>
    `
  })
}