const PrivacyPolicy = () => {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="bg-gray-100 pt-28 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-serifDisplay font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-12">
        {/* Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may collect personal information such as your name, email
            address, phone number, company details, and any other information
            you voluntarily provide through contact forms, inquiries, or
            service requests.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The information collected is used to respond to inquiries, provide
            services, improve our offerings, communicate updates, and ensure a
            secure user experience.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            3. Data Protection & Security
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access, loss, or
            misuse.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            4. Sharing of Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We do not sell or rent your personal data. Information may be shared
            only with trusted partners or service providers when required to
            deliver services, comply with legal obligations, or protect our
            rights.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            5. Your Rights
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You have the right to access, update, or request deletion of your
            personal data. You may also withdraw consent at any time by
            contacting us.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">
            6. Changes to This Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page with an updated effective date.
          </p>
        </div>

        <div className="pt-6 border-t">
          <p className="text-sm text-gray-500">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
