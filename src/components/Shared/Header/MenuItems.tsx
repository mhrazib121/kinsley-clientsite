"use client";

import { useState } from "react";
import { DropdownMenu, MenuItem } from ".";
import { NextRouter, useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { navItems } from "../../../../public/Data";

export const MenuItems = ({ router }: { router?: NextRouter }) => {
  // const isActive = router.pathname === link;

  const [open, setOpen] = useState("");
  const handleDropdownHover = (label: string) => {
    setOpen(label);
  };

  const handleDropdownLeave = () => {
    setOpen("");
  };
  return (
    <ul className={`px-1 flex`}>
      {navItems.map((nav, i) => (
        <MenuItem
          key={i}
          label={nav.label}
          link={nav.link}
          option={nav.option}
          setOpen={setOpen}
          open={open}
          handleDropdownHover={handleDropdownHover}
          handleDropdownLeave={handleDropdownLeave}
        >
          {open === nav.label && nav.option && (
            <DropdownMenu
              label={nav.label}
              open={open}
              option={nav.option}
              setOpen={setOpen}
            />
          )}
        </MenuItem>
      ))}
    </ul>
  );
};
