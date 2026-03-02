const TickerStrip = () => {
    const items = [
        "Instagram Growth",
        "Content Strategy",
        "Reels & Posts",
        "Brand Identity",
        "Ads Management",
        "Local Reach",
        "Monthly Reports",
        "Fast Communication",
    ];

    return (
        <div className="py-3 overflow-hidden bg-card/40 border-y border-border/50">
            <div className="flex whitespace-nowrap animate-ticker">
                {[...items, ...items].map((item, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-3 text-muted-foreground/60 text-xs font-display tracking-[0.2em] uppercase px-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block shrink-0" />
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TickerStrip;
