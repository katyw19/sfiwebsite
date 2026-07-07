"use client";

import { useEffect, useRef, useState } from "react";
import { Avatar } from "./Avatar";
import { Icon } from "@/components/ui/icons";
import { ThreadLine } from "@/components/ui/ThreadLine";
import type { TeamMember } from "@/lib/content";

export function TeamMembers({ members }: { members: TeamMember[] }) {
  const [selected, setSelected] = useState<TeamMember | null>(null);
  // Remember the card that opened the modal so we can restore focus on close.
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const close = () => {
    setSelected(null);
    triggerRef.current?.focus();
  };

  return (
    <>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <li key={member.name}>
            <button
              type="button"
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setSelected(member);
              }}
              aria-haspopup="dialog"
              className="group flex h-full w-full flex-col items-center rounded-lg border border-nordic-linen bg-frost-white p-6 text-center transition-shadow duration-200 hover:shadow-[0_8px_30px_rgba(58,63,59,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pressed-sage focus-visible:ring-offset-2"
            >
              <Avatar name={member.name} src={member.image} sizePx={128} />
              <h3 className="mt-4 font-serif text-xl text-charcoal">{member.name}</h3>
              <p className="mt-1 text-sm font-medium uppercase tracking-eyebrow text-eucalyptus">
                {member.title}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-pine-smoke transition-colors group-hover:text-moss-oak">
                View bio
                <Icon name="ArrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {selected && <TeamModal member={selected} onClose={close} />}
    </>
  );
}

function TeamModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const paragraphs = member.bio.split(/\n\n+/).filter(Boolean);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm motion-safe:animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="team-modal-name"
        className="relative z-10 flex max-h-[85vh] w-full max-w-lg flex-col overflow-hidden rounded-xl border border-nordic-linen bg-frost-white shadow-2xl motion-safe:animate-modal-in"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 rounded-md p-2 text-iron-grey transition-colors hover:bg-oat-milk hover:text-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pressed-sage"
        >
          <Icon name="X" className="h-5 w-5" />
        </button>

        <div className="overflow-y-auto p-8">
          <div className="flex items-center gap-5 pr-8">
            <Avatar name={member.name} src={member.image} sizePx={88} />
            <div>
              <h2 id="team-modal-name" className="font-serif text-2xl text-charcoal">
                {member.name}
              </h2>
              <p className="mt-1 text-sm font-medium uppercase tracking-eyebrow text-eucalyptus">
                {member.title}
              </p>
            </div>
          </div>

          <ThreadLine className="mt-6 w-16" />

          <div className="mt-6 space-y-4 leading-relaxed text-iron-grey">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
