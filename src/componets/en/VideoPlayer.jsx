import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
function VideoPlayer(props) {
    return (
        <Container>
            <div className="ratio ratio-16x9">
                <iframe src={props.url} title="YouTube video" allowFullScreen></iframe>
            </div>
        </Container>
    );
}
export default VideoPlayer;