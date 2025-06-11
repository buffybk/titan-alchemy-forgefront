
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const Congratulations = () => {
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
            Your account has been successfully created
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Welcome to Titan Alchemy! Your fitness transformation journey starts now.
            </p>
            <p className="text-sm text-muted-foreground">
              Please check your email to verify your account and unlock all features.
            </p>
          </div>
          
          <div className="space-y-3">
            <Link to="/catalog">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Start Shopping
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
