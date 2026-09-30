import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './index.css';

const REPO = 'https://github.com/aditya-lawankar/kv-cache-tier-persistence';

function Research() {
  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 10, offset: 1 }} className="research" id="research">
          <h1>Research</h1>
          <Row>
            <Col xs={{ span: 10, offset: 1 }}>
              <p className="research-title">
                Hit Rate Is Not Value: A Rigorous Evaluation of Learned and
                Value-Aware Eviction for Tiered LLM KV-Cache Persistence
              </p>
              <p className="abt-desc">
                I built a system that keeps LLM KV caches across GPU memory,
                NVMe and object storage instead of discarding them when a chat
                session ends, and evaluated six eviction policies on simulated
                workloads and a replay of the Azure LLM inference trace. LRU has
                the highest cache hit rate in every setting, yet on enterprise
                traffic it saves the least GPU compute, while a value-density
                policy saves 1.99&times; as much. The paper explains the gap
                with a break-even context length below which a cache hit is
                worth nothing, and validates the model on a T4 GPU.
              </p>
              <div className="research-links">
                <a
                  target="_blank"
                  href={`${REPO}/blob/main/paper.pdf`}
                  rel="noreferrer"
                >
                  <Button variant="light" className="repo-btn">
                    Read the paper
                  </Button>
                </a>
                <a target="_blank" href={REPO} rel="noreferrer">
                  <Button variant="light" className="repo-btn">
                    View the code
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Research;
