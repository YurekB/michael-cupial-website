import { useEffect } from "react";
import { useLocation } from "react-router";

const Projects = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div class="projectsPage">
      <h2>Our Projects</h2>
      <div>
        <ul class="projects">
          <li>
            <img src="/images/04_pruszowice.jpg" alt="proj1" />
            <p>
              <b>Wroclaw, Poland</b> - Group of 5 three-bedroom terraced houses
              in a small village close to Wroclaw. Planning and working
              drawings, 3D visualisation completion in 2004
            </p>
          </li>
          <li>
            <img src="/images/p2.png" alt="proj2" />
            <p>
              <b>Cranbrook Road</b> - Single storey rear extensions to open plan
              ground floor and general refurbishment works in Chiswick Londond
            </p>
          </li>
          <li>
            <img src="/images/p3.png" alt="proj3" />
            <p>
              <b>Evelyn Close</b> - Conversion of 2-bedroom semi detached house
              into 4-bedroom family house in Whitton London
            </p>
          </li>
          <li>
            <img src="/images/p4.png" alt="proj4" />
            <p>
              <b>Garrick's Ait</b> - Mezzanine level extension on Garrick's Ait
              Island on Thames River in Hampton London, contract value £40,000
            </p>
          </li>
          <li>
            <img src="/images/p5.png" alt="proj5" />
            <p>
              <b>Kingscliffe Gardens</b> - Rear extension to open plan ground
              floor incorporation extension glazing and pre-patinated copper
              roof, contract value £120,000
            </p>
          </li>
          <li>
            <img src="/images/p6.png" alt="proj6" />
            <p>
              <b>Amerland Road</b> - Single storey extensions, roof-terrace
              conersion and refurbishment works in Wandsworth London, contract
              value £140,000
            </p>
          </li>
          <li>
            <img src="/images/p7.png" alt="proj7" />
            <p>
              <b>Lillie Road</b> - Two storey extension to existing 1 bedroom
              flat above driveway in Fulham London, construction includes piled
              foundations, contract value £210,000
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
