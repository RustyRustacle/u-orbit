import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import PipelineSection from "@/components/sections/PipelineSection";
import AstroSection from "@/components/sections/AstroSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import ValuePropSection from "@/components/sections/ValuePropSection";
import OutcomeSection from "@/components/sections/OutcomeSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PipelineSection />
      <AstroSection />
      <ProgramsSection />
      <ValuePropSection />
      <OutcomeSection />
      <FinalCTASection />
    </div>
  );
}
