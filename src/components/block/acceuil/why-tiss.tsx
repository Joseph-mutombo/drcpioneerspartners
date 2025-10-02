import { BarChart, Bot, ChartNoAxesCombined, ChartNoAxesGantt, Code, Database, Eye, FileText, Globe, Link, ShieldCheck } from "lucide-react";
import SectionTitle from "@/components/sectionTitle";
import ServiceCard from "@/components/serviceCard";
import { Button } from "@/components/ui/button";

export const WhyTiss = () => (
  <>
    {/* Services Section */}
    <section className="py-20 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <SectionTitle
          title="Pourquoi TISSE en RDC?"
            subtitle="Pourquoi TISSE est Essentiel pour votre Succès en RDC ?"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ServiceCard 
              icon={<Globe className=" w-6 h-6 text-white" />} 
              title="Alignement International"
              description="Une Qualité Reconnue, Partout dans le Monde. La norme TISSE aligne votre service sur les meilleures pratiques mondiales, notamment celles inspirées par l'ISO 9001. C'est la garantie d'une crédibilité incontestable pour votre entreprise en RDC, renforçant la confiance des investisseurs et ouvrant les portes à de nouvelles opportunités internationales."
              link="/services"
                color="from-yellow-500 to-yellow-600"
            />
            <ServiceCard 
              icon={<ShieldCheck className="w-6 h-6 text-white" />}
              title="Crédibilité & Structure"
              description="En RDC, où les cadres de formation en service client sont limités, TISSE offre un avantage stratégique. Il fournit une structure fiable et des outils concrets pour évaluer, former et améliorer la qualité de service, permettant aux entreprises de se distinguer par leur professionnalisme et leur excellence durable."
              link="/services"
              color="from-brand-blue to-brand-blue-light"
            />
            <ServiceCard 
              icon={<ChartNoAxesCombined className="w-6 h-6 text-white" />}
              title="Résultats Mesurables"
              description="Le TISSE transforme l'intention de bien faire en performance mesurable. Son cadre rigoureux vous donne les KPI et outils nécessaires pour quantifier l'impact de l'amélioration du service sur la rétention client et la croissance des revenus. Vous pilotez ainsi vos décisions avec des données fiables, faisant du service client un investissement stratégique et rentable."
              link="/services"
              color="from-yellow-500 to-yellow-600"
            />
          </div>

          {/* <div className="text-center mt-16">
            <Link to="/services">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Voir Tous Nos Services
              </Button>
            </Link>
          </div> */}
        </div>
      </section>
    </>
);