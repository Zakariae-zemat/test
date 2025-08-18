import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Construction, ArrowLeft, MessageCircle } from 'lucide-react';

interface PlaceholderProps {
  title: string;
  description: string;
  feature?: string;
}

export default function Placeholder({ 
  title, 
  description, 
  feature = 'this feature' 
}: PlaceholderProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-2xl w-full px-4 py-12">
        <div className="mb-8 text-center">
          <Link to="/">
            <Button variant="ghost" className="mb-4 text-gray-200 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <Card className="text-center bg-gray-800/70 backdrop-blur-md shadow-xl rounded-xl border border-gray-700">
          <CardHeader className="pt-8">
            <div className="w-20 h-20 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <Construction className="w-10 h-10 text-yellow-600" />
            </div>
            <CardTitle className="text-3xl font-extrabold mb-2">{title}</CardTitle>
            <CardDescription className="text-lg text-gray-300">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <div className="space-y-6">
              <p className="text-gray-400 text-base">
                This page is coming soon! We're working hard to bring you <span className="font-semibold text-yellow-400">{feature}</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                    Go to Dashboard
                  </Button>
                </Link>
                <Button className="border border-gray-600 text-gray-200 hover:bg-gray-700 hover:text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-transform transform hover:scale-105">
                  <MessageCircle className="w-5 h-5" />
                  Request Feature
                </Button>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-500">
                  Want to see <span className="text-yellow-400 font-medium">{feature}</span> implemented? Let us know what you'd like to see!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
