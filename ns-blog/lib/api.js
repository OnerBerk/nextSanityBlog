import client from './sanity';

const getAllBlogs = async () => {
    return await client
        .fetch(`*[_type == "Blog"]{title,subTitle,slug}`)
}
export {getAllBlogs}