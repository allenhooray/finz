import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/base/sheet";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { Button } from "@/components/base/button";

const meta: Meta<typeof Sheet> = {
  title: "Base/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      defaultValue: false
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      defaultValue: "right"
    }
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Story0: Story = {
  name: 'Show Case',
  render: (args: Story["args"]) => ({
    components: {
      Sheet,
      SheetContent,
      SheetDescription,
      SheetFooter,
      SheetHeader,
      SheetTitle,
      SheetTrigger,
      Button
    },
    setup() {
      return { args };
    },
    template: `
      <Sheet v-bind="args">
        <SheetTrigger as-child>
          <Button variant="secondary">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet description goes here</SheetDescription>
          </SheetHeader>
          <div class="py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
          </div>
          <SheetFooter>
            <Button variant="secondary">Cancel</Button>
            <Button>Confirm</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    `
  })
}