import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Container } from "./style";
import Renato from "../../assets/MembersImg/renato.jpeg";
import Leonam from "../../assets/MembersImg/leonam.jpeg";
import Larissa from "../../assets/MembersImg/larissa.jpeg";
import Manoela from "../../assets/MembersImg/manoela.jpeg";
import Emily from "../../assets/MembersImg/emily.jpeg";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn} from "react-icons/fa";
const Members = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Nosso time</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      <div>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img src={Leonam} />
            <h3>Leonam Rodrigues</h3>
            <p>Quality Assurance</p>
            <div>
              <a href="https://github.com/Leonam1212" target="_blank">
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/leonam-rodrigues/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </Item>
          <Item>
            <img src={Emily} />
            <h3>Emily Regolão</h3>
            <p>Tech Lead</p>
            <div>
              <a href="https://github.com/emilyregolao" target="_blank">
                <BsGithub />
              </a>
              <a href="https://www.linkedin.com/in/emilypregolao/" target="_blank">
                <FaLinkedinIn />
              </a>
            </div>
          </Item>
          <Item>
            <img src={Renato} />
            <h3>Renato Tateiwa Suguiy</h3>
            <p>Product Owner</p>
            <div>
              <a href="https://github.com/renatosuguiy" target="_blank">
                <BsGithub />
              </a>
              <a href="https://www.linkedin.com/in/renatosuguiy/" target="_blank">
                <FaLinkedinIn />
              </a>
            </div>
          </Item>
          <Item>
            <img src={Larissa} />
            <h3>Larissa Oliveira</h3>
            <p>Quality Assurance</p>
            <div>
              <a href="https://github.com/larissakoliveira" target="_blank">
                <BsGithub />
              </a>
              <a href="https://www.linkedin.com/in/oliveir5/" target="_blank">
                <FaLinkedinIn />
              </a>
            </div>
          </Item>
          <Item>
            <img src={Manoela} />
            <h3>Manoela Cunha</h3>
            <p>Scrum Master</p>
            <div>
              <a href="https://github.com/ManoelaCunha" target="_blank">
                <BsGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/manoela-cunha/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </Item>
        </Carousel>
      </div>
    </Container>
  );
};
export default Members;
