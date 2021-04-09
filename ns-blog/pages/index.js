import {Row, Col, Media, Card, Nav, Image} from "react-bootstrap"
import Layout from "component/uiComponent/Layout";
import AuthorIntro from "../component/uiComponent/authorIntro";
import CardListItem from "../component/uiComponent/cardListItem";
import CardItem from "../component/uiComponent/cardItem";


export default function Home() {
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

                    <Col md="4">
                        <CardItem/>
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}
