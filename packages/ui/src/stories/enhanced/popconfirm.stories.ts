import { Button } from "@/components/base";
import { Popconfirm } from "@/components/enhanced";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

const meta: Meta<typeof Popconfirm> = {
  title: "Enhanced/Popconfirm",
  component: Popconfirm,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      defaultValue: 'Are you sure?',
    },
    content: {
      control: "text",
      defaultValue: 'This action cannot be undone.',
    },
    buttonText: {
      control: "object",
      defaultValue: { confirm: 'Confirm' }
    }
  },
  parameters: {
    slots: {
      default: {
        description: 'Trigger element for the popconfirm',
        defaultValue: '{{ args.default }}'
      }
    }
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Story0: Story = {
  name: 'Show Case',
  args: {
    title: 'Are you sure?',
    content: 'This action cannot be undone.',
    buttonText: { confirm: 'Confirm' }
  },
  render: (args) => ({
    components: { Popconfirm, Button },
    setup() {
      const confirmed = ref(false);
      const handleConfirm = () => {
        confirmed.value = true;
        setTimeout(() => confirmed.value = false, 2000);
      };
      return { args, confirmed, handleConfirm };
    },
    template: `
      <div class="space-y-4">
        <Popconfirm v-bind="args" @confirm="handleConfirm">
          <Button variant="destructive">Delete Item</Button>
        </Popconfirm>
        <div v-if="confirmed" class="text-green-600">Confirmed!</div>
      </div>
    `,
  }),
}