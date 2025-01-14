import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-surface p-6 rounded-lg hover:translate-y-[-4px] transition-all duration-300">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <span className="text-primary text-2xl">{service.icon}</span>
      </div>

      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-text-secondary mb-4">{service.description}</p>

      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-text-secondary">
            <span className="mr-2 text-primary">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
