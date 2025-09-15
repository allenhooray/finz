import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/base/hover-card";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof HoverCard> = {
  title: "Base/HoverCard",
  component: HoverCard,
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Story0: Story = {
  name: 'Show Case',
  render: (args: Story["args"]) => ({
    components: {
      HoverCard,
      HoverCardContent,
      HoverCardTrigger
    },
    setup() {
      return { args };
    },
    template: `
      <HoverCard v-bind="args">
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>
          <div class="space-y-1">
            <h3 class="font-medium">Hover Card Title</h3>
            <p class="text-sm text-muted-foreground">Hover card content goes here</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    `
  })
}