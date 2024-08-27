import { AppLayout } from "@/Layouts/AppLayout";
import { ChangePasswordForm } from "@/Components/Account/ChangePasswordForm";
import { ProfileForm } from "@/Components/Account/ProfileForm";
import { BackButton } from "@/Components/BackButton";

function AccountPage() {
    return (
        <div className="space-y-6">
            <BackButton />

            <ProfileForm />

            <ChangePasswordForm />
        </div>
    );
}

/** @param {React.ReactNode} page */
AccountPage.layout = (page) => {
    return <AppLayout title="Account" children={page} />;
};

export default AccountPage;