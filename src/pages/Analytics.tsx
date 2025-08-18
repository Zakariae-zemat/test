import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Activity, Zap, Calendar, TrendingUp, Bot, Home, CheckCircle } from 'lucide-react';

export default function Analytics() {
  const demoStats = {
    totalRequests: 127,
    totalTokens: 15420,
    lastRequestAt: new Date().toISOString(),
    usageByModel: [
      { model: 'gpt-3.5-turbo', count: 89 },
      { model: 'gpt-4', count: 38 }
    ]
  };

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">Analytics</h1>
            <p className="text-gray-300 mt-1">Demo analytics showing example usage metrics</p>
          </div>
          <Link to="/">
            <Button variant="outline" className="text-black border-gray-600 hover:bg-gray-700">
              <Home className="w-5 h-5 mr-2" /> Home
            </Button>
          </Link>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800 border border-gray-700 hover:shadow-2xl transition-transform hover:scale-105">
            <CardHeader className="pb-3 flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-400">Total Requests</CardTitle>
              <Activity className="w-5 h-5 text-teal-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{demoStats.totalRequests.toLocaleString()}</div>
              <p className="text-gray-400 text-xs mt-1">Demo API calls</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700 hover:shadow-2xl transition-transform hover:scale-105">
            <CardHeader className="pb-3 flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-400">Total Tokens</CardTitle>
              <Zap className="w-5 h-5 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{demoStats.totalTokens.toLocaleString()}</div>
              <p className="text-gray-400 text-xs mt-1">Tokens processed</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700 hover:shadow-2xl transition-transform hover:scale-105">
            <CardHeader className="pb-3 flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-400">Average per Request</CardTitle>
              <TrendingUp className="w-5 h-5 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">
                {Math.round(demoStats.totalTokens / demoStats.totalRequests)}
              </div>
              <p className="text-gray-400 text-xs mt-1">Tokens per request</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700 hover:shadow-2xl transition-transform hover:scale-105">
            <CardHeader className="pb-3 flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-400">Last Request</CardTitle>
              <Calendar className="w-5 h-5 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-white">Recent</div>
              <p className="text-gray-400 text-xs mt-1">{formatDate(demoStats.lastRequestAt)}</p>
            </CardContent>
          </Card>
        </div>

        {/* Usage by Model and Insights */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="bg-gray-800 border border-gray-700 hover:shadow-2xl transition hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white"><Bot className="w-5 h-5 text-teal-400"/> Usage by Model</CardTitle>
              <CardDescription className="text-gray-300">Breakdown of requests by AI model (Demo data)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {demoStats.usageByModel.map((model, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-blue-400' : 'bg-green-400'}`}></div>
                      <span className="font-medium text-white">{model.model}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{model.count} requests</Badge>
                      <span className="text-sm text-gray-400">{Math.round((model.count / demoStats.totalRequests) * 100)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border border-gray-700 hover:shadow-2xl transition hover:scale-105">
            <CardHeader>
              <CardTitle className="text-white">Demo Insights</CardTitle>
              <CardDescription className="text-gray-300">Example analytics for an OpenAI API gateway</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-gradient-to-r from-blue-700 to-teal-600 rounded-lg text-white">
                  <h4 className="font-medium mb-1">Most Used Model</h4>
                  <p className="text-sm">GPT-3.5 Turbo with {demoStats.usageByModel[0].count} requests (~70%)</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-green-700 to-green-500 rounded-lg text-white">
                  <h4 className="font-medium mb-1">Efficiency Score</h4>
                  <p className="text-sm">Average tokens per request: {Math.round(demoStats.totalTokens / demoStats.totalRequests)}</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-purple-700 to-purple-500 rounded-lg text-white">
                  <h4 className="font-medium mb-1">Activity Level</h4>
                  <p className="text-sm">High usage with {demoStats.totalRequests} total requests</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Demo Notice */}
        <Card className="bg-gray-800 border border-gray-700 hover:shadow-2xl transition hover:scale-105 mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white"><CheckCircle className="w-5 h-5 text-green-400"/> Demo Mode Active</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-white mb-3">What you're seeing:</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Simulated usage statistics</li>
                  <li>• Example token consumption metrics</li>
                  <li>• Model usage distribution</li>
                  <li>• Performance analytics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white mb-3">In production this would show:</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Real API request counts</li>
                  <li>• Actual token usage and costs</li>
                  <li>• Performance metrics</li>
                  <li>• Error rates and response times</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <Link to="/dashboard"><Button variant="outline" className="text-black border-gray-600 hover:bg-gray-700">View Dashboard</Button></Link>
          <Link to="/playground"><Button>Try Playground</Button></Link>
        </div>

      </div>
    </div>
  );
}
