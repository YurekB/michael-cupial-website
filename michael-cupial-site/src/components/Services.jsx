import { useEffect } from "react";
import { useLocation } from "react-router";

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div class="servicesPage">
      <h2>Our Services</h2>
      <div class="services">
        <ul>
          <li>
            <h3>RIBA stages A-L</h3>
            <p>
              We offer full architectural services for all RIBA Stages A-L for
              commercial and residential projects: -site
              investigation/assessment -feasibility study -outline proposal
              -planning / building control approvals -tender -detailed
              construction drawings -contract management to completion -post
              contract management
            </p>
          </li>
          <li>
            <h3>
              New builds and minor works, refurbishments, extensions,
              alterations
            </h3>
            <p>
              We specialise in new build and minor works and provide excellent
              value for money architectural services for projects with
              construction value between £50,000 and £2,000,000. Flexible choice
              on services to suit client’s needs. Low fixed rates and quick
              delivery of documentation. Professional advise on all aspect of
              project and construction
            </p>
          </li>
          <li>
            <h3>Party walls</h3>
            <p>
              We provide party wall services inspecting the proposed works and
              possible effects on neighbouring properties, before, after and
              sometimes during construction, in order to report and hopefully
              mitigate damage to the neighbouring properties.
            </p>
          </li>
          <li>
            <h3>Design and build</h3>
            <p>
              We offer for potential developers single source responsibility via
              a full turnkey design and build package producing at fixed cost.
              Full design and build services from feasibility study,
              planning/building regulation approval to completion on site: ·
              free project valuation/estimate · architectural design (full local
              authorities approval) · construction works
            </p>
          </li>
          <li>
            <h3>Site consultation</h3>
            <p>
              We offer one-off site visit to determine feasibility of your
              project, advice on services required, cost implication on
              particular design. One visit lasts approximately two hours and
              includes as following: -assessment on feasibility of project
              including planning involvement -hand sketched diagrams of proposed
              development -general photo survey -implication of building
              regulations, Party Wall Act etc. -cost implication of proposed
              design -advice on required services (structural engineer, M&E
              consultant etc.)
            </p>
          </li>
        </ul>
        <img
          class="servicesImg"
          src="/images/57CR_036.jpg"
          alt="a house extension"
        />
      </div>
    </div>
  );
};

export default Services;
