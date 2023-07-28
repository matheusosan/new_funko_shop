import { SidebarProvider } from ".";

const Sidebar = () => {
  return (
    <SidebarProvider.Root>
      <SidebarProvider.Top />
      <SidebarProvider.Content />
      <SidebarProvider.Bottom />
      <SidebarProvider.Empty />
    </SidebarProvider.Root>
  );
};

export default Sidebar;
