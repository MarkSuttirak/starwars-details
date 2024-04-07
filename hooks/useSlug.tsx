const useSlug = () => {
    const slugify = (title: string) => {
        return title.toLowerCase().replace(/\s+/g, '-');
    }

    const unslugify = (slug: string) => {
        return slug.toLowerCase().split('-').join(' ');
    }

    return { slugify, unslugify }
}

export default useSlug