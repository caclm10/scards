import { Card } from "@/Components/UI/Card";
import { UserButton } from "@/Components/Account/UserButton";
import { NavigationBar } from "@/Components/App/NavigationBar";
import { RootLayout } from "./RootLayout";

/**
 * @typedef {import("./RootLayout").RootLayoutProps} AppLayoutProps 
 */

/** @param {AppLayoutProps} props */
function AppLayout({ title, children }) {
    return (
        <RootLayout title={title}>
            <header>
                <Card className="rounded-none">
                    <div className="container flex h-20 items-center justify-between">
                        <NavigationBar />

                        <div>
                            <UserButton />
                        </div>
                    </div>
                </Card>
            </header>

            <div className="container py-10">{children}</div>
        </RootLayout>
    );
}

export { AppLayout };