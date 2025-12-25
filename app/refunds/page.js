export default function RefundPolicy() {
  return (
    <div className="bg-[#0a0a0a] text-[#ededed] min-h-screen p-8 md:p-24 font-sans">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-blue-500 hover:underline mb-8 inline-block">← Back to Home</a>
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
          <p className="text-white font-semibold">All Sales are Final.</p>
          <p>
            Due to the nature of our products being custom-built digital software assets and data visualization models, 
            <strong> no refunds are available</strong> once the product has been delivered or cloud access has been granted.
          </p>
          <p>
            We provide iterative feedback rounds during the development process to ensure the final product 
            meets the agreed scope before delivery.
          </p>
          <p className="pt-8 border-t border-gray-900 text-sm">
            Service provided by FOP Kononchuk Oleksandr Yaroslavovych. 
            Inquiries: <a href="mailto:admin@calyxra.com" className="text-blue-500 underline">admin@calyxra.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}