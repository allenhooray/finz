import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarProvider } from "@/components/base/sidebar";
import type { Meta, StoryObj } from "@storybook/vue3-vite";

const meta: Meta<typeof Sidebar> = {
  title: "Base/Sidebar",
  component: Sidebar,
  tags: ["autodocs"]
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Story0: Story = {
  name: 'Show Case',
  render: (args: Story["args"]) => ({
    components: {
      Sidebar,
      SidebarContent,
      SidebarHeader,
      SidebarMenu,
      SidebarMenuButton,
      SidebarProvider
    },
    setup() {
      return { args };
    },
    template: `
      <SidebarProvider>
        <Sidebar v-bind="args">
          <SidebarHeader>
            <h2 class="font-semibold">Sidebar</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuButton>
                Dashboard
              </SidebarMenuButton>
              <SidebarMenuButton>
                Settings
              </SidebarMenuButton>
              <SidebarMenuButton>
                Help
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    `
  })
}