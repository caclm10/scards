import "./bootstrap"

import { createRoot } from "react-dom/client"
import { createInertiaApp } from "@inertiajs/react"
import { registerPlugin } from "react-filepond"
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation"
import FilePondPluginImagePreview from "filepond-plugin-image-preview"
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type"
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "filepond/dist/filepond.min.css"
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"
import "../css/app.css"

registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateType
)

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob("./Pages/**/*.jsx")),
    setup({ el, App, props }) {
        const root = createRoot(el)

        root.render(<App {...props} />)
    },
    progress: {
        color: "#4B5563",
    },
})
