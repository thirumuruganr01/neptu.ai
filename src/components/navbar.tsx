import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import Logo from "../assets/ashley-black-logo.png";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export function Navbar() {
  return (
    <nav className="w-full border-b bg-black p-2 ps-4">
      <div className="flex items-center justify-between w-full">
        <Link to="#">
          <img
            src={Logo}
            alt="Logo"
            className="object-cover rounded-sm w-[150px] h-[50px]"
          />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <div className="text-blue-700 me-5 font-bold text-lg">
              IDENTIFY | ENGAGE | CONVERT
            </div>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to="/" className="bg-black hover:bg-black focus:bg-black">
                  <Button className="bg-blue-700 focus:bg-blue-500">
                    <LogOut />
                    Logout
                  </Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}