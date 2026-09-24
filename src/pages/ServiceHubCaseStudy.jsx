import Nav from "../components/layout/Nav.jsx";
import Container from "../components/layout/Container.jsx";
import OpenerStrip from "../components/case-study/servicehub/OpenerStrip.jsx";
import ProblemSection from "../components/case-study/servicehub/ProblemSection.jsx";
import SolutionSection from "../components/case-study/servicehub/SolutionSection.jsx";
import ResearchSection from "../components/case-study/servicehub/ResearchSection.jsx";
import InsightsSection from "../components/case-study/servicehub/InsightsSection.jsx";
import KeyTakeawaysSection from "../components/case-study/servicehub/KeyTakeawaysSection.jsx";
import ResearchMethodsSection from "../components/case-study/servicehub/ResearchMethodsSection.jsx";
import EmpathyMapSection from "../components/case-study/servicehub/EmpathyMapSection.jsx";
import PersonasSection from "../components/case-study/servicehub/PersonasSection.jsx";
import UserJourneySection from "../components/case-study/servicehub/UserJourneySection.jsx";
import HowMightWeSection from "../components/case-study/servicehub/HowMightWeSection.jsx";
import InformationArchitectureSection from "../components/case-study/servicehub/InformationArchitectureSection.jsx";
import WireframeIterationSection from "../components/case-study/servicehub/WireframeIterationSection.jsx";
import FlowchartSection from "../components/case-study/servicehub/FlowchartSection.jsx";
import FinalProductSection from "../components/case-study/servicehub/FinalProductSection.jsx";
import UsabilityTestingSection from "../components/case-study/servicehub/UsabilityTestingSection.jsx";
import LessonsLearnedSection from "../components/case-study/servicehub/LessonsLearnedSection.jsx";
import ServiceHubFooter from "../components/case-study/servicehub/ServiceHubFooter.jsx";

export default function ServiceHubCaseStudy() {
  return (
    <>
      <Nav variant="case-study" />
      <main className="pt-20">
        <Container className="pt-10">
          <OpenerStrip />
        </Container>

        <ProblemSection />
        <SolutionSection />
        <ResearchSection />
        <InsightsSection />
        <KeyTakeawaysSection />
        <ResearchMethodsSection />
        <EmpathyMapSection />
        <PersonasSection />
        <UserJourneySection />
        <HowMightWeSection />
        <InformationArchitectureSection />
        <WireframeIterationSection />
        <FlowchartSection />
        <FinalProductSection />
        <UsabilityTestingSection />
        <LessonsLearnedSection />
        <ServiceHubFooter />
      </main>
    </>
  );
}
