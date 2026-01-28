const CookiePolicy = () => {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="bg-gray-100 pt-28 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-serifDisplay font-bold text-gray-900 mb-6">
            Cookie Policy
          </h1>
          <p className="text-gray-600 text-lg">
            This page explains how cookies are used on our website.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-12">
        <div>
          <h2 className="text-xl font-semibold mb-3 text-blue-600">
            1. What Are Cookies?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Cookies are small text files stored on your device when you visit a
            website. They help improve functionality, performance, and user
            experience.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-blue-600">
            2. Types of Cookies We Use
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Essential cookies – required for basic site functionality</li>
            <li>Performance cookies – help us analyze website usage</li>
            <li>Functional cookies – remember user preferences</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-blue-600">
            3. How We Use Cookies
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Cookies help us understand user behavior, improve site performance,
            personalize content, and enhance overall user experience.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-blue-600">
            4. Managing Cookies
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You can control or disable cookies through your browser settings.
            Please note that disabling cookies may affect website functionality.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-blue-600">
            5. Changes to This Policy
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Cookie Policy to reflect changes in technology or
            legal requirements. Updates will be posted on this page.
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

export default CookiePolicy;
