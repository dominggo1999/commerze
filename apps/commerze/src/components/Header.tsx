import React from "react";
import {
  HeaderContainer,
  HeaderIconButton,
  Brand,
  useFullscreen,
  Kbd,
} from "@acme/ui";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "src/providers";
import { useSidebarStore } from "stores/index";
import { BiExitFullscreen, BiFullscreen } from "react-icons/bi";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import clsx from "clsx";
import { useKBar } from "kbar";

const Header = () => {
  const { fullscreen, toggle: toggleFullScreen } = useFullscreen();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isOpen: isSidebarOpen, setIsOpen } = useSidebarStore();
  const { query } = useKBar();
  const isDark = theme === "dark";

  return (
    <HeaderContainer>
      <div className="flex h-full w-full items-center justify-between">
        <Link className="hidden md:inline-block" to="/">
          <Brand />
        </Link>

        <Link className="md:hidden" to="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-xl font-bold !text-white">
            C
          </span>
        </Link>

        <div className="flex items-center gap-x-3">
          <button
            onClick={query.toggle}
            className="mr-2 hidden items-center gap-x-3 text-sm md:flex"
          >
            <span className="text-base">
              <AiOutlineSearch />
            </span>
            <span>Search something</span>
            <div className="flex gap-x-2">
              <Kbd>Ctrl</Kbd>
              <Kbd>K</Kbd>
            </div>
          </button>

          <HeaderIconButton
            onClick={query.toggle}
            className={clsx(
              "md:hidden",
              isSidebarOpen && "pointer-events-none",
            )}
            icon={<AiOutlineSearch />}
          />

          <HeaderIconButton
            onClick={toggleFullScreen}
            icon={fullscreen ? <BiExitFullscreen /> : <BiFullscreen />}
          />

          <HeaderIconButton
            onClick={toggleTheme}
            icon={isDark ? <MdOutlineDarkMode /> : <MdLightMode />}
          />

          <HeaderIconButton
            onClick={() => setIsOpen(!isSidebarOpen)}
            icon={<AiOutlineMenu />}
            className={clsx(isSidebarOpen && "pointer-events-none")}
          />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
