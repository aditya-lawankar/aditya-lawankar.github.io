import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './index.css';
import Button from 'react-bootstrap/Button';

const GITHUB = 'https://github.com/aditya-lawankar';

const projects = [
  {
    name: 'P2P Money Transfer',
    repo: 'P2P-Money-Transfer',
    stack: 'React · Solidity · Hardhat',
    description:
      'A UPI-style payments app for sending ETH between wallets, with QR codes, an address book and an on-chain transfer log.',
  },
  {
    name: 'Scan-Mart',
    repo: 'Scan-Mart',
    stack: 'Python · TensorFlow · Flask',
    description:
      'A grocery store where you shop by photo: a CNN trained on 131 kinds of fruit and vegetables identifies the item you upload.',
  },
  {
    name: 'Food Ordering System',
    repo: 'Food-ordering-system',
    stack: 'Java · Spring Boot · MySQL',
    description:
      'A restaurant ordering site with calories and dietary information for every dish, a cart, PayPal checkout and an admin panel.',
  },
  {
    name: 'Indoor Positioning with BLE',
    repo: 'IndoorNavigationBle',
    stack: 'React Native · Bluetooth LE',
    description:
      "An Android app that estimates a phone's position inside a room by trilaterating signal strength from three BLE beacons.",
  },
  {
    name: 'HoGo',
    repo: 'HoGo-Apartment-Management-system',
    stack: 'MongoDB · Express · React · Node.js',
    description:
      'An apartment community portal with real-time resident chat, online maintenance payments and a service directory.',
  },
  {
    name: 'APMC Vendor Store',
    repo: 'APMC-Vendor-Store-Web3',
    stack: 'Solidity · ethers.js',
    description:
      'A decentralised app that records produce purchases on a smart contract and works out profit or loss on resale.',
  },
  {
    name: 'Mastermind',
    repo: 'Mastermind-Game',
    stack: 'C',
    description:
      'The Mastermind code-breaking board game for the terminal, played against the computer.',
  },
  {
    name: 'Library Management Software',
    repo: 'Library-Management-Software',
    stack: 'Python',
    description:
      'A command-line library system with separate menus for students, faculty and the librarian.',
  },
];

function Projects() {
  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 10, offset: 1 }} className="projects" id="my-projects">
          <h1>My projects</h1>
          <Row
            xs={1}
            sm={2}
            md={3}
            className="d-flex justify-content-center flex-wrap"
          >
            {projects.map((project) => (
              <Card className="project-card" key={project.repo}>
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Subtitle className="mb-2">{project.stack}</Card.Subtitle>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="card-footer justify-content-center align-items-center d-flex">
                  <a
                    target="_blank"
                    href={`${GITHUB}/${project.repo}`}
                    rel="noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Button variant="light" className="repo-btn">
                      View on GitHub
                    </Button>
                  </a>
                </Card.Footer>
              </Card>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
