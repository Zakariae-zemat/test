import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { 
  Activity, 
  Brain, 
  Users, 
  DollarSign, 
  Server, 
  Clock, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Play, 
  Pause, 
  RotateCcw, 
  Key, 
  Download,
  Eye,
  Shield,
  Globe,
  Cpu,
  MemoryStick,
  Zap,
  BarChart3,
  Filter,
  ArrowUp,
  ArrowDown
} from "lucide-react";

// Semantic Color System
const colors = {
  // Moroccan Sovereign Identity
  moroccanRed: '#E60023',
  moroccanGreen: '#008000',
  
  // Semantic Status Colors
  success: '#16A34A',
  warning: '#F59E0B', 
  error: '#DC2626',
  info: '#3B82F6',
  neutral: '#6B7280',
  
  // Resource Usage Colors (consistent palette)
  cpu: '#DC2626',      // Red for CPU
  memory: '#F59E0B',   // Yellow for Memory  
  gpu: '#16A34A',      // Green for GPU
  
  // Client Segment Colors
  enterprise: '#E60023', // Moroccan Red for Enterprise
  startup: '#F59E0B',    // Warning Yellow for Startups
  individual: '#16A34A', // Success Green for Individual
  
  // Chart Colors
  chart: {
    line: '#3B82F6',     // Info Blue for default lines
    area: '#3B82F6',     // Info Blue for areas
    bar: '#6B7280'       // Neutral Gray for bars
  }
};

export default function Dashboard() {
  const [timeFilter, setTimeFilter] = useState("24h");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Mock data for dashboard with status-driven logic
  const systemHealth = {
    status: "healthy", // healthy | warning | critical
    requestsToday: 847523,
    activeModels: 12,
    averageLatency: 245, // ms
    uptime: 99.97, // %
    cpuUsage: 67,
    memoryUsage: 82,
    gpuUsage: 91,
    requestsChange: 15.3, // % change
    latencyChange: -8.2,  // % change
    uptimeChange: 0.1     // % change
  };

  // Status-driven color logic
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
      case 'running': return colors.success;
      case 'warning': 
      case 'updating': return colors.warning;
      case 'critical':
      case 'error':
      case 'paused': return colors.error;
      default: return colors.neutral;
    }
  };

  const getMetricColor = (value: number, thresholds: {good: number, warning: number}) => {
    if (value <= thresholds.good) return colors.success;
    if (value <= thresholds.warning) return colors.warning;
    return colors.error;
  };

  const getChangeColor = (change: number) => {
    return change > 0 ? colors.success : change < 0 ? colors.error : colors.neutral;
  };

  const models = [
    { name: "LLaMA 3.1 70B", status: "running", version: "v3.1.2", parameters: "70B", fineTuned: true, usage: 89, latency: 245, errorRate: 0.02 },
    { name: "Falcon 180B", status: "running", version: "v1.3.1", parameters: "180B", fineTuned: false, usage: 67, latency: 312, errorRate: 0.01 },
    { name: "Mistral 8x7B", status: "paused", version: "v0.2.1", parameters: "56B", fineTuned: true, usage: 45, latency: 189, errorRate: 0.03 },
    { name: "DeepSeek Coder", status: "updating", version: "v1.5.0", parameters: "33B", fineTuned: false, usage: 78, latency: 278, errorRate: 0.015 },
    { name: "Qwen 2.5 72B", status: "running", version: "v2.5.1", parameters: "72B", fineTuned: true, usage: 92, latency: 234, errorRate: 0.02 },
    { name: "CodeLlama 34B", status: "running", version: "v2.1.0", parameters: "34B", fineTuned: false, usage: 34, latency: 267, errorRate: 0.025 }
  ];

  const usageData = [
    { name: "00:00", requests: 1200, revenue: 450, latency: 267 },
    { name: "04:00", requests: 800, revenue: 320, latency: 234 },
    { name: "08:00", requests: 2400, revenue: 890, latency: 289 },
    { name: "12:00", requests: 3200, revenue: 1240, latency: 245 },
    { name: "16:00", requests: 2800, revenue: 1050, latency: 198 },
    { name: "20:00", requests: 1900, revenue: 720, latency: 223 }
  ];

  const modelUsageData = [
    { name: "LLaMA 3.1", value: 35, fill: colors.success },
    { name: "Falcon 180B", value: 25, fill: colors.info },
    { name: "Qwen 2.5", value: 20, fill: colors.warning },
    { name: "DeepSeek", value: 12, fill: colors.moroccanRed },
    { name: "Others", value: 8, fill: colors.neutral }
  ];

  const clients = [
    { name: "TechCorp Morocco", type: "Enterprise", usage: 78, quota: 1000000, requests: 780000, growth: 12.3 },
    { name: "StartupAI Casablanca", type: "Startup", usage: 45, quota: 100000, requests: 45000, growth: 8.7 },
    { name: "Dev Studio Rabat", type: "Individual", usage: 23, quota: 10000, requests: 2300, growth: -2.1 },
    { name: "InnovLab Marrakech", type: "Enterprise", usage: 89, quota: 500000, requests: 445000, growth: 15.8 }
  ];

  const revenueData = [
    { period: "Jan", enterprise: 45000, startup: 12000, individual: 3000, total: 60000 },
    { period: "Feb", enterprise: 52000, startup: 15000, individual: 3500, total: 70500 },
    { period: "Mar", enterprise: 48000, startup: 18000, individual: 4200, total: 70200 },
    { period: "Apr", enterprise: 61000, startup: 22000, individual: 4800, total: 87800 },
    { period: "May", enterprise: 58000, startup: 25000, individual: 5200, total: 88200 },
    { period: "Jun", enterprise: 67000, startup: 28000, individual: 5800, total: 100800 }
  ];

  const resourceData = [
    { time: "00:00", cpu: 45, memory: 67, gpu: 78 },
    { time: "04:00", cpu: 34, memory: 54, gpu: 62 },
    { time: "08:00", cpu: 67, memory: 78, gpu: 89 },
    { time: "12:00", cpu: 78, memory: 82, gpu: 91 },
    { time: "16:00", cpu: 72, memory: 85, gpu: 87 },
    { time: "20:00", cpu: 58, memory: 71, gpu: 82 }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading Morocco AI Gateway Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with Moroccan Sovereign Branding */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Brain className="h-8 w-8" style={{ color: colors.moroccanGreen }} />
                <div className="w-1 h-8 rounded-full" style={{ backgroundColor: colors.moroccanRed }}></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Morocco AI Gateway</h1>
                <p className="text-sm text-muted-foreground">Administrative Dashboard</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div 
                className="h-3 w-3 rounded-full" 
                style={{ backgroundColor: getStatusColor(systemHealth.status) }}
              ></div>
              <span className="text-sm text-foreground">
                System {systemHealth.status === 'healthy' ? 'Healthy' : 'Alert'}
              </span>
            </div>
            
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">Last 24h</SelectItem>
                <SelectItem value="7d">Last 7d</SelectItem>
                <SelectItem value="30d">Last 30d</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Quick KPIs with Semantic Colors */}
        <div className="grid grid-cols-4 gap-4 px-6 pb-4">
          <Card className="bg-card/50">
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Requests Today</p>
                  <p className="text-xl font-bold text-foreground">{systemHealth.requestsToday.toLocaleString()}</p>
                  <p className="text-xs flex items-center mt-1" style={{ color: getChangeColor(systemHealth.requestsChange) }}>
                    {systemHealth.requestsChange > 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                    {Math.abs(systemHealth.requestsChange)}% vs yesterday
                  </p>
                </div>
                <Activity className="h-8 w-8" style={{ color: colors.info }} />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50">
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Models</p>
                  <p className="text-xl font-bold text-foreground">{systemHealth.activeModels}</p>
                  <p className="text-xs text-muted-foreground mt-1">All systems operational</p>
                </div>
                <Server className="h-8 w-8" style={{ color: colors.info }} />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50">
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Latency</p>
                  <p 
                    className="text-xl font-bold" 
                    style={{ color: getMetricColor(systemHealth.averageLatency, {good: 200, warning: 300}) }}
                  >
                    {systemHealth.averageLatency}ms
                  </p>
                  <p className="text-xs flex items-center mt-1" style={{ color: getChangeColor(systemHealth.latencyChange) }}>
                    {systemHealth.latencyChange > 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                    {Math.abs(systemHealth.latencyChange)}% vs yesterday
                  </p>
                </div>
                <Clock className="h-8 w-8" style={{ color: getMetricColor(systemHealth.averageLatency, {good: 200, warning: 300}) }} />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50">
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                  <p 
                    className="text-xl font-bold" 
                    style={{ color: getMetricColor(100 - systemHealth.uptime, {good: 1, warning: 5}) }}
                  >
                    {systemHealth.uptime}%
                  </p>
                  <p className="text-xs flex items-center mt-1" style={{ color: getChangeColor(systemHealth.uptimeChange) }}>
                    {systemHealth.uptimeChange > 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                    {Math.abs(systemHealth.uptimeChange)}% vs yesterday
                  </p>
                </div>
                <CheckCircle className="h-8 w-8" style={{ color: colors.success }} />
              </div>
            </CardContent>
          </Card>
        </div>
      </header>

      <div className="p-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="models">Models</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* System Health with Resource Usage Colors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5" style={{ color: colors.success }} />
                    <span>System Health</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Cpu className="h-4 w-4" style={{ color: colors.cpu }} />
                        <span className="text-sm text-muted-foreground">CPU Usage</span>
                      </div>
                      <span 
                        className="text-sm font-medium" 
                        style={{ color: getMetricColor(systemHealth.cpuUsage, {good: 60, warning: 80}) }}
                      >
                        {systemHealth.cpuUsage}%
                      </span>
                    </div>
                    <Progress value={systemHealth.cpuUsage} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <MemoryStick className="h-4 w-4" style={{ color: colors.memory }} />
                        <span className="text-sm text-muted-foreground">Memory Usage</span>
                      </div>
                      <span 
                        className="text-sm font-medium" 
                        style={{ color: getMetricColor(systemHealth.memoryUsage, {good: 70, warning: 85}) }}
                      >
                        {systemHealth.memoryUsage}%
                      </span>
                    </div>
                    <Progress value={systemHealth.memoryUsage} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4" style={{ color: colors.gpu }} />
                        <span className="text-sm text-muted-foreground">GPU Utilization</span>
                      </div>
                      <span 
                        className="text-sm font-medium" 
                        style={{ color: getMetricColor(systemHealth.gpuUsage, {good: 80, warning: 95}) }}
                      >
                        {systemHealth.gpuUsage}%
                      </span>
                    </div>
                    <Progress value={systemHealth.gpuUsage} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Popular Models Chart with Semantic Colors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" style={{ color: colors.info }} />
                    <span>Popular Models</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={modelUsageData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({name, value}) => `${name}: ${value}%`}
                      >
                        {modelUsageData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Resource Usage and Latency Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" style={{ color: colors.info }} />
                    <span>Resource Utilization</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={resourceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="cpu" stroke={colors.cpu} strokeWidth={2} name="CPU" />
                      <Line type="monotone" dataKey="memory" stroke={colors.memory} strokeWidth={2} name="Memory" />
                      <Line type="monotone" dataKey="gpu" stroke={colors.gpu} strokeWidth={2} name="GPU" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" style={{ color: colors.info }} />
                    <span>Latency Trends</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={usageData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="latency" 
                        stroke={colors.chart.line} 
                        fill={colors.chart.line} 
                        fillOpacity={0.3} 
                        name="Latency (ms)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Models Tab with Status-driven Colors */}
          <TabsContent value="models" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5" style={{ color: colors.info }} />
                  <span>Model Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {models.map((model, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="font-medium text-foreground">{model.name}</h3>
                          <div className="flex items-center space-x-3 mt-1">
                            <Badge 
                              style={{ 
                                backgroundColor: getStatusColor(model.status),
                                color: 'white'
                              }}
                            >
                              {model.status}
                            </Badge>
                            <span className="text-sm text-muted-foreground">v{model.version}</span>
                            <span className="text-sm text-muted-foreground">{model.parameters}</span>
                            {model.fineTuned && (
                              <Badge 
                                variant="outline" 
                                style={{ 
                                  borderColor: colors.warning,
                                  color: colors.warning
                                }}
                              >
                                Fine-tuned
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Usage</p>
                          <p className="font-medium text-foreground">{model.usage}%</p>
                        </div>
                        <Progress value={model.usage} className="w-20" />
                        
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            {model.status === 'running' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                          </Button>
                          <Button size="sm" variant="outline">
                            <RotateCcw className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics with Status Colors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" style={{ color: colors.warning }} />
                  <span>Performance Metrics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-muted-foreground">Model</th>
                        <th className="text-left py-2 text-muted-foreground">Latency (ms)</th>
                        <th className="text-left py-2 text-muted-foreground">Error Rate</th>
                        <th className="text-left py-2 text-muted-foreground">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {models.map((model, index) => (
                        <tr key={index} className="border-b border-border/50">
                          <td className="py-3 font-medium text-foreground">{model.name}</td>
                          <td className="py-3">
                            <span style={{ color: getMetricColor(model.latency, {good: 250, warning: 300}) }}>
                              {model.latency}ms
                            </span>
                          </td>
                          <td className="py-3">
                            <span style={{ color: getMetricColor(model.errorRate * 100, {good: 2, warning: 3}) }}>
                              {(model.errorRate * 100).toFixed(2)}%
                            </span>
                          </td>
                          <td className="py-3">
                            {model.latency <= 250 && model.errorRate <= 0.02 ? (
                              <CheckCircle className="h-5 w-5" style={{ color: colors.success }} />
                            ) : model.latency <= 300 && model.errorRate <= 0.03 ? (
                              <AlertTriangle className="h-5 w-5" style={{ color: colors.warning }} />
                            ) : (
                              <XCircle className="h-5 w-5" style={{ color: colors.error }} />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab with Moroccan Revenue Branding */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Analytics with Moroccan Red Branding */}
              <Card style={{ borderColor: colors.moroccanRed }}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5" style={{ color: colors.moroccanRed }} />
                    <span>Revenue Analytics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="period" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="enterprise" stackId="a" fill={colors.enterprise} name="Enterprise" />
                      <Bar dataKey="startup" stackId="a" fill={colors.startup} name="Startup" />
                      <Bar dataKey="individual" stackId="a" fill={colors.individual} name="Individual" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5" style={{ color: colors.info }} />
                    <span>User Statistics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/30 p-4 rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground">Enterprise Clients</p>
                      <p className="text-2xl font-bold" style={{ color: colors.enterprise }}>47</p>
                      <p className="text-xs flex items-center" style={{ color: colors.success }}>
                        <ArrowUp className="h-3 w-3 mr-1" />
                        +12% this month
                      </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground">Individual Devs</p>
                      <p className="text-2xl font-bold" style={{ color: colors.individual }}>1,247</p>
                      <p className="text-xs flex items-center" style={{ color: colors.success }}>
                        <ArrowUp className="h-3 w-3 mr-1" />
                        +8% this month
                      </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground">Active Users</p>
                      <p className="text-2xl font-bold text-foreground">2,891</p>
                      <p className="text-xs flex items-center" style={{ color: colors.success }}>
                        <ArrowUp className="h-3 w-3 mr-1" />
                        +15% this week
                      </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground">Total API Calls</p>
                      <p className="text-2xl font-bold text-foreground">8.4M</p>
                      <p className="text-xs flex items-center" style={{ color: colors.success }}>
                        <ArrowUp className="h-3 w-3 mr-1" />
                        +23% this month
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Business Intelligence with Neutral Gray */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" style={{ color: colors.neutral }} />
                  <span>Business Intelligence</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-muted/30 p-4 rounded-lg border border-border">
                    <h4 className="font-medium mb-3" style={{ color: colors.success }}>Cost Analysis</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Cost per Token</span>
                        <span className="font-medium text-foreground">$0.0023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Revenue per Token</span>
                        <span className="font-medium" style={{ color: colors.success }}>$0.0067</span>
                      </div>
                      <div className="flex justify-between border-t border-border pt-2">
                        <span className="text-sm font-medium text-foreground">Margin</span>
                        <span className="font-bold" style={{ color: colors.success }}>65.7%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-lg border border-border">
                    <h4 className="font-medium mb-3" style={{ color: colors.info }}>Customer Metrics</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">CAC (Enterprise)</span>
                        <span className="font-medium text-foreground">$2,450</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">LTV (Enterprise)</span>
                        <span className="font-medium" style={{ color: colors.info }}>$18,900</span>
                      </div>
                      <div className="flex justify-between border-t border-border pt-2">
                        <span className="text-sm font-medium text-foreground">LTV/CAC Ratio</span>
                        <span className="font-bold" style={{ color: colors.info }}>7.7x</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 p-4 rounded-lg border border-border">
                    <h4 className="font-medium mb-3" style={{ color: colors.warning }}>Forecasts</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Q4 Revenue</span>
                        <span className="font-medium text-foreground">$342K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Ramadan Peak</span>
                        <span className="font-medium" style={{ color: colors.warning }}>+67%</span>
                      </div>
                      <div className="flex justify-between border-t border-border pt-2">
                        <span className="text-sm font-medium text-foreground">Growth Rate</span>
                        <span className="font-bold" style={{ color: colors.warning }}>+28% YoY</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clients Tab */}
          <TabsContent value="clients" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Key className="h-5 w-5" style={{ color: colors.info }} />
                  <span>API Keys & Clients</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clients.map((client, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="font-medium text-foreground">{client.name}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge 
                              style={{ 
                                backgroundColor: client.type === 'Enterprise' ? colors.enterprise : 
                                                client.type === 'Startup' ? colors.startup : colors.individual,
                                color: 'white'
                              }}
                            >
                              {client.type}
                            </Badge>
                            <span 
                              className="text-xs flex items-center"
                              style={{ color: getChangeColor(client.growth) }}
                            >
                              {client.growth > 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                              {Math.abs(client.growth)}%
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">
                            {client.requests.toLocaleString()} / {client.quota.toLocaleString()}
                          </p>
                          <Progress value={client.usage} className="w-32 mt-1" />
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Key className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compliance Tab with Neutral Grays */}
          <TabsContent value="compliance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" style={{ color: colors.success }} />
                    <span>Data Sovereignty</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">All requests processed in Morocco</span>
                    <CheckCircle className="h-5 w-5" style={{ color: colors.success }} />
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg border border-border">
                    <div className="flex items-center space-x-2 mb-2">
                      <Globe className="h-4 w-4" style={{ color: colors.info }} />
                      <span className="font-medium text-foreground">Request Geography</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Casablanca DC</span>
                        <span style={{ color: colors.success }}>67%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Rabat DC</span>
                        <span style={{ color: colors.success }}>33%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Download className="h-5 w-5" style={{ color: colors.neutral }} />
                    <span>Audit Logs</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { action: "Model deployment: LLaMA 3.1", time: "2 hours ago" },
                      { action: "API key generated: TechCorp", time: "5 hours ago" },
                      { action: "Rate limit adjusted: StartupAI", time: "1 day ago" }
                    ].map((log, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/20 rounded border border-border">
                        <div>
                          <p className="text-sm font-medium text-foreground">{log.action}</p>
                          <p className="text-xs text-muted-foreground">{log.time}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity Feed with Status Colors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5" style={{ color: colors.neutral }} />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { action: "High usage detected", client: "TechCorp Morocco", time: "5 min ago", type: "warning" },
                    { action: "Model updated successfully", client: "System", time: "15 min ago", type: "success" },
                    { action: "New client registered", client: "DevStudio Fez", time: "1 hour ago", type: "info" },
                    { action: "API quota exceeded", client: "Individual Dev #4421", time: "2 hours ago", type: "error" },
                    { action: "Revenue milestone reached", client: "System", time: "3 hours ago", type: "success" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-muted/20 rounded border border-border">
                      <div 
                        className="h-3 w-3 rounded-full" 
                        style={{ backgroundColor: getStatusColor(activity.type) }}
                      ></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.client} • {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
