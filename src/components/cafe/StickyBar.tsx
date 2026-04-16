import { Phone, CalendarDays, UtensilsCrossed, ShoppingBag } from "lucide-react";

const StickyBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/96 backdrop-blur-md border-t border-border shadow-[0_-4px_24px_-4px_hsl(25_40%_20%/0.12)]">
    <div className="grid grid-cols-4 divide-x divide-border/60">
      <a
        href="tel:+919329697769"
        className="flex flex-col items-center gap-1 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 active:bg-muted transition-colors"
      >
        <Phone className="w-4 h-4" />
        <span className="text-[10px] font-body font-medium">Call</span>
      </a>

      <a
        href="https://www.zomato.com/indore/love-over-coffee-vijay-nagar/order"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 py-3 text-[#E23744] hover:bg-[#E23744]/8 active:bg-[#E23744]/12 transition-colors"
      >
        <ShoppingBag className="w-4 h-4" />
        <span className="text-[10px] font-body font-medium">Zomato</span>
      </a>

      <a
        href="#contact"
        className="flex flex-col items-center gap-1 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 active:bg-muted transition-colors"
      >
        <CalendarDays className="w-4 h-4" />
        <span className="text-[10px] font-body font-medium">Reserve</span>
      </a>

      <a
        href="#menu"
        className="flex flex-col items-center gap-1 py-3 text-cafe-olive hover:text-cafe-espresso hover:bg-cafe-olive/8 active:bg-cafe-olive/12 transition-colors"
      >
        <UtensilsCrossed className="w-4 h-4" />
        <span className="text-[10px] font-body font-medium">Menu</span>
      </a>
    </div>
  </div>
);

export default StickyBar;
