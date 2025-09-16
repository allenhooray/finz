import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/base/tooltip";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { Button } from "@/components/base/button";

const meta: Meta<typeof Tooltip> = {
  title: "Base/Tooltip",
  component: Tooltip,
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Story0: Story = {
  name: 'Show Case',
  render: (args) => ({
    components: {
      Tooltip,
      TooltipContent,
      TooltipProvider,
      TooltipTrigger,
      Button
    },
    setup() {
      return { args };
    },
    template: `
      <TooltipProvider>
        <Tooltip v-bind="args">
          <TooltipTrigger as-child>
            <Button variant="secondary">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            Tooltip content goes here
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    `
  })
}