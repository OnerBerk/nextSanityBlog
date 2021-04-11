import {Row, Col, Media, Card, Nav, Image} from "react-bootstrap"
import Layout from "component/uiComponent/Layout";
import AuthorIntro from "../component/uiComponent/authorIntro";
import CardListItem from "../component/uiComponent/cardListItem";
import CardItem from "../component/uiComponent/cardItem";
import {getAllBlogs} from "../lib/api";


export default function Home({blogs}) {
    return (
        <Layout>
            <AuthorIntro/>
            <hr/>
            {/* className from props */}
            <div className={`page-wrapper`}>
                <Row className="mb-5">
                    <Col md="10">
                        <CardListItem/>
                    </Col>

                    {
                        blogs.map((blog, i )=>
                            <Col key={i} md="4">
                                <CardItem
                                    author={blog.author}
                                    title={blog.title}
                                    subtitle={blog.subTitle}
                                    date={blog.date}
                                    image={blog.coverImage}
                                    link={{
                                        href:'/blogs/[slug]',
                                        as:`/blogs/${blog.slug}`
                                    }}
                                />
                            </Col>
                        )
                    }
                </Row>
            </div>
        </Layout>
    )
}

//cette fonction seras appeler lors du build de l'app
export async function getStaticProps() {
    const blogs = await getAllBlogs();
    return {
        props: {blogs}
    }
}
