import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Shield, DollarSign } from "lucide-react";

const services = {
  "screen-repair": {
    title: "Screen Repair",
    description: "Professional screen replacement service for all phone models. We fix cracked screens, dead pixels, and touch responsiveness issues.",
    process: [
      "Initial diagnosis of the screen damage",
      "Selection of high-quality replacement parts",
      "Professional screen replacement",
      "Testing of touch functionality and display quality",
      "Final quality check and cleaning"
    ],
    timeframe: "1-2 hours",
    warranty: "90-day warranty on parts and labor",
    startingPrice: "$69"
  },
  "speaker-repair": {
    title: "Speaker/Mic Repair",
    description: "Expert repair service for speaker and microphone issues. We fix audio problems, static sound, and complete speaker failure.",
    process: [
      "Diagnostic testing of audio components",
      "Cleaning of speaker and microphone assemblies",
      "Replacement of damaged components",
      "Sound quality testing",
      "Final performance verification"
    ],
    timeframe: "1-3 hours",
    warranty: "90-day warranty on parts and labor",
    startingPrice: "$49"
  },
  "battery-repair": {
    title: "Battery Repair",
    description: "Replace old or damaged batteries to restore your phone's life.",
    process: [
      "Battery health assessment",
      "Safe removal of the old battery",
      "Installation of a new, high-quality battery",
      "Charging and performance testing",
      "Proper disposal of the old battery"
    ],
    timeframe: "30-60 minutes",
    warranty: "90-day warranty on parts and labor",
    startingPrice: "$39"
  },
  "charging-repair": {
    title: "Charging Port Repair",
    description: "Fix loose connections and damaged charging ports.",
    process: [
      "Inspection of the charging port for damage",
      "Cleaning of the charging port",
      "Repair or replacement of the charging port",
      "Testing of charging functionality",
      "Ensuring proper connection and power flow"
    ],
    timeframe: "1-2 hours",
    warranty: "90-day warranty on parts and labor",
    startingPrice: "$45"
  },
  "button-repair": {
    title: "Button Repair",
    description: "Repair or replace faulty power, volume, or home buttons.",
    process: [
      "Diagnostic testing of button functionality",
      "Removal of faulty buttons",
      "Installation of new, responsive buttons",
      "Testing of button responsiveness",
      "Ensuring proper function and tactile feedback"
    ],
    timeframe: "1-2 hours",
    warranty: "90-day warranty on parts and labor",
    startingPrice: "$35"
  },
  "water-damage": {
    title: "Water Damage Repair",
    description: "Professional water damage treatment and component repair.",
    process: [
      "Immediate assessment and disassembly",
      "Cleaning and drying of internal components",
      "Component-level diagnostics and repair",
      "Corrosion treatment and prevention",
      "Comprehensive testing and reassembly"
    ],
    timeframe: "24-72 hours",
    warranty: "30-day warranty on repaired components",
    startingPrice: "$89"
  },
};

interface Props {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(services).map((id) => ({
    id,
  }));
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services[params.id as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/services"
          className="inline-flex items-center text-accent hover:text-accent/80 mb-8 animate-fade-up"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
        
        <h1 className="text-4xl font-bold text-primary mb-6 animate-fade-up">
          {service.title}
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {service.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="p-6 bg-secondary rounded-xl">
            <Clock className="w-6 h-6 text-accent mb-3" />
            <h3 className="font-semibold text-primary mb-2">Timeframe</h3>
            <p className="text-muted-foreground">{service.timeframe}</p>
          </div>
          <div className="p-6 bg-secondary rounded-xl">
            <Shield className="w-6 h-6 text-accent mb-3" />
            <h3 className="font-semibold text-primary mb-2">Warranty</h3>
            <p className="text-muted-foreground">{service.warranty}</p>
          </div>
          <div className="p-6 bg-secondary rounded-xl">
            <DollarSign className="w-6 h-6 text-accent mb-3" />
            <h3 className="font-semibold text-primary mb-2">Starting Price</h3>
            <p className="text-muted-foreground">{service.startingPrice}</p>
          </div>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl font-bold text-primary mb-6">Repair Process</h2>
          <ul className="space-y-4">
            {service.process.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent text-white text-sm mr-4 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
