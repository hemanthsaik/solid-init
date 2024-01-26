import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
  SheetClose,
} from "./ui/sheet";
import NavItem from "./NavItem";
import { Component, ComponentProps, For } from "solid-js";
import { cn } from "~/lib/utils";
import { navConfig } from "~/config/navigation";
import { MenuIcon, MoonStarIcon, Sun } from "lucide-solid";
import { Button } from "./ui/button";
import Avatar from "./Avatar";

export const Header: Component<ComponentProps<"div">> = (props) => {
  return (
    <header class={cn("pb-4", "w-full", props.class)}>
      <div class="flex justify-between items-center lg:justify-end">
        <div class="md:hidden">
          <Sheet>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent position="left" class="w-[260px] p-2">
              <SheetHeader class="text-left">
                <SheetTitle>Solid js</SheetTitle>
                <SheetDescription>
                  <div class="px-3 py-2">
                    <div class="flex flex-col space-y-1">
                      <SheetClose>
                        <For each={navConfig.sidebarNav}>
                          {(item) => (
                            <NavItem label={item.title} link={item.href} />
                          )}
                        </For>
                      </SheetClose>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div class="flex justify-end items-center w-full">
          {/* <div class="hidden md:block">breadcrumbs</div> */}
          <div>
            <Avatar text="H" />
          </div>
          <div>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              // onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
            >
              <Sun class=" h-6 w-6  rotate-0  scale-100  transition-all  dark:-rotate-90 dark:-scale-0" />
              <MoonStarIcon class=" absolute h-6 w-6  rotate-0  scale-0  transition-all  dark:-rotate-180 dark:-scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
