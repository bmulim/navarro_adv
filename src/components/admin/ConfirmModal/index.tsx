"use client";

import { useEffect } from "react";

type ConfirmModalProps = {
  isOpen: boolean;
  title: string;
  message: string;
  type?: "success" | "info" | "warning";
  onConfirm: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
  showCancel?: boolean;
};

export function ConfirmModal({
  isOpen,
  title,
  message,
  type = "success",
  onConfirm,
  onCancel,
  confirmText = "OK",
  cancelText = "Cancelar",
  showCancel = false,
}: ConfirmModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const icons = {
    success: "✓",
    info: "ℹ",
    warning: "⚠",
  };

  const colors = {
    success: "bg-green-100 text-green-800 border-green-300",
    info: "bg-blue-100 text-blue-800 border-blue-300",
    warning: "bg-orange-100 text-orange-800 border-orange-300",
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 animate-fadeIn">
      <div className="w-full max-w-md rounded-2xl border border-(--color-border) bg-(--color-surface-alt) p-6 shadow-2xl transition-colors duration-300 animate-scaleIn">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 text-2xl font-bold ${colors[type]}`}
          >
            {icons[type]}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-(--color-primary-strong) md:text-xl">
              {title}
            </h3>
            <p className="mt-2 text-sm text-(--color-foreground-muted) whitespace-pre-line">
              {message}
            </p>
          </div>
        </div>

        <div className="mt-6 flex gap-3 justify-end">
          {showCancel && onCancel && (
            <button
              onClick={onCancel}
              className="rounded-full border border-(--color-border) bg-(--color-background) px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-(--color-foreground) transition hover:bg-(--color-surface-alt)"
            >
              {cancelText}
            </button>
          )}
          <button
            onClick={onConfirm}
            className="rounded-full bg-(--color-cta-bg) px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-(--color-cta-text) transition hover:bg-(--color-cta-bg-hover)"
          >
            {confirmText}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
