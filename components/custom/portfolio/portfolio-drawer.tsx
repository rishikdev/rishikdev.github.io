import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AlignJustify, X } from "lucide-react";
import Portfolio from "./portfolio";
import { useState } from "react";

const PortfolioDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="p-1">
          <AlignJustify />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Would you like to know more about me?</DrawerTitle>
          <DrawerDescription>
            Here are some projects I have worked on. The list includes both
            academic and personal projects. I have also included some of my
            articles and certifications.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="divide-y" onClick={() => setIsOpen(false)}>
          <Portfolio />
          <DrawerClose className="pt-2">
            <Button variant="ghost" className="w-full">
              <X className="mr-2 h-4 w-4" />
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default PortfolioDrawer;
