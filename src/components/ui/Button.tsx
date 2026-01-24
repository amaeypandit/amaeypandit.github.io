import { cn } from "@/lib/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "solid",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        variant === "solid" ? "btn-solid" : "btn-outline",
        size === "sm" && "px-4 py-2 text-sm",
        size === "lg" && "px-8 py-4 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function LinkButton({
  variant = "solid",
  size = "md",
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        "inline-block text-center",
        variant === "solid" ? "btn-solid" : "btn-outline",
        size === "sm" && "px-4 py-2 text-sm",
        size === "lg" && "px-8 py-4 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
