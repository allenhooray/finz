import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/base/collapsible";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof Collapsible> = {
  title: "Base/Collapsible",
  component: Collapsible,
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
      Collapsible,
      CollapsibleContent,
      CollapsibleTrigger
    },
    setup() {
      return { args };
    },
    template: `
      <Collapsible v-bind="args">
        <CollapsibleTrigger>Click to toggle</CollapsibleTrigger>
        <CollapsibleContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
        </CollapsibleContent>
      </Collapsible>
    `
  })
}