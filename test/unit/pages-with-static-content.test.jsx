import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Home } from "../../src/client/pages/Home";
import { Delivery } from "../../src/client/pages/Delivery";
import { Contacts } from "../../src/client/pages/Contacts";

describe("Страницы имеют статическое содержимое", () => {
  test("Страница главная", () => {
    const { container } = render(<Home />);
    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<div class="Home"><div class="row"><div class="col bg-orange text-white py-4 bg-opacity-75"><p class="display-3">Welcome to Kogtetochka store!</p><p class="lead">We have a large assortment of scratching posts!</p></div></div><div class="row mb-4"><div class="col-12 col-md-4 bg-light py-3"><h1>Stability</h1><p class="lead">Our scratching posts are crafted with precision and designed for unparalleled stability. Made from high-quality materials, they provide a sturdy platform for your cat's scratching needs.</p></div><div class="col-12 col-md-4 bg-light py-3"><h1>Comfort</h1><p class="lead">Pamper your feline friend with the luxurious comfort of our scratching posts. Covered in soft, plush fabric, they offer a cozy retreat for your cat to relax and unwind.</p></div><div class="col-12 col-md-4 bg-light py-3"><h1>Design</h1><p class="lead">Engage your cat's natural instincts and keep them entertained for hours with our interactive scratching posts. Featuring built-in toys and enticing textures, they stimulate your cat's senses and encourage active play.</p></div></div><div class="row mb-4"><div class="col-12py-3"><p class="fs-1">Empower Your Coding Journey with Every Scratch – Get Your Paws on Our Purr-fect Scratchers Today!</p></div></div></div>"`
    );
  });

  test("Страница условия доставки", () => {
    const { container } = render(<Delivery />);
    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<div class="Delivery"><div class="row"><div class="col"><h1>Delivery</h1><p>Swift and Secure Delivery: Experience the convenience of hassle-free shipping with our scratchers. We understand the excitement of receiving your new cat furniture, so we prioritize swift delivery to your doorstep. Rest assured, your order is handled with care every step of the way, ensuring it arrives safely and securely.</p><img class="Image w-25 mb-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkMAYAADkANVKH3ScAAAAASUVORK5CYII="><p>Track Your Package with Ease: Stay informed and in control of your delivery with our easy-to-use tracking system. From the moment your order is placed to the minute it reaches your home, you can monitor its journey in real-time. No more guessing games – know exactly when to expect your package and plan accordingly.</p><p>Customer Satisfaction Guaranteed: Your satisfaction is our top priority, which is why we go above and beyond to provide exceptional delivery service. If you have any questions or concerns about your shipment, our dedicated customer support team is here to assist you every step of the way. Trust us to deliver not only your scratcher but also peace of mind.</p></div></div></div>"`
    );
  });

  test("Страница контакты", () => {
    const { container } = render(<Contacts />);
    expect(container.innerHTML).toMatchInlineSnapshot(
      `"<div class="Contacts"><div class="row"><div class="col"><h1>Contacts</h1><p>Have a question about our scratchers or need help placing an order? Don't hesitate to reach out to us! Our dedicated team is here to provide you with top-notch service and support.</p><p>Our friendly representatives are available during business hours to assist you with any inquiries you may have.</p><p>At our store, customer satisfaction is our priority, and we're committed to ensuring you have a smooth and enjoyable shopping experience. Reach out to us today – we're here to help make your cat's scratching dreams a reality!</p></div></div></div>"`
    );
  });
});
