import { Form, FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/base/form";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { Input } from "@/components/base/input";
import { Button } from "@/components/base/button";

const meta: Meta<typeof Form> = {
  title: "Base/Form",
  component: Form,
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Story0: Story = {
  name: 'Show Case',
  render: (args: Story["args"]) => ({
    components: {
      Form,
      FormControl,
      FormDescription,
      FormItem,
      FormLabel,
      FormMessage,
      Input,
      Button
    },
    setup() {
      return { args };
    },
    template: `
      <Form v-bind="args">
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input placeholder="Enter your name" />
          </FormControl>
          <FormDescription>This is your full name.</FormDescription>
          <FormMessage>Please enter your name.</FormMessage>
        </FormItem>
        <div class="pt-4">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    `
  })
}