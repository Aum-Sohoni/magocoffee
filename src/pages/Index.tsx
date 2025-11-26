import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-coffee.jpg";
import espressoImage from "@/assets/espresso.jpg";
import cappuccinoImage from "@/assets/cappuccino.jpg";
import coldBrewImage from "@/assets/cold-brew.jpg";
const Index = () => {
  const featuredDrinks = [{
    name: "Signature Espresso",
    description: "Rich, bold, and perfectly extracted from our house blend",
    price: "$3.50",
    image: espressoImage
  }, {
    name: "Velvet Cappuccino",
    description: "Silky microfoam meets expertly pulled espresso",
    price: "$4.50",
    image: cappuccinoImage
  }, {
    name: "Cold Brew",
    description: "Smooth, refreshing, steeped for 24 hours",
    price: "$4.75",
    image: coldBrewImage
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 bg-coffee-dark/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-cream mb-6">
            Mago Coffee 
          </h1>
          <p className="font-inter text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto">
            Where Every Cup Tells a Story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-warm-accent hover:bg-warm-accent/90 text-cream font-inter font-medium text-lg px-8 py-6">
              View Menu
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-cream text-cream hover:bg-cream hover:text-coffee-dark font-inter font-medium text-lg px-8 py-6">
              Visit Us
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-playfair text-5xl md:text-6xl font-bold text-coffee-dark mb-6">
                Crafted with Passion
              </h2>
              <p className="font-inter text-lg text-coffee-medium leading-relaxed mb-6">
                At Brew Haven, we believe coffee is more than a beverage—it's an experience. 
                Every bean is carefully sourced from sustainable farms, roasted in small batches, 
                and brewed with precision.
              </p>
              <p className="font-inter text-lg text-coffee-medium leading-relaxed">
                Our baristas are artisans, dedicated to crafting the perfect cup while creating 
                a warm, welcoming space where the community can gather, work, and connect.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-fade-in [animation-delay:200ms]">
              <Card className="p-6 bg-cream border-coffee-light/20">
                <div className="text-4xl font-playfair font-bold text-warm-accent mb-2">2018</div>
                <p className="font-inter text-coffee-medium">Year Established</p>
              </Card>
              <Card className="p-6 bg-cream border-coffee-light/20">
                <div className="text-4xl font-playfair font-bold text-warm-accent mb-2">100%</div>
                <p className="font-inter text-coffee-medium">Organic Beans</p>
              </Card>
              <Card className="p-6 bg-cream border-coffee-light/20">
                <div className="text-4xl font-playfair font-bold text-warm-accent mb-2">50+</div>
                <p className="font-inter text-coffee-medium">Drink Varieties</p>
              </Card>
              <Card className="p-6 bg-cream border-coffee-light/20">
                <div className="text-4xl font-playfair font-bold text-warm-accent mb-2">5★</div>
                <p className="font-inter text-coffee-medium">Customer Rated</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Drinks Section */}
      <section className="py-24 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-coffee-dark mb-4">
              Featured Drinks
            </h2>
            <p className="font-inter text-xl text-coffee-medium">
              Discover our most loved creations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredDrinks.map((drink, index) => <Card key={drink.name} className="overflow-hidden bg-card border-coffee-light/20 hover-scale animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="aspect-square overflow-hidden">
                  <img src={drink.image} alt={drink.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-2xl font-bold text-coffee-dark">
                      {drink.name}
                    </h3>
                    <span className="font-inter text-xl font-semibold text-warm-accent">
                      {drink.price}
                    </span>
                  </div>
                  <p className="font-inter text-coffee-medium">
                    {drink.description}
                  </p>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-coffee-dark mb-4">
              Visit Us
            </h2>
            <p className="font-inter text-xl text-coffee-medium">
              We're here to serve you
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-cream border-coffee-light/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-warm-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-coffee-dark mb-2">
                      Location
                    </h3>
                    <p className="font-inter text-coffee-medium">
                      123 Artisan Street<br />
                      Downtown District<br />
                      Coffee City, CC 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-warm-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-coffee-dark mb-2">
                      Hours
                    </h3>
                    <p className="font-inter text-coffee-medium">
                      Monday - Friday: 7:00 AM - 8:00 PM<br />
                      Saturday: 8:00 AM - 9:00 PM<br />
                      Sunday: 8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-cream border-coffee-light/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-warm-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-coffee-dark mb-2">
                      Phone
                    </h3>
                    <p className="font-inter text-coffee-medium">
                      (555) 123-4567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-warm-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-coffee-dark mb-2">
                      Email
                    </h3>
                    <p className="font-inter text-coffee-medium">
                      hello@brewhaven.com
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full bg-warm-accent hover:bg-warm-accent/90 text-cream font-inter font-medium" size="lg">
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coffee-dark text-cream py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-playfair text-3xl font-bold mb-4">Brew Haven</h3>
          <p className="font-inter text-cream/80 mb-6">
            Crafting exceptional coffee experiences since 2018
          </p>
          <p className="font-inter text-sm text-cream/60">
            © 2025 Brew Haven. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;