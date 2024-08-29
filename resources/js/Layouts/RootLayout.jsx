import { Head } from "@inertiajs/react";
import { Toaster } from "sonner";

/**
 * @typedef {Object} RootLayoutProps
 * @property {string} [title]
 * @property {React.ReactNode} [children]
 */

const appName = import.meta.env.VITE_APP_NAME || "SCards";

/** @param {RootLayoutProps} props */
function RootLayout({ title, children }) {
    const fullTitle = title ? `${title} - ${appName}` : appName;

    return (
        <>
            <Head>
                <title>{fullTitle}</title>
                <meta name="description" content="Organize your notes with style" />
            </Head>

            {children}

            <Toaster richColors />
        </>
    );
}

export { RootLayout };


