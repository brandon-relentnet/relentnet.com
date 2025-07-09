import Link from "next/link";

export default function VPSCTA() {
  return (
    <section className="relative py-section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-6">
          Deploy Your <span className="italic">Infrastructure</span> Today
        </h2>
        <p className="text-base-content/80 max-w-[60ch] mx-auto mb-8">
          Get dedicated resources, full root access, and enterprise-grade performance. 
          Deploy in under 30 seconds with our API or web console.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Deploy VPS Now
          </Link>
          <Link
            href="/hosting/web-hosting"
            className="inline-block bg-base-300 text-base-content px-8 py-4 text-lg rounded-xl tracking-widest font-semibold hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Compare Hosting
          </Link>
        </div>

        {/* Technical features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-sm">
          <div className="flex items-center justify-center gap-2 bg-base-200 p-4 rounded-lg">
            <span className="text-green-500 font-mono">✓</span>
            <span>Root access & custom configs</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-base-200 p-4 rounded-lg">
            <span className="text-green-500 font-mono">✓</span>
            <span>API-driven infrastructure</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-base-200 p-4 rounded-lg">
            <span className="text-green-500 font-mono">✓</span>
            <span>Instant resource scaling</span>
          </div>
        </div>

        {/* Code example */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-base-300 rounded-lg p-6 text-left">
            <div className="text-xs text-base-content/60 mb-2">Deploy via API:</div>
            <pre className="text-sm text-base-content/80 font-mono overflow-x-auto">
{`curl -X POST https://api.relentnet.com/vps/create \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "plan": "professional",
    "os": "ubuntu-22.04",
    "region": "us-east"
  }'`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}