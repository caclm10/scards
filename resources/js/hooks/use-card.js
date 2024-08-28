import axios from "axios"
import useSWR from "swr"

/**
 * 
 * @function useCardImages
 * @param {import("@/models/card").Card["id"]} id
 * @returns
 */
function useCardImages(id) {
    const { data: images, isLoading, mutate } = useSWR(
        `/cards/${id}/images`,
        async (path) => {
            /** @type {import("axios").AxiosResponse<{images: import("@/models/card").CardImage[]}}>} */
            const res = await axios.get(path)

            return res.data.images
        }
    )

    return {
        images,
        isLoadingImages: isLoading,
        mutate,
    }
}

export { useCardImages }