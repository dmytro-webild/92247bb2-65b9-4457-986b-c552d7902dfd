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
                name: "About",                id: "/#about"
              },
              {
                name: "Spareribs & Menu",                id: "/#menu"
              },
              {
                name: "Order Online",                id: "/order-online"
              },
              {
                name: "Events",                id: "/#events"
              },
              {
                name: "Testimonials",                id: "/#testimonials"
              },
              {
                name: "FAQ",                id: "/#faq"
              },
              {
                name: "Contact",                id: "/#contact"
              }
            ]}
            button={{
              text: "Book a Table",              href: "/#contact"
            }}
            brandName="The Old Resto"
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EiDbwj2wR4WkRq3NrUNPa6gXzp/uploaded-1780653655490-951p9d.svg"
            logoAlt="The Old Resto Logo"
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
                id: "ol1",                name: "Classic Beef Burger",                price: "€18.00",                imageSrc: "http://img.b2bpic.net/free-photo/delicious-cheeseburger_144627-27083.jpg",                imageAlt: "Classic Beef Burger"
              },
              {
                id: "ol2",                name: "Gourmet Veggie Pizza",                price: "€22.00",                imageSrc: "http://img.b2bpic.net/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-12165.jpg",                imageAlt: "Gourmet Veggie Pizza"
              },
              {
                id: "ol3",                name: "Spicy Chicken Wings (6 pcs)",                price: "€14.00",                imageSrc: "http://img.b2bpic.net/free-photo/fried-chicken-wings-barbecue-sauce-served-with-herbs_140725-50269.jpg",                imageAlt: "Spicy Chicken Wings"
              },
              {
                id: "ol4",                name: "Crispy French Fries",                price: "€7.00",                imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-fries_23-2148135899.jpg",                imageAlt: "Crispy French Fries"
              },
              {
                id: "ol5",                name: "Fresh Garden Salad",                price: "€12.00",                imageSrc: "http://img.b2bpic.net/free-photo/fresh-salad-with-greens-tomatoes_140725-1175.jpg",                imageAlt: "Fresh Garden Salad"
              },
              {
                id: "ol6",                name: "Chocolate Lava Cake",                price: "€10.00",                imageSrc: "http://img.b2bpic.net/free-photo/cake-slice-with-melted-chocolate_23-2148408906.jpg",                imageAlt: "Chocolate Lava Cake"
              }
            ]}
            title="Order Your Favorite Spareribs & Dishes for Delivery!"
            description="Enjoy the legendary taste of The Old Resto's spareribs and other classic dishes from the comfort of your home. Browse our selection and order now for quick home delivery."
            buttons={[
              {
                text: "Proceed to Checkout",                href: "#"
              }
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoReveal
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EiDbwj2wR4WkRq3NrUNPa6gXzp/uploaded-1780653655490-951p9d.svg"
            logoAlt="The Old Resto Logo"
            logoText="The Old Resto"
            leftLink={{
              text: "Home",              href: "/"
            }}
            rightLink={{
              text: "Reservations",              href: "/#contact"
            }}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
