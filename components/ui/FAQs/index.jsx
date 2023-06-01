import SectionWrapper from "../../SectionWrapper";

const faqsList = [
  {
    q: "How do I search for homes for rent on your website?",
    a: "To search for homes for rent in your desired location, simply enter the city in the search bar on our homepage. You can also use filters to refine your search based on your preferences such as price range, number of bedrooms, and amenities. Please note this is a work in feature.",
  },
  {
    q: "What are the advantages of using this over other services?",
    a: "It is free. It does not cost anything to use the service unlike other paid services that require you to pay.",
  },
  {
    q: "How can I contact the property owner or landlord?",
    a: "We can't disclose the landlord due to privacy concerns. But we can help you to get through if any grievances arise.",
  },
  {
    q: "Are utilities included in the rental price?",
    a: "The inclusion of utilities varies from one property to another. Some rentals may include certain utilities, such as water or trash, while others may require tenants to pay for utilities separately. The listing details will usually specify which utilities are included or excluded.",
  },
  {
    q: "What is the security deposit amount?",
    a: "The security deposit amount is set by the landlord or property management company. It is typically equal to one or two months rent and serves as a protection against any damages or unpaid rent during the tenancy. The specific deposit amount will be mentioned in the listing or can be discussed.",
  },

  {
    q: "Who are we? What are we going to achieve?",
    a: "We (more on below) have taken up the initiative to help people get home for rent in a hassle free manner. Social media is a great place for businesses because it has the potential to reach millions of people, so we start with that and taken the first step.",
  },
];

const FAQs = () => (
  <SectionWrapper id="faqs">
    <div className="custom-screen text-gray-600 ">
      <div className="max-w-xl xl:mx-auto xl:text-center">
        <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-3">Everything you need to know about the services.</p>
      </div>
      <div className="mt-12">
        <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
          {faqsList.map((item, idx) => (
            <li key={idx} className="space-y-3">
              <summary className="flex items-center justify-between font-semibold text-gray-700">
                {item.q}
              </summary>
              <p
                dangerouslySetInnerHTML={{ __html: item.a }}
                className="leading-relaxed"
              ></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default FAQs;
