import { Select } from "@/components/enhanced";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { ref } from "vue";

const meta: Meta<typeof Select> = {
  title: "Enhanced/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      defaultValue: 'Select an option',
    },
    options: {
      control: "object",
      defaultValue: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
        { label: 'Disabled Option', value: 'disabled', disabled: true }
      ]
    }
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Story0: Story = {
  name: 'Show Case',
  args: {
    placeholder: 'Select an option',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
      { label: 'Disabled Option', value: 'disabled', disabled: true }
    ]
  },
  render: (args) => ({
    components: { Select },
    setup() {
      const selectedValue = ref<string>('');
      return { args, selectedValue };
    },
    template: `
      <div class="space-y-4">
        <Select v-bind="args" v-model="selectedValue" />
        <div v-if="selectedValue" class="text-gray-600">Selected: {{ selectedValue }}</div>
      </div>
    `,
  }),
}