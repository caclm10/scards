import { Card, CardDescription, CardHeader, CardTitle } from "@/Components/UI/Card";

/**
 * @typedef {Object} AuthCardProps
 * @property {string} title
 * @property {string} description
 * @property {React.ReactNode} [children]
 */

/**
 * @param {AuthCardProps} props
 * @returns {JSX.Element}
 */
function AuthCard({ title, description, children }) {
    return (
        <Card className="w-full max-w-md">
            <CardHeader className="space-y-2">
                <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>

            {children}
        </Card>
    );
}

export { AuthCard };


