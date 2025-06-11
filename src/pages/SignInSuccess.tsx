
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const SignInSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md premium-shadow">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-green-600">Congratulations!</CardTitle>
          <CardDescription className="text-lg">
            You are successfully signed in
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Welcome back to Titan Alchemy! Ready to continue your fitness transformation?
            </p>
          </div>
          
          <div className="space-y-3">
            <Link to="/">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Start Shopping
              </Button>
            </Link>
            <Link to="/catalog">
              <Button variant="outline" className="w-full">
                Browse Products
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
