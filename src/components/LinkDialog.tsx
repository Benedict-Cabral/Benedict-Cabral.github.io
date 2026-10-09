import { useEffect, useRef } from "react";
import { profile, unavailableLinks } from "../data";
import { Icon } from "./Icon";

export type DialogKind = keyof typeof unavailableLinks;

export function LinkDialog({
  kind,
  onClose,
}: {
  kind: DialogKind | null;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (kind && !element.open) element.showModal();
    else if (!kind && element.open) element.close();
  }, [kind]);
  const content = unavailableLinks[kind ?? "contact"];
  return (
    <dialog
      ref={dialog}
      className="link-dialog"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            onClose();
        }
      }}
    >
      <button
        className="dialog-close"
        aria-label="Close dialog"
        onClick={onClose}
      >
        <Icon name="close" size={22} />
      </button>
      <span className="dialog-star" aria-hidden="true">
        ✳︎
      </span>
      <h2 id="dialog-title">{content.title}</h2>
      <p id="dialog-description">{content.description}</p>
      <a
        className="button button-dark"
        href={profile.githubUrl}
        target="_blank"
        rel="noreferrer"
      >
        Find me on GitHub <Icon name="arrow" size={15} />
      </a>
    </dialog>
  );
}
