import { AuthForm } from "@/modules/auth/auth-form";
import { BaseLayout } from "../layout";

export default function LoginPage() {
  return (
    <BaseLayout>
      <AuthForm />
    </BaseLayout>
  );
}
