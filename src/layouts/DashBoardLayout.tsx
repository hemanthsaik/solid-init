import { Component, ComponentProps } from "solid-js";
import Header from "~/components/Header";
import SideBar from "~/components/SideBar";

const DashboardLayout: Component<ComponentProps<"div">> = (props) => {
  return (
    <div class="flex h-screen w-full p-4 ">
      <SideBar class="hidden w-1/4 md:block xl:w-1/5 " />
      <div class="w-full">
        <Header />
        <div>{props.children}</div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default DashboardLayout;
