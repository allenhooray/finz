import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/base/tabs";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof Tabs> = {
  title: "Base/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "text",
      defaultValue: "tab1"
    }
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Story0: Story = {
  name: 'Show Case',
  render: (args) => ({
    components: {
      Tabs,
      TabsContent,
      TabsList,
      TabsTrigger
    },
    setup() {
      return { args };
    },
    template: `
      <Tabs v-bind="args">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          Content for Tab 1
        </TabsContent>
        <TabsContent value="tab2">
          Content for Tab 2
        </TabsContent>
        <TabsContent value="tab3">
          Content for Tab 3
        </TabsContent>
      </Tabs>
    `
  })
}