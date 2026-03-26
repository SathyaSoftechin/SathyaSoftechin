import { Link } from "react-router-dom";
const Terms = () => {
  return (
    <main className="w-full">

      {/* ================= HERO ================= */}
      <section className="bg-gray-100 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-serifDisplay font-bold text-gray-900">
            Terms & Conditions
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            Please read these terms and conditions carefully before using
            Sathya Softech-in’s website, products, or services.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="space-y-14 text-gray-700 leading-relaxed">

          {/* INTRO */}
          <div>
            <p>
              These Terms and Conditions govern your use of our website,
              services, and products operated by <strong>Sathya Softech-in</strong>.
              By accessing or using our services, you agree to be bound by
              these terms.
            </p>
          </div>

          {/* 1. DEFINITIONS */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              1. Definitions
            </h2>
            <p>
              “Company”, “We”, “Us”, or “Our” refers to Sathya Softech-in.
              “User”, “You” refers to anyone accessing our website or services.
              “Services” include all software development, digital products,
              consulting, and related offerings.
            </p>
          </div>

          {/* 2. USE OF SERVICES */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              2. Use of Our Services
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must use our services only for lawful purposes.</li>
              <li>You agree not to misuse, disrupt, or attempt unauthorized access.</li>
              <li>You are responsible for maintaining confidentiality of any credentials.</li>
            </ul>
          </div>

          {/* 3. INTELLECTUAL PROPERTY */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              3. Intellectual Property
            </h2>
            <p>
              All content, designs, code, trademarks, logos, and materials
              displayed on this website are the intellectual property of
              Sathya Softech-in unless stated otherwise. Unauthorized use,
              reproduction, or distribution is prohibited.
            </p>
          </div>

          {/* 4. PRODUCTS & SERVICES */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              4. Products & Services
            </h2>
            <p>
              Our products (including HloPG, Yaritrip, and future platforms)
              may be under development, beta, or subject to updates. We do not
              guarantee uninterrupted availability or error-free operation.
            </p>
          </div>

          {/* 5. PAYMENTS */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              5. Payments & Billing
            </h2>
            <p>
              If applicable, all payments for services must be made as agreed
              in project proposals or contracts. Fees once paid are
              non-refundable unless explicitly stated.
            </p>
          </div>

          {/* 6. LIMITATION OF LIABILITY */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              Sathya Softech-in shall not be liable for any indirect, incidental,
              special, or consequential damages arising from the use or
              inability to use our services.
            </p>
          </div>

          {/* 7. THIRD-PARTY LINKS */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the content, policies, or practices of those
              external sites.
            </p>
          </div>

          {/* 8. TERMINATION */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              8. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate access to our
              services at any time if these terms are violated.
            </p>
          </div>

          {/* 9. CHANGES */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              9. Changes to Terms
            </h2>
            <p>
              We may update these Terms and Conditions from time to time.
              Continued use of our services constitutes acceptance of the
              updated terms.
            </p>
          </div>

          {/* 10. GOVERNING LAW */}
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              10. Governing Law
            </h2>
            <p>
              These terms shall be governed by and interpreted in accordance
              with the laws of India.
            </p>
          </div>

          {/* CONTACT */}
          <div className="bg-gray-50 rounded-2xl p-8 border">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about these Terms & Conditions, please
              contact us at:
            </p>
            <p className="mt-3 font-medium text-gray-900">
              📧 contact@sathyasoftechin.com
            </p>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Terms;
