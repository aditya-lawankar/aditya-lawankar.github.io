import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './index.css';

function SkillCard(props) {
  return (
    <Card className="skill-card">
      <Card.Body className="skill-card-body">
        <Card.Title className="skill-card-title">{props.skillName}</Card.Title>
      </Card.Body>
    </Card>
  );
}

function Skills() {
  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 10, offset: 1 }} className="skills">
          <Row>
            <Col xs={{ span: 10, offset: 1 }} className="abt-box">
              <h1>About me</h1>
              <p className="abt-desc">
                I am a cloud developer at Hewlett Packard Enterprise in
                Bangalore, India, and studied computer science at PES
                University. I am most interested in where machine learning meets
                systems: my current research looks at how LLM inference servers
                should store and evict KV caches. My earlier projects span
                full-stack web apps, smart contracts, mobile apps and computer
                vision.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 10, offset: 1 }} className="skill-box">
              <h1>My skills</h1>
              <div className="d-flex flex-wrap justify-content-center skill-card-holder">
                <SkillCard skillName="Python" />
                <SkillCard skillName="C++" />
                <SkillCard skillName="C" />
                <SkillCard skillName="Java" />
                <SkillCard skillName="SQL" />
                <SkillCard skillName="PyTorch" />
                <SkillCard skillName="TensorFlow" />
                <SkillCard skillName="scikit-learn" />
                <SkillCard skillName="Flask" />
                <SkillCard skillName="Spring Boot" />
                <SkillCard skillName="HTML" />
                <SkillCard skillName="CSS" />
                <SkillCard skillName="JavaScript" />
                <SkillCard skillName="Bootstrap" />
                <SkillCard skillName="React.js" />
                <SkillCard skillName="React Native" />
                <SkillCard skillName="Node.js" />
                <SkillCard skillName="MongoDB" />
                <SkillCard skillName="Solidity" />
                <SkillCard skillName="MatLab" />
                <SkillCard skillName="Git" />
                <SkillCard skillName="GitHub" />
                <SkillCard skillName="Docker" />
                <SkillCard skillName="Kubernetes" />
                <SkillCard skillName="Hadoop" />
                <SkillCard skillName="AWS" />
                <SkillCard skillName="Figma" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
