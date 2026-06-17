import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutDoctor from "@/components/AboutDoctor";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import AppointmentForm from "@/components/AppointmentForm";
import ClinicInfoSection from "@/components/ClinicInfoSection";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutDoctor />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <AppointmentForm />
      <ClinicInfoSection />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
