import { useEffect, useRef, useState } from "react";
import { navigation, profile } from "../data";
import { Icon } from "./Icon";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="page-container nav-inner">
        <a
          className="wordmark"
          href="#home"
          aria-label={`${profile.name}, home`}
          onClick={() => setOpen(false)}
        >
          <span className="monogram">
            {profile.initials}
            <span>.</span>
          </span>
          <span>{profile.name}</span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} size={23} />
        </button>
        <nav
          id="main-navigation"
          className={`nav-links ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={link.label === "Contact" ? "nav-contact" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
              {link.label === "Contact" && <Icon name="arrow" size={13} />}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
