import { useLocation } from "@solidjs/router";
import { Component, ComponentProps, For } from "solid-js";
import { navConfig } from "~/config/navigation";

import { cn } from "~/lib/utils";
import NavItem from "./NavItem";

const SideBar: Component<ComponentProps<"div">> = (props) => {
  return (
    <div class={cn("mr-2", props.class)}>
      <div class="space-y-4">
        <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight text-primary">
          Solid js
        </h2>
        <div class="px-3 py-2">
          <div class="space-y-1">
            <For each={navConfig.sidebarNav}>
              {(item) => <NavItem label={item.title} link={item.href} />}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
