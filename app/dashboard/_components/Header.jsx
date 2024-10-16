import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white p-2 flex items-center justify-between px-5 shadow-md">
      <div className="flex gap-3 items-center">
        <img src={"/logo.png"} style={{ width: "100px", height: "70px" }} />
        <h2
          className="font-bold text-xl bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #30003b, #11ccf5)",
          }}
        >
          Let's create together
        </h2>
      </div>

      <div className="flex gap-3 items-center">
        <Button>Dashboard</Button>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
