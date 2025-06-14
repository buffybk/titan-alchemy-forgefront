
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Truck, Award } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/eee3bedd-4a40-4bba-a65a-581f4df226c0.png')`,
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                Transform Your
                <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent block">
                  Fitness Journey
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow-md">
                Premium supplements and wellness products designed to unlock your potential. 
                Quality you can trust, results you can feel.
              </p>
              <Link to="/catalog">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">Why Choose Titan Alchemy?</h2>
              <p className="text-lg text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                We're committed to providing the highest quality supplements with transparency, 
                science, and results that speak for themselves.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="premium-shadow hover-lift bg-black/80 border-primary/20 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">High-Quality Products</h3>
                  <p className="text-gray-300">
                    Lab-tested, premium ingredients sourced from trusted suppliers. 
                    Every product meets our rigorous quality standards.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="premium-shadow hover-lift bg-black/80 border-primary/20 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Secure & Easy Shopping</h3>
                  <p className="text-gray-300">
                    Safe, encrypted checkout process with multiple payment options. 
                    Your personal information is always protected.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="premium-shadow hover-lift bg-black/80 border-primary/20 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Truck className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">Fast Shipping</h3>
                  <p className="text-gray-300">
                    Free shipping on orders over $50. Most orders ship within 24 hours 
                    and arrive in 2-3 business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-lg text-gray-200 mb-8 drop-shadow-md">
              Join thousands of athletes and fitness enthusiasts who trust Titan Alchemy 
              for their supplement needs.
            </p>
            <Link to="/catalog">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-black/50 backdrop-blur-sm">
                Browse Our Products
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
