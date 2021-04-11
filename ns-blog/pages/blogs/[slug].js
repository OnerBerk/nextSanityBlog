import Layout from "../../component/uiComponent/Layout";
import {getBlogBySlug} from "../../lib/api";

const BlogDetail = ({blog}) => {
    return (
        <Layout>
            <h1> Blog details page - {blog?.slug}</h1>
        </Layout>
    )
}

export async function getServerSideProps({params}) {
    const blog = await getBlogBySlug(params.slug);
    return {
        props: {blog}
    }
}

export default BlogDetail