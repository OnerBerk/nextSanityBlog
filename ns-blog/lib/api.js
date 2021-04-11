import client from './sanity';

const blogFields = `
        title,
        subTitle,
        'slug':slug.current, 
        date,
        'author': author->{name, 'avatar':avatar.asset->url},
        'coverImage': coverImage.asset->url
        `

const getAllBlogs = async () => {
    return await client
        .fetch(`*[_type == "Blog"]{${blogFields}}`)
}

const getBlogBySlug = async (slug) => {
    return await client
        .fetch(
            `*[_type == "Blog" && slug.current == $slug]
            {${blogFields}}`
            , {slug}
        )
        .then(res => res?.[0])
}
export {getAllBlogs, getBlogBySlug}