import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Editor } from "@/components/editor"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <ThemeToggle/>
        </header>
        <div className="flex flex-1 flex-col gap-4">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={100}>
                <ResizablePanelGroup direction="vertical">
                  <ResizablePanel defaultSize={25}>
                    <div className="flex h-full items-center justify-center">
                      <span className="font-semibold">Tracer</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={25}>
                    <div className="flex h-full items-center justify-center">
                      <span className="font-semibold">Tracer</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={25}>
                    <div className="flex h-full items-center justify-center">
                      <span className="font-semibold">Log</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={100} className="!overflow-y-hidden h-full">
                <div className="flex h-full">
                  <Tabs defaultValue="README.md" className="max-w-none w-full">
                    <TabsList className="w-full p-1 bg-background justify-start rounded-none">
                      <TabsTrigger value="README.md" className="border border-transparent data-[state=active]:border-border data-[state=active]:shadow-none">README.md</TabsTrigger>
                      <TabsTrigger value="algo.py" className="border border-transparent data-[state=active]:border-border data-[state=active]:shadow-none">algo.py</TabsTrigger>
                    </TabsList>
                    <TabsContent className="h-full" value="README.md">
                      <Editor/>
                    </TabsContent>
                    <TabsContent className="h-full" value="algo.py">
                      <Editor/>
                    </TabsContent>
                  </Tabs>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
