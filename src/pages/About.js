import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () =>
  <div>
    <Hero backgroundImage="https://i.ytimg.com/vi/b6hoBp7Hk-A/maxresdefault.jpg">
      <h1>Break Finder</h1>
      <h2>Finding you the prefect break since 2017</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Break Finder!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
           In July 1885, three teenage Hawaiian princes took a break from their boarding school, St. Mathew’s Hall in San Mateo, and came to cool off in Santa Cruz, California. There, David Kawananakoa, Edward Keliʻiahonui and Jonah Kūhiō Kalaniana'ole surfed the mouth of the San Lorenzo River on custom-shaped redwood boards, according to surf historians Kim Stoner and Geoff Dunn.[4] In 1907 George Freeth was brought to California from Hawaii, to demonstrate surfboard riding as a publicity stunt to promote the opening of the Los Angeles-Redondo-Huntington railroad owned by Henry Huntington, who gave his name to Huntington Beach. Freeth surfed at the Huntington Beach pier and travelled up and down the coast demonstrating surfing and life guard skills.


          </p>
          <p>
           Surfing on the East Coast of the United States began in Wrightsville Beach, North Carolina in 1909 when Burke Haywood Bridgers and a colony of surfers introduced surfing to the East Coast.[5] The State of North Carolina honored Burke Haywood Bridgers and the colony of surfers by placing a North Carolina Highway Marker for PIONEER EAST COAST SURFING on Wrightsville Beach and designated Wrightsville Beach as the birthplace of surfing in North Carolina in 2015.[6] North Carolina has the greater weight of published verifiable accurate evidence and impacts a broader geographical area when compared to other east coast states.[7] Burke Haywood Bridgers and the colony of surfers activities are among the earliest appearances of surfboards in the Atlantic Ocean.[8] The early twentieth century surfers proved that surfing migrated from Hawaii to California and North Carolina about the same time, then Florida. The Wrightsville Beach Museum Waterman Hall of Fame honors, recognizes, and inducts community members for their contributions to the island’s watersport culture.
          </p>
          <p>
            Around the start of the 20th century, Hawaiians living close to Waikiki began to revive surfing, and soon re-established surfing as a sport. The revival is linked to real estate development and efforts to boost tourism.[17] Duke Kahanamoku, "Ambassador of Aloha," Olympic medalist, and avid waterman, helped expose surfing to the world. Kahanamoku's role was later memorialized by a 2002 first class letter rate postage stamp of the United States Postal Service.[18] Author Jack London wrote about the sport after having attempted surfing on his visit to the islands. Surfing progressed tremendously in the 20th century, through innovations in board design and ever increasing public exposure.
          </p>
        </Col>
      </Row>
    </Container>
  </div>;

export default About;
