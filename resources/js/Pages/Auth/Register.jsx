import { AuthLayout } from "@/Layouts/AuthLayout";
import { AuthCard } from "@/Components/Auth/AuthCard";
import { RegisterForm } from "@/Components/Auth/RegisterForm";

function RegisterPage() {
    return (
        <AuthCard title="Welcome" description="Create your account here.">
            <RegisterForm />
        </AuthCard>
    );
}

/** @param {React.ReactNode} page */
RegisterPage.layout = (page) => {
    return <AuthLayout title="Sign Up" children={page} />;
};

export default RegisterPage;
