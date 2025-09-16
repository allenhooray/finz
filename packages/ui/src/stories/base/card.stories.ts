import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from "@/components/base/card";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { Button } from "@/components/base/button";

const meta: Meta<typeof Card> = {
  title: "Base/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    class: {
      control: "text",
      defaultValue: ''
    }
  },
  parameters: {
    slots: {
      default: {
        description: 'Card Content',
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Story0: Story = {
  name: 'Show Case',
  render: (args: Story["args"]) => ({
    components: {
      Card,
      CardHeader,
      CardTitle,
      CardDescription,
      CardContent,
      CardFooter,
      CardAction,
      Button
    },
    setup() {
      return { args };
    },
    template: `
      <Card v-bind="args">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here</CardDescription>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
        </CardContent>
        <CardFooter>
          <CardAction>
            <Button>Button</Button>
          </CardAction>
        </CardFooter>
      </Card>
    `
  })
}