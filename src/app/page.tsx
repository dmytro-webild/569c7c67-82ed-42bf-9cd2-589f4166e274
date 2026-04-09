"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import { Award, CheckCircle, Clock, Eye, FileText, Search, Settings, Shield, Tool, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Diferenciais",
          id: "features",
        },
        {
          name: "Sobre",
          id: "about",
        },
        {
          name: "Serviços",
          id: "services",
        },
        {
          name: "Contato",
          id: "contact",
        },
      ]}
      brandName="Mecânica JS"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Precisão técnica para quem não aceita menos que a perfeição."
      description="Na Mecânica JS, resolvemos o que outros apenas diagnosticam. Profissionais de elite, tecnologia de ponta e o cuidado que seu veículo merece."
      buttons={[
        {
          text: "Agendar Diagnóstico de Elite",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/close-up-cinematic-photograph-of-an-auto-1775745771756-fcc4d912.png",
          imageAlt: "Motor sendo ajustado",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/close-up-macro-shot-of-automotive-gears--1775745770698-29a5cc4d.png",
          imageAlt: "Engrenagens de precisão",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/modern-digital-diagnostic-monitor-showin-1775745772103-0604377a.png",
          imageAlt: "Diagnóstico digital",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/exquisite-car-bodywork-detail-perfect-po-1775745769554-05153832.png",
          imageAlt: "Detalhamento premium",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-highly-detailed-professional-photo-of--1775745770238-cf20be87.png",
          imageAlt: "Tecnologia de ponta",
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "BMW",
        "Mercedes-Benz",
        "Audi",
        "Porsche",
        "Land Rover",
        "Volvo",
        "Jaguar",
      ]}
      title="Confiança de quem entende de performance"
      description="4.2 estrelas no Google: A confiança de quem entende de performance."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Mão de Obra de Elite",
          description: "Especialistas treinados para diagnósticos complexos e precisos.",
          media: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/close-up-macro-shot-of-automotive-gears--1775745770698-29a5cc4d.png",
            imageAlt: "Especialista em ação",
          },
          items: [
            {
              icon: Shield,
              text: "Certificação técnica global",
            },
            {
              icon: Award,
              text: "Treinamento contínuo",
            },
            {
              icon: Zap,
              text: "Diagnóstico ágil",
            },
          ],
          reverse: false,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/close-up-cinematic-photograph-of-an-auto-1775745771756-fcc4d912.png",
          imageAlt: "Close-up cinematic photograph of an automotive high-performance car engine being precision-tuned wit",
        },
        {
          title: "Solução Definitiva",
          description: "Sem retornos desnecessários. O carro sai intacto e pronto para a estrada.",
          media: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/modern-digital-diagnostic-monitor-showin-1775745772103-0604377a.png",
            imageAlt: "Solução definitiva",
          },
          items: [
            {
              icon: CheckCircle,
              text: "Garantia de serviço",
            },
            {
              icon: Search,
              text: "Análise sistêmica completa",
            },
            {
              icon: Tool,
              text: "Equipamentos de ponta",
            },
          ],
          reverse: true,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-highly-detailed-professional-photo-of--1775745770238-cf20be87.png",
          imageAlt: "A highly detailed, professional photo of a modern high-end mechanic hands holding precision digital ",
        },
        {
          title: "Transparência Premium",
          description: "Relatórios detalhados de cada serviço executado.",
          media: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/exquisite-car-bodywork-detail-perfect-po-1775745769554-05153832.png",
            imageAlt: "Transparência total",
          },
          items: [
            {
              icon: FileText,
              text: "Relatório digital completo",
            },
            {
              icon: Eye,
              text: "Transparência total em peças",
            },
            {
              icon: Clock,
              text: "Cronograma claro",
            },
          ],
          reverse: false,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/close-up-macro-shot-of-automotive-gears--1775745770698-29a5cc4d.png",
          imageAlt: "Close-up macro shot of automotive gears, high-end mechanical precision, metallic textures, dark indu",
        },
      ]}
      title="Por que escolher a Mecânica JS?"
      description="Elevamos o padrão do cuidado automotivo através de diagnósticos precisos e processos transparentes."
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Onde a técnica encontra a integridade."
      metrics={[
        {
          icon: Award,
          label: "Anos de Excelência",
          value: "15+",
        },
        {
          icon: Users,
          label: "Clientes Satisfeitos",
          value: "5000+",
        },
        {
          icon: Settings,
          label: "Diagnósticos Realizados",
          value: "12k+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Injeção Eletrônica",
          price: "Investimento a partir de R$ 800",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/close-up-macro-shot-of-automotive-gears--1775745770698-29a5cc4d.png",
        },
        {
          id: "2",
          name: "Revisão Performance",
          price: "Investimento a partir de R$ 1200",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/modern-digital-diagnostic-monitor-showin-1775745772103-0604377a.png",
        },
        {
          id: "3",
          name: "Suspensão",
          price: "Investimento a partir de R$ 900",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/exquisite-car-bodywork-detail-perfect-po-1775745769554-05153832.png",
        },
        {
          id: "4",
          name: "Freios Premium",
          price: "Investimento a partir de R$ 750",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/a-highly-detailed-professional-photo-of--1775745770238-cf20be87.png",
        },
        {
          id: "5",
          name: "Escaneamento Digital",
          price: "Investimento a partir de R$ 400",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/low-angle-cinematic-view-of-a-luxury-per-1775745772399-e3d9e286.png",
        },
        {
          id: "6",
          name: "Alinhamento 3D",
          price: "Investimento a partir de R$ 350",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/close-up-cinematic-photograph-of-an-auto-1775745771756-fcc4d912.png",
        },
      ]}
      title="Serviços de Alta Performance"
      description="Tecnologia e cuidado para seu veículo."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-animated",
      }}
      text="Não arrisque a sua segurança com soluções temporárias. Escolha a excelência da Mecânica JS."
      buttons={[
        {
          text: "Falar com um Especialista via WhatsApp",
          href: "https://wa.me/5500000000000",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bag3h5O25bp8ZnRSfrVSnN9A9z/low-angle-cinematic-view-of-a-luxury-per-1775745772399-e3d9e286.png"
      logoText="Mecânica JS"
      columns={[
        {
          title: "Institucional",
          items: [
            {
              label: "Sobre nós",
              href: "#about",
            },
            {
              label: "Carreiras",
              href: "#",
            },
            {
              label: "Blog",
              href: "#",
            },
          ],
        },
        {
          title: "Serviços",
          items: [
            {
              label: "Diagnósticos",
              href: "#services",
            },
            {
              label: "Performance",
              href: "#services",
            },
            {
              label: "Revisões",
              href: "#services",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacidade",
              href: "#",
            },
            {
              label: "Termos",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
