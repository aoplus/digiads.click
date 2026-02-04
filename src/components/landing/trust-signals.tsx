export default function TrustSignals() {
  const clientLogos = [
    { name: 'Client A' },
    { name: 'Client B' },
    { name: 'Client C' },
    { name: 'Client D' },
    { name: 'Client E' },
    { name: 'Client F' },
  ];

  return (
    <div className="bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-sm font-bold text-foreground/60 uppercase tracking-wider mb-6">
          Trusted by 50+ Indian MSMEs
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-between">
          {clientLogos.map((item, index) => (
            <div key={index} className="flex items-center text-lg font-medium text-foreground/50 group">
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
