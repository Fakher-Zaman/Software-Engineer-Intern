import { Container } from '@/components/Container';

const faqs = [
  [
    {
      question: 'What is Pelican?',
      answer:
        'Pelican is a mobile app designed to help families achieve their education goals by providing investment advice and fund-finding opportunities.',
    },
    {
      question: 'How does Pelican work?',
      answer:
        'Pelican offers personalized investment recommendations and funding resources tailored to your specific educational savings goals. Our platform helps you forecast your financial needs, choose the best investment options, and optimize tax strategies to minimize the impact on your investments.',
    },
    {
      question: 'What are the benefits of using Pelican?',
      answer:
        'By using Pelican, you gain access to expert investment recommendations, funding resources, and tax-saving strategies, all aimed at helping you achieve your educational savings goals. Our platform empowers you to make informed decisions, build financial confidence, and secure your family’s future.',
    },
  ],
  [
    {
      question: 'How much does Pelican cost?',
      answer:
        `Pelican offers two subscription plans:
        <br />
        ● <strong>Core:</strong> $4.99 per month
        <br />
        ● <strong>Premium:</strong> $12.99 per month`,
    },
    {
      question: 'What features are included in each subscription plan?',
      answer:
        `● <strong>Core Plan:</strong> Provides investment recommendations, funding resources, tax-saving
        strategies, and ongoing content to navigate your educational savings goals.
        <br />
        ● <strong>Premium Plan:</strong> Includes all features of the Core plan, plus personalized step-by-step
        action plans, customized savings plans for various education needs, unlimited access to
        chat-based coaching, and ongoing monitoring and adjustments by our financial experts.`,
    },
    {
      question: 'Is Pelican suitable for saving for purposes other than education?',
      answer:
        'Yes, Pelican is designed to help individuals and families save for various financial goals, including education, retirement, and more. Our platform offers flexible tools and resources to support your unique savings needs.',
    },
  ],
  [
    {
      question: 'Is my information secure with Pelican?',
      answer:
        'Yes, we take the security and privacy of your information seriously. Pelican employs industry-standard security measures to safeguard your data and ensure a secure user experience.',
    },
    {
      question: 'Can I cancel my Pelican subscription at any time?',
      answer:
        'Yes, you can cancel your Pelican subscription at any time. There are no long-term commitments, and you can manage your subscription preferences directly within the app.',
    },
    {
      question: 'How can I contact Pelican for support or additional inquiries?',
      answer:
        'For support or further inquiries, you can reach out to our customer service team through the Pelican app or by emailing support@pelican.com. We’re here to assist you every step of the way!',
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p
                      className="mt-4 text-sm text-gray-700"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}