"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";

export default function OrderOnlinePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="mediumLargeSizeLargeTitles"
      background="aurora"
      cardStyle="soft-shadow"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={[
              {
                name: "Home",                id: "/"
              },
              {
                name: "Over Ons",                id: "/#about"
              },
              {
                name: "Spareribs & Menu",                id: "/#menu"
              },
              {
                name: "Online Bestellen",                id: "/order-online"
              },
              {
                name: "Evenementen",                id: "/#events"
              },
              {
                name: "Getuigenissen",                id: "/#testimonials"
              },
              {
                name: "Veelgestelde Vragen",                id: "/#faq"
              },
              {
                name: "Contact",                id: "/#contact"
              }
            ]}
            button={{
              text: "Reserveer een Tafel",              href: "/#contact"
            }}
            brandName="The Old Resto"
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EiDbwj2wR4WkRq3NrUNPa6gXzp/uploaded-1780653655490-951p9d.svg"
            logoAlt="Het Oude Resto Logo"
          />
        </div>

        <div id="order-online-menu" data-section="order-online-menu">
          <ProductCardOne
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={false}
            products={[
              {
                id: "ol0",                name: "Signature BBQ Spareribs",                price: "€32.00",                imageSrc: "http://img.b2bpic.net/free-photo/roasted-rack-pork-ribs_80436-1249.jpg?_wi=1",                imageAlt: "Signature BBQ Spareribs"
              },
              {
                id: "ol1",                name: "Klassieke Beef Burger",                price: "€18.00",                imageSrc: "http://img.b2bpic.net/free-photo/delicious-cheeseburger_144627-27083.jpg",                imageAlt: "Klassieke Beef Burger"
              },
              {
                id: "ol2",                name: "Gourmet Veggie Pizza",                price: "€22.00",                imageSrc: "http://img.b2bpic.net/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-12165.jpg",                imageAlt: "Gourmet Veggie Pizza"
              },
              {
                id: "ol3",                name: "Pittige Kipvleugels (6 stuks)",                price: "€14.00",                imageSrc: "http://img.b2bpic.net/free-photo/fried-chicken-wings-barbecue-sauce-served-with-herbs_140725-50269.jpg",                imageAlt: "Pittige Kipvleugels"
              },
              {
                id: "ol4",                name: "Krokante Franse Frietjes",                price: "€7.00",                imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-fries_23-2148135899.jpg",                imageAlt: "Krokante Franse Frietjes"
              },
              {
                id: "ol5",                name: "Verse Tuinsalade",                price: "€12.00",                imageSrc: "http://img.b2bpic.net/free-photo/fresh-salad-with-greens-tomatoes_140725-1175.jpg",                imageAlt: "Verse Tuinsalade"
              },
              {
                id: "ol6",                name: "Chocolade Lavacake",                price: "€10.00",                imageSrc: "http://img.b2bpic.net/free-photo/cake-slice-with-melted-chocolate_23-2148408906.jpg",                imageAlt: "Chocolade Lavacake"
              }
            ]}
            title="Bestel Jouw Favoriete Spareribs & Gerechten Online!"
            description="Geniet van de legendarische smaak van The Old Resto's spareribs en andere klassieke gerechten vanuit het comfort van je huis. Blader door onze selectie en bestel nu voor snelle thuisbezorging."
            buttons={[
              {
                text: "Verder naar Afrekenen",                href: "#"
              }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoReveal
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EiDbwj2wR4WkRq3NrUNPa6gXzp/uploaded-1780653655490-951p9d.svg"
            logoAlt="Het Oude Resto Logo"
            logoText="The Old Resto"
            leftLink={{
              text: "Home",              href: "/"
            }}
            rightLink={{
              text: "Reserveringen",              href: "/#contact"
            }}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}