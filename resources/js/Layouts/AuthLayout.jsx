import { RootLayout } from './RootLayout';

/**
 * @typedef {import('./RootLayout').RootLayoutProps} AuthLayoutProps
 */

/**
 * A layout component for authentication pages.
 *
 * @param {AuthLayoutProps} props
 * @returns {JSX.Element}
 */
function AuthLayout({ title, children }) {
    return (
        <RootLayout title={title}>
            <div className="flex min-h-dvh items-center justify-center bg-background px-5">
                {children}
            </div>
        </RootLayout>
    );
}

export { AuthLayout }