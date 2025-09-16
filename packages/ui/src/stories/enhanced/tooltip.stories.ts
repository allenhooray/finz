import { Button } from "@/components/base";
import { Tooltip } from "@/components/enhanced";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof Tooltip> = {
  title: "Enhanced/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: "text",
      defaultValue: 'Tooltip content',
    },
  },
  parameters: {
    slots: {
      default: {
        description: 'Trigger element for the tooltip',
        defaultValue: '{{ args.default }}'
      },
      content: {
        description: 'Custom content slot for the tooltip',
        defaultValue: ''
      }
    }
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Story0: Story = {
  name: 'Show Case',
  args: {
    content: 'Tooltip content',
  },
  render: (args) => ({
    components: { Tooltip, Button },
    setup() {
      return { args };
    },
    template: `
      <Tooltip v-bind="args">
        <Button>Hover me</Button>
      </Tooltip>
    `,
  }),
};

export const CustomContent: Story = {
  name: 'Custom Content',
  args: {
    content: '',
  },
  render: (args) => ({
    components: { Tooltip, Button },
    setup() {
      return { args };
    },
    template: `
      <Tooltip v-bind="args">
        <Button>Hover for custom content</Button>
        <template #content>
          <div class="flex items-center gap-2">
            <span class="font-medium">Custom Tooltip</span>
            <span class="text-blue-500">✨</span>
          </div>
        </template>
      </Tooltip>
    `,
  }),
};

export const DifferentTriggers: Story = {
  name: 'Different Triggers',
  args: {
    content: 'Tooltip for this element',
  },
  render: (args) => ({
    components: { Tooltip, Button },
    setup() {
      return { args };
    },
    template: `
      <div class="space-x-4">
        <Tooltip v-bind="args">
          <Button>Button</Button>
        </Tooltip>
        <Tooltip v-bind="args">
          <span class="px-4 py-2 bg-gray-100 rounded cursor-help">Text element</span>
        </Tooltip>
        <Tooltip v-bind="args">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center cursor-help">
            <span class="text-blue-600">ⓘ</span>
          </div>
        </Tooltip>
      </div>
    `,
  }),
};