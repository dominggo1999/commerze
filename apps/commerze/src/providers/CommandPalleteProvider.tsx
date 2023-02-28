import React, { useContext } from "react";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from "kbar";
import { useFullscreen } from "@acme/ui";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";

const openLinkInNewTab = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const RenderResults = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div>{item}</div>
        ) : (
          <div
            className={clsx(
              "cursor-pointer truncate bg-primary-500 py-3 px-5 text-white",
              active && "bg-background-100",
            )}
          >
            {item.keywords}
          </div>
        )
      }
    />
  );
};

export interface CommandPalleteProviderProps {
  children: React.ReactNode;
}

const CommandPalleteProvider: React.FC<CommandPalleteProviderProps> = ({
  children,
}) => {
  const { toggle: toggleFullScreen } = useFullscreen();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const actions = [
    {
      id: "home",
      name: "Home",
      keywords: "Home",
      perform: () => navigate("/"),
    },
    {
      id: "contact",
      name: "Contact",
      keywords: "Contact",
      perform: () => navigate("/contact"),
    },
    {
      id: "about",
      name: "About",
      keywords: "About",
      perform: () => navigate("/about"),
    },
    {
      id: "source-code",
      name: "Source Code",
      keywords: "Source Code",
      perform: () =>
        openLinkInNewTab("https://github.com/dominggo1999/commerze"),
    },
    {
      id: "portfolio",
      name: "Portfolio",
      keywords: "Portfolio",
      perform: () => openLinkInNewTab("https://arnolds.vercel.app/"),
    },
    {
      id: "fullscreen",
      name: "Fullscreen",
      shortcut: ["F11"],
      keywords: "Toggle Fullscreen",
      perform: () => toggleFullScreen(),
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="kbar-container z-[9999]">
          <KBarAnimator>
            <KBarSearch
              className={clsx(
                "rounded-md border border-slate-500 px-3 py-2 dark:hidden",
                "mb-3 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500",
                theme === "dark" ? "bg-background-500 text-white" : "bg-white",
              )}
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};

export default CommandPalleteProvider;
