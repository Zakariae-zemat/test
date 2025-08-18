import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Shield, Activity, Calendar, Home, Code, BarChart3, Key, Copy } from 'lucide-react';

export default function Dashboard() {
  const [demoApiKey] = useState('or-demo-key-1234567890abcdef...');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white drop-shadow-lg">Dashboard</h1>
              <p className="text-gray-300 mt-1">
                Demo mode - No authentication required
              </p>
            </div>
            <Link to="/">
              <Button variant="outline" className="text-black border-gray-600 hover:bg-gray-700 transition">
                <Home className="w-5 h-5 mr-2" />
                Home
              </Button>
            </Link>
          </div>

          {/* Navigation Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Link to="/playground">
              <Card className="hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer border border-gray-700 bg-gray-800">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-teal-400" />
                    <CardTitle className="text-lg text-white">AI Playground</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    Test AI models and chat completions
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/analytics">
              <Card className="hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer border border-gray-700 bg-gray-800">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-purple-400" />
                    <CardTitle className="text-lg text-white">Analytics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    View usage statistics and insights
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Card className="border border-gray-700 bg-gray-800">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <CardTitle className="text-lg text-white">Demo Mode</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Fully functional without authentication
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gray-800 border border-gray-700 hover:shadow-2xl transition">
              <CardHeader className="pb-3 flex items-center gap-2">
                <Activity className="w-5 h-5 text-teal-400" />
                <CardTitle className="text-sm font-medium text-gray-400">Demo Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white">42</div>
                <p className="text-gray-400 text-xs mt-1">API calls made</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border border-gray-700 hover:shadow-2xl transition">
              <CardHeader className="pb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <CardTitle className="text-sm font-medium text-gray-400">Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-400">Active</div>
                <p className="text-gray-400 text-xs mt-1">System operational</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border border-gray-700 hover:shadow-2xl transition">
              <CardHeader className="pb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <CardTitle className="text-sm font-medium text-gray-400">Models Available</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-400">2</div>
                <p className="text-gray-400 text-xs mt-1">GPT models ready</p>
              </CardContent>
            </Card>
          </div>

          {/* Demo API Key */}
          <Card className="bg-gray-800 border border-gray-700 hover:shadow-2xl transition">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Key className="w-5 h-5 text-white" />
                <CardTitle className="text-white text-lg">Demo API Key</CardTitle>
              </div>
              <CardDescription className="text-gray-300 mt-1">
                Use this demo key to test the API endpoints
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-900">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-medium text-white">Demo Key</h4>
                      <Badge variant="default">Active</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <code className="bg-gray-700 px-2 py-1 rounded text-xs font-mono">
                        {demoApiKey}
                      </code>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(demoApiKey)}
                        className="text-black border-gray-500 hover:bg-gray-700"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="text-sm text-gray-500">Usage: Unlimited • Last used: Just now</div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-700 to-teal-600 rounded-lg text-white">
                  <h4 className="font-medium mb-2 text-lg">How to use this API key:</h4>
                  <div className="text-sm space-y-1">
                    <p>• Copy the demo key above</p>
                    <p>• Use it in the playground to test AI models</p>
                    <p>• Include it as Authorization: Bearer {demoApiKey.substring(0, 20)}...</p>
                    <p>• Make requests to <code className="bg-gray-900 px-1 py-0.5 rounded">/api/chat/completions</code></p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
