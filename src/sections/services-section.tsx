import Slider from "@/components/slider/slider";
import { services } from "@/data/data";
import Section from "@/layouts/section";

export default function ServicesSection() {
    return (
        <Section id="1.0" title="Наши услуги">
            <Slider items={services} />
        </Section>
    );
}
