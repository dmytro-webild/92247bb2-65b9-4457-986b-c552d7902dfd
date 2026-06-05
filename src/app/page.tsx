"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
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
          name: "Home",          id: "#home"},
        {
          name: "About",          id: "#about"},
        {
          name: "Menu",          id: "#menu"},
        {
          name: "Order Online",          id: "/order-online"},
        {
          name: "Events",          id: "#events"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      button={{
        text: "Book a Table",        href: "#contact"}}
      brandName="The Old Resto"
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardGallery
      background={{
        variant: "radial-gradient"}}
      title="Experience Timeless Flavors at The Old Resto"
      description="Indulge in classic dishes crafted with passion and tradition, served in an elegant ambiance that whispers stories of the past."
      buttons={[
        {
          text: "View Our Menu",          href: "#menu"},
        {
          text: "Book a Table",          href: "#contact"},
      ]}
      buttonAnimation="opacity"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/truffle-pasta-dish-with-fresh-rosemary-garlic-dark-plate_84443-94474.jpg",          imageAlt: "Gourmet pasta dish"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-shop-with-blurred-effect_23-2148164705.jpg",          imageAlt: "Cozy restaurant interior"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-pina-colada-cocktail_23-2150143242.jpg",          imageAlt: "Craft cocktail"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-yummy-pancakes-with-sweets-fruits-wooden-desk_140725-91378.jpg",          imageAlt: "Decadent dessert"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-chef-working-kitchen_23-2149728007.jpg",          imageAlt: "Chef preparing food"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-hands-holding-carafe-glass_23-2149706765.jpg",          imageAlt: "Wine bottle and glasses"},
      ]}
      mediaAnimation="opacity"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Our Story: A Legacy of Culinary Excellence"
      description="Since its inception in 1985, The Old Resto has been a cherished culinary landmark, dedicated to preserving classic recipes and creating unforgettable dining experiences. Our commitment to quality ingredients and impeccable service has defined generations."
      metrics={[
        {
          value: "1985",          title: "Established"},
        {
          value: "38+",          title: "Years of Service"},
        {
          value: "20+",          title: "Award-Winning Chefs"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/restaurant-with-leather-sofa-paintings-wall_140725-9715.jpg"
      imageAlt="The Old Resto interior"
      mediaAnimation="opacity"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          tag: "Events",          title: "Exclusive Catering",          subtitle: "Bring The Old Resto experience to your event.",          description: "Our expert team crafts customized menus and provides exceptional service for any gathering, from intimate dinners to grand celebrations.",          imageSrc: "http://img.b2bpic.net/free-photo/people-cheering-with-wine-glasses-luxurious-restaurant_23-2150517422.jpg",          imageAlt: "Elegant catering event"},
        {
          tag: "Gatherings",          title: "Private Dining Rooms",          subtitle: "Host your special moments in privacy.",          description: "Perfect for corporate meetings, family celebrations, or romantic evenings, our private rooms offer an intimate setting with personalized attention.",          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-room-with-two-long-dinner-tables_140725-8455.jpg",          imageAlt: "Private event room"},
        {
          tag: "Experience",          title: "Culinary Workshops",          subtitle: "Learn the secrets from our master chefs.",          description: "Join our interactive cooking classes and discover the techniques behind our signature dishes, a perfect activity for food enthusiasts.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-senior-couple-preparing-food-kitchen_23-2147901290.jpg",          imageAlt: "Cooking class"},
      ]}
      title="Beyond the Plate: Our Signature Services"
      description="Discover how The Old Resto can enhance your next occasion with our bespoke services, tailored to create memorable experiences."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "Aged Ribeye Steak",          price: "$45.00",          imageSrc: "http://img.b2bpic.net/free-photo/grilled-beef-steak-with-asparagus-roasted-vegetables_84443-94484.jpg",          imageAlt: "Perfectly cooked steak"},
        {
          id: "p2",          name: "Pan-Seared Scallops",          price: "$38.00",          imageSrc: "http://img.b2bpic.net/free-photo/salmon-salad_74190-5239.jpg",          imageAlt: "Fresh seafood platter"},
        {
          id: "p3",          name: "Truffle Mushroom Risotto",          price: "$29.00",          imageSrc: "http://img.b2bpic.net/free-photo/creamy-risotto-with-herbs-cheese-white-bowl_9975-124450.jpg",          imageAlt: "Creamy mushroom risotto"},
        {
          id: "p4",          name: "Classic Carbonara",          price: "$26.00",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-with-kitchen-utensils-dark-background_23-2148296895.jpg",          imageAlt: "Creamy pasta dish"},
        {
          id: "p5",          name: "Heirloom Tomato Salad",          price: "$18.00",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-chopped-greens-bowl-white-checkered-towel-with-acroshka-yogurt-gray-surface-gray-surface_141793-18321.jpg",          imageAlt: "Fresh vibrant salad"},
        {
          id: "p6",          name: "Roasted Vegetable Tart",          price: "$25.00",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-salad-with-mayyonaise-greens-corns-chicken-inside-plate-dark-desk_140725-50572.jpg",          imageAlt: "Gourmet vegetarian meal"},
      ]}
      title="Our Signature Menu"
      description="A curated selection of our most beloved dishes, prepared with the finest seasonal ingredients and unparalleled culinary expertise."
    />
  </div>

  <div id="events" data-section="events">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "classic",          tag: "Standard",          price: "$75",          period: "per guest",          description: "Our classic set menu, ideal for intimate gatherings.",          button: {
            text: "Select Classic",            href: "#contact"},
          featuresTitle: "Includes:",          features: [
            "3-Course Meal",            "Choice of 2 Appetizers",            "Choice of 3 Main Courses",            "1 Dessert Selection",            "Non-alcoholic Beverages"],
        },
        {
          id: "premium",          tag: "Popular",          price: "$120",          period: "per guest",          description: "An elevated dining experience with premium selections.",          button: {
            text: "Select Premium",            href: "#contact"},
          featuresTitle: "Includes:",          features: [
            "5-Course Tasting Menu",            "Amuse-bouche",            "Choice of 3 Appetizers",            "Choice of 4 Main Courses",            "2 Dessert Selections",            "Sommelier-selected Wine Pairing",            "Coffee & Tea Service"],
        },
        {
          id: "bespoke",          tag: "Custom",          price: "Contact for Quote",          period: "per event",          description: "Tailored to your every desire for a truly unique event.",          button: {
            text: "Inquire Now",            href: "#contact"},
          featuresTitle: "Includes:",          features: [
            "Fully Customizable Menu",            "Private Chef & Service Staff",            "Exclusive Venue Access",            "Premium Beverage Package",            "Decor & Ambiance Consultation"],
        },
      ]}
      title="Event & Private Dining Packages"
      description="From intimate celebrations to grand events, our bespoke packages are crafted to make your special moments truly unforgettable."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "Eleanor Vance",          role: "Regular Patron",          testimonial: "The Old Resto consistently delivers an exquisite dining experience. The ambiance is charming, and the food is simply divine. A true gem!",          imageSrc: "http://img.b2bpic.net/free-photo/smile-face-green-ball-with-golden-five-stars-customer-client-survey-satisfaction-after-use-product-service-concept-by-3d-render_616485-67.jpg",          imageAlt: "Eleanor Vance"},
        {
          id: "t2",          name: "Jonathan Croft",          role: "Food Critic",          testimonial: "A masterclass in classic cuisine. Every dish is a testament to skill and tradition. The service is impeccable, truly a five-star establishment.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-courier-yellow-uniform-holding-delivery-bowl-along-with-notepad-writing-notes-pink-background_140725-40669.jpg",          imageAlt: "Jonathan Croft"},
        {
          id: "t3",          name: "Isabella Rossi",          role: "Event Host",          testimonial: "We hosted our anniversary dinner here, and it was perfect. The private dining room, personalized menu, and attentive staff made it unforgettable.",          imageSrc: "http://img.b2bpic.net/free-photo/young-stylish-woman-sitting-cafe-eating-tasty-pie_285396-1092.jpg",          imageAlt: "Isabella Rossi"},
        {
          id: "t4",          name: "Chef Antoine Dubois",          role: "Visiting Chef",          testimonial: "It's rare to find a restaurant that honors tradition while executing with such precision. The Old Resto is a testament to culinary heritage.",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-chef-wearing-glasses-uniform-cap-looking-pointing-camera-isolated-purple-background_141793-134429.jpg",          imageAlt: "Chef Antoine Dubois"},
        {
          id: "t5",          name: "Margot & George",          role: "Long-time Guests",          testimonial: "We've been coming to The Old Resto for decades. It feels like home, but with much better cooking! Always a delightful evening.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-beautiful-asian-mature-woman-showing-ok-sign-smiling-approve-like-product-service-standing-pink-background_1258-159931.jpg",          imageAlt: "Margot & George"},
      ]}
      title="What Our Guests Say"
      description="Hear from those who have savored the unique experience that defines The Old Resto."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Gourmet Magazine",        "The Local Gazette",        "Gastronomy Awards",        "Travel & Leisure",        "Chef's Guild",        "Foodie Forum",        "Hospitality Excellence"]}
      title="Recognized for Excellence"
      description="Proudly featured in leading culinary publications and awarded by esteemed organizations for our unwavering commitment to quality."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",          title: "Do I need a reservation?",          content: "Reservations are highly recommended, especially for weekend evenings and special events, to ensure a seamless dining experience."},
        {
          id: "f2",          title: "Do you accommodate dietary restrictions?",          content: "Yes, our culinary team is happy to accommodate most dietary restrictions and allergies. Please inform us when making your reservation."},
        {
          id: "f3",          title: "What are your operating hours?",          content: "We are open Tuesday to Sunday from 5:00 PM to 10:00 PM. We are closed on Mondays. Special holiday hours may apply."},
        {
          id: "f4",          title: "Is there a dress code?",          content: "We encourage smart casual attire to maintain the elegant ambiance of our restaurant."},
        {
          id: "f5",          title: "Do you offer private dining?",          content: "Yes, we have several private dining rooms perfect for intimate gatherings or corporate events. Please contact us for more details and booking."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/happy-man-serving-guest-with-coffee-while-working-parttime-as-waiter-cafe_637285-2468.jpg"
      imageAlt="Restaurant staff welcoming guests"
      mediaAnimation="opacity"
      mediaPosition="right"
      title="Frequently Asked Questions"
      description="Find quick answers to the most common inquiries about dining at The Old Resto."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Reservations"
      title="Book Your Unforgettable Dining Experience"
      description="Ready to savor the timeless flavors and elegant ambiance of The Old Resto? Reserve your table today and let us create a memorable evening for you."
      buttons={[
        {
          text: "Make a Reservation",          href: "#"},
        {
          text: "Send an Inquiry",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Explore",          items: [
            {
              label: "Home",              href: "#home"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Our Menu",              href: "#menu"},
            {
              label: "Order Online",              href: "/order-online"},
            {
              label: "Private Events",              href: "#events"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Reservations",              href: "#contact"},
            {
              label: "Contact Us",              href: "#contact"},
            {
              label: "Careers",              href: "#"},
            {
              label: "Press",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 The Old Resto. All rights reserved."
      bottomRightText="Crafted with tradition."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
