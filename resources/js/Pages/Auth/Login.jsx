import { AuthLayout } from "@/Layouts/AuthLayout";
import { AuthCard } from "@/Components/Auth/AuthCard";
import { LoginForm } from "@/Components/Auth/LoginForm";

function LoginPage() {
    return (
        <AuthCard title="Welcome back" description="Login to your account.">
            <LoginForm />
        </AuthCard>
    );
}

/** @param {React.ReactNode} page */
LoginPage.layout = (page) => {
    return <AuthLayout title="Sign In" children={page} />;
};

export default LoginPage;

