import { Logo } from "@/components/Logo";
import { LoginForm } from "@/components/admin/LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-(--color-background) flex items-center justify-center px-4 py-12 transition-colors duration-300">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo className="h-16 w-16" />
          </div>
          <h1 className="text-2xl font-semibold text-(--color-primary-strong) md:text-3xl">
            Área Administrativa
          </h1>
          <p className="mt-2 text-sm text-(--color-muted)">
            Navarro Advocacia - Gestão do Blog
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
