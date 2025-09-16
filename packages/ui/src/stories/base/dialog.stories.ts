import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/base/dialog";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { Button } from "@/components/base/button";

const meta: Meta<typeof Dialog> = {
  title: "Base/Dialog",
  component: Dialog,
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
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
      Button
    },
    setup() {
      return { args };
    },
    template: `
      <Dialog v-bind="args">
        <DialogTrigger as-child>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog description goes here</DialogDescription>
          </DialogHeader>
          <div class="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
          </div>
          <DialogFooter>
            <Button variant="secondary">Cancel</Button>
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `
  })
}