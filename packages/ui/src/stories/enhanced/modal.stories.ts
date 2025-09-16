import  { Button } from "@/components/base";
import  { Modal } from "@/components/enhanced";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

const meta: Meta<typeof Modal> = {
  title: "Enhanced/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      defaultValue: 'Modal Title',
    },
  },
  parameters: {
    slots: {
      default: {
        description: 'Modal Content',
        defaultValue: '{{ args.default }}'
      },
      title: {
        control: "text",
        defaultValue: 'Modal Title',
      }
    }
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Story0: Story = {
  name: 'Show Case',
  args: {
    default: 'Modal Content',
    title: 'Modal Title',
  },
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      const open = ref(false);
      return { args, open };
    },
    template: `
      <Button @click="open = true">Open Modal</Button>
      <Modal v-bind="args" :open="open" @update:open="open = $event">
        <template #default>{{ args.default }}</template>
      </Modal>
    `,
  }),
}