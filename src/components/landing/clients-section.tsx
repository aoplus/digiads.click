export default function ClientsSection() {
    const clients = [
        "ClientLogo1", "ClientLogo2", "ClientLogo3", "ClientLogo4",
        "ClientLogo5", "ClientLogo6", "ClientLogo7", "ClientLogo8",
        "ClientLogo9", "ClientLogo10", "ClientLogo11", "ClientLogo12",
    ];
    
    const industries = [
        "Manufacturing", "Healthcare", "B2B Services", "Retail", "Real Estate", "Education", "Technology"
    ];

    return (
        <section className="py-16 sm:py-24 bg-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground font-headline">
                        Brands We Work With
                    </h2>
                </div>
                <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
                    {clients.map((client, i) => (
                        <div key={i} className="flex justify-center">
                            <p className="text-foreground/60 font-semibold">{client}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                     <h3 className="text-xl font-bold text-foreground mb-4">Industries Served</h3>
                     <p className="text-foreground/80 max-w-4xl mx-auto">
                        {industries.join(' • ')}
                     </p>
                </div>
            </div>
        </section>
    );
}
