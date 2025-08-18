import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Marquee } from "@/components/ui/marquee";
import Meteors from "@/components/ui/meteors";
import TextShimmer from "@/components/ui/text-shimmer";
import TypingAnimation from "@/components/ui/typing-animation";
import NumberTicker from "@/components/ui/number-ticker";
import { ShineBorder } from "@/components/ui/shine-border";
import { 
  Brain, 
  Shield, 
  Code, 
  Globe, 
  Zap, 
  Users, 
  Database, 
  Cpu, 
  Lock,
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  BarChart3,
  Settings,
  Cloud,
  Smartphone,
  Monitor,
  Layers,
  Activity,
  TrendingUp,
  Clock,
  Factory,
  Building2,
  Plane,
  Briefcase,
  Hammer,
  Bot,
  Terminal,
  Circle
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Hero Section Component
  const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <Meteors number={30} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </div>
      
      {/* Main Hero Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="mb-8 animate-fade-in">
            <Badge variant="outline" className="glass border-primary/30 text-primary px-4 py-2 text-sm">
              🇲🇦 Proudly Made in Morocco • Sovereign AI Revolution
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-display text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              SovereignAI
            </h1>
            <TypingAnimation 
              text="Morocco's Premier LLM API Gateway"
              className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-semibold"
            />
          </div>

          {/* Description */}
          <div className="mb-12 max-w-3xl mx-auto">
            <TextShimmer className="text-xl md:text-2xl leading-relaxed">
              Run, fine-tune, and deploy large language models with complete data sovereignty. 
              Built for Moroccan enterprises and Arabic-focused AI applications.
            </TextShimmer>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/playground">
              <Button variant="hero" size="xl" className="group">
                Start Building Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                View Dashboard
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <NumberTicker value={100} />%
              </div>
              <div className="text-muted-foreground">Data Sovereignty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <NumberTicker value={50} />+
              </div>
              <div className="text-muted-foreground">LLM Models</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <NumberTicker value={99.9} />%
              </div>
              <div className="text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <NumberTicker value={24} />/7
              </div>
              <div className="text-muted-foreground">Enterprise Support</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );

  // Trusted Companies Marquee
  const TrustedCompanies = () => (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-muted-foreground mb-4">
            Trusted by Leading Moroccan Enterprises
          </h2>
        </div>
        
        <Marquee className="[--duration:25s]" pauseOnHover>
          {/* Replace these with actual company logos - I'll mark where to add real images */}
          {[
            { name: "OCP Group", logo: <Factory className="h-8 w-8 text-primary" /> },
            { name: "BMCE Bank", logo: <Building2 className="h-8 w-8 text-primary" /> },
            { name: "Maroc Telecom", logo: <Smartphone className="h-8 w-8 text-primary" /> },
            { name: "Royal Air Maroc", logo: <Plane className="h-8 w-8 text-primary" /> },
            { name: "Attijariwafa Bank", logo: <Building2 className="h-8 w-8 text-primary" /> },
            { name: "LafargeHolcim", logo: <Hammer className="h-8 w-8 text-primary" /> },
            { name: "CFG Bank", logo: <Briefcase className="h-8 w-8 text-primary" /> },
            { name: "Managem Group", logo: <Factory className="h-8 w-8 text-primary" /> },
          ].map((company, i) => (
            <Card key={i} className="glass border-border/50 min-w-[200px] mx-4">
              <CardContent className="flex items-center justify-center p-6">
                <div className="mr-3">{company.logo}</div>
                <span className="font-semibold text-lg">{company.name}</span>
                {/* TODO: Replace with actual company logos: <img src="/logos/company-logo.png" alt={company.name} className="h-12 w-auto" /> */}
              </CardContent>
            </Card>
          ))}
        </Marquee>
      </div>
    </section>
  );

  // Features Section with Animated Beams
  const FeaturesSection = () => (
    <section className="py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-section mb-6">
            Everything You Need for AI Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From model deployment to fine-tuning, we provide enterprise-grade infrastructure 
            for your AI initiatives with complete Moroccan data sovereignty.
          </p>
        </div>

        {/* Feature Grid with Animated Beams */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Feature Cards */}
          <ShineBorder className="h-full">
            <Card ref={div1Ref} className="glass border-border/50 shadow-card hover:shadow-primary/20 transition-all duration-500 group h-full">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>LLM API Gateway</CardTitle>
              <CardDescription>
                Access 50+ leading language models through a unified, OpenRouter-compatible API.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  OpenAI, Anthropic, Meta LLaMA
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Mistral, DeepSeek, Falcon
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Arabic-optimized models
                </li>
              </ul>
            </CardContent>
            </Card>
          </ShineBorder>

          <ShineBorder className="h-full">
            <Card ref={div2Ref} className="glass border-border/50 shadow-card hover:shadow-primary/20 transition-all duration-500 group h-full">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Settings className="h-6 w-6 text-accent" />
              </div>
              <CardTitle>Fine-tuning & Training</CardTitle>
              <CardDescription>
                Customize models for Moroccan Arabic, Berber, and specific business use cases.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Custom dataset training
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Arabic language specialization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Domain-specific fine-tuning
                </li>
              </ul>
            </CardContent>
            </Card>
          </ShineBorder>

          <ShineBorder className="h-full">
            <Card ref={div3Ref} className="glass border-border/50 shadow-card hover:shadow-primary/20 transition-all duration-500 group h-full">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-success/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-success" />
              </div>
              <CardTitle>Data Sovereignty</CardTitle>
              <CardDescription>
                100% Moroccan infrastructure with complete control over your data and models.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Local hosting in Morocco
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  GDPR & local compliance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Government-grade security
                </li>
              </ul>
            </CardContent>
            </Card>
          </ShineBorder>

          <ShineBorder className="h-full">
            <Link to="/analytics">
              <Card ref={div4Ref} className="glass border-border/50 shadow-card hover:shadow-primary/20 transition-all duration-500 group h-full cursor-pointer">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-warning/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-6 w-6 text-warning" />
                </div>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>
                  Comprehensive insights into model usage, performance, and cost optimization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Real-time monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Cost tracking & optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Performance analytics
                  </li>
                </ul>
              </CardContent>
              </Card>
            </Link>
          </ShineBorder>

          <ShineBorder className="h-full">
            <Link to="/playground">
              <Card ref={div5Ref} className="glass border-border/50 shadow-card hover:shadow-primary/20 transition-all duration-500 group h-full cursor-pointer">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Developer Playground</CardTitle>
                <CardDescription>
                  Test, prototype, and deploy AI applications with our interactive development environment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Interactive code editor
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    API testing interface
                  </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Model comparison tools
                </li>
              </ul>
            </CardContent>
            </Card>
            </Link>
          </ShineBorder>

          <ShineBorder className="h-full">
            <Card className="glass border-border/50 shadow-card hover:shadow-primary/20 transition-all duration-500 group h-full">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-destructive/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 text-destructive" />
              </div>
              <CardTitle>Enterprise Support</CardTitle>
              <CardDescription>
                24/7 support from our team of AI experts and infrastructure specialists.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Dedicated account manager
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Priority technical support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-success mr-2" />
                  Custom integration assistance
                </li>
              </ul>
            </CardContent>
            </Card>
          </ShineBorder>
        </div>
      </div>
    </section>
  );

  // Architecture Section
  const ArchitectureSection = () => (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Architecture</Badge>
          <h2 className="text-section mb-6">
            Built for Scale & Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our enterprise-grade infrastructure ensures your AI applications perform 
            at scale while maintaining the highest security standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Architecture Diagram */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <Card className="glass border-border/50 p-6 text-center">
                <Cloud className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Edge Computing</h3>
                <p className="text-sm text-muted-foreground">Distributed inference for low latency</p>
              </Card>
              
              <Card className="glass border-border/50 p-6 text-center">
                <Database className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Secure Storage</h3>
                <p className="text-sm text-muted-foreground">Encrypted data & model storage</p>
              </Card>
              
              <Card className="glass border-border/50 p-6 text-center">
                <Cpu className="h-8 w-8 text-success mx-auto mb-3" />
                <h3 className="font-semibold mb-2">GPU Clusters</h3>
                <p className="text-sm text-muted-foreground">High-performance inference</p>
              </Card>
              
              <Card className="glass border-border/50 p-6 text-center">
                <Lock className="h-8 w-8 text-warning mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Zero Trust</h3>
                <p className="text-sm text-muted-foreground">Enterprise security model</p>
              </Card>
            </div>
          </div>

          {/* Architecture Benefits */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ultra-Low Latency</h3>
                <p className="text-muted-foreground">
                  Our edge computing infrastructure delivers sub-100ms response times 
                  across Morocco and MENA region.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 rounded-lg bg-success/20 flex items-center justify-center flex-shrink-0">
                <Activity className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">99.99% Uptime SLA</h3>
                <p className="text-muted-foreground">
                  Enterprise-grade reliability with automatic failover and 
                  redundant infrastructure across multiple data centers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Auto-Scaling</h3>
                <p className="text-muted-foreground">
                  Dynamically scale from 1 to 1M+ requests per second with 
                  intelligent load balancing and resource optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Integration Section
  const IntegrationSection = () => {
    const [activeTab, setActiveTab] = useState('nodejs');
    
    const codeExamples = {
      nodejs: `import SovereignAI from "sovereign-ai";

const sovereign = new SovereignAI();

async function main() {
  const completion = await sovereign.chat.completions.create({
    messages: [{ role: "user", content: "What's SovereignAI?" }],
    model: "@openai/gpt-4"
  });
  
  console.log(completion.choices[0]);
}

main();`,
      python: `from sovereign_ai import SovereignAI

sovereign = SovereignAI()

completion = sovereign.chat.completions.create(
    messages=[{"role": "user", "content": "What's SovereignAI?"}],
    model="@openai/gpt-4"
)

print(completion.choices[0])`,
      openai_js: `import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://api.sovereignai.ma/v1",
  apiKey: "sa-xxx", // SovereignAI API key
});

const completion = await openai.chat.completions.create({
  messages: [{ role: "user", content: "What's SovereignAI?" }],
  model: "@openai/gpt-4",
});`,
      openai_py: `import openai

openai.api_base = "https://api.sovereignai.ma/v1"
openai.api_key = "sa-xxx"  # SovereignAI API key

completion = openai.ChatCompletion.create(
    messages=[{"role": "user", "content": "What's SovereignAI?"}],
    model="@openai/gpt-4"
)`,
      curl: `curl https://api.sovereignai.ma/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer sa-xxx" \\
  -d '{
    "model": "@openai/gpt-4",
    "messages": [
      {
        "role": "user",
        "content": "What's SovereignAI?"
      }
    ]
  }'`
    };

    const tabs = [
      { id: 'nodejs', label: 'Node.js', icon: <Circle className="h-4 w-4 text-green-500" /> },
      { id: 'python', label: 'Python', icon: <Code className="h-4 w-4 text-blue-500" /> },
      { id: 'openai_js', label: 'OpenAI JS', icon: <Bot className="h-4 w-4 text-purple-500" /> },
      { id: 'openai_py', label: 'OpenAI Py', icon: <Bot className="h-4 w-4 text-purple-500" /> },
      { id: 'curl', label: 'cURL', icon: <Terminal className="h-4 w-4 text-gray-500" /> }
    ];

    return (
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Plug & Play</Badge>
            <h2 className="text-section mb-6">
              Integrate in a minute
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Integrate SovereignAI in just 3 lines of code - no changes to your existing stack.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <ShineBorder className="h-full">
              <Card className="glass border-border/50 overflow-hidden">
                {/* Tab Navigation */}
                <div className="border-b border-border/50 bg-background/50">
                  <div className="flex overflow-x-auto">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
                          activeTab === tab.id
                            ? 'border-primary text-primary bg-primary/5'
                            : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        <span>{tab.icon}</span>
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-6 bg-background/50">
                  <pre className="bg-secondary/20 rounded-lg p-6 overflow-x-auto">
                    <code className="text-sm font-mono text-foreground whitespace-pre">
                      {codeExamples[activeTab as keyof typeof codeExamples]}
                    </code>
                  </pre>
                </div>
              </Card>
            </ShineBorder>

            {/* Quick Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="glass border-border/50 p-6 text-center">
                <div className="h-12 w-12 rounded-lg bg-success/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Drop-in Replacement</h3>
                <p className="text-sm text-muted-foreground">Compatible with OpenAI SDK - no code changes needed</p>
              </Card>
              
              <Card className="glass border-border/50 p-6 text-center">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Instant Setup</h3>
                <p className="text-sm text-muted-foreground">Get your API key and start building in under 60 seconds</p>
              </Card>
              
              <Card className="glass border-border/50 p-6 text-center">
                <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Global Models</h3>
                <p className="text-sm text-muted-foreground">Access 50+ models through one unified API endpoint</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Architecture Beam Section
  const ArchitectureBeamSection = () => {
    const apiRef = useRef<HTMLDivElement>(null);
    const modelsRef = useRef<HTMLDivElement>(null);
    const securityRef = useRef<HTMLDivElement>(null);
    const analyticsRef = useRef<HTMLDivElement>(null);
    const beamContainerRef = useRef<HTMLDivElement>(null);

    return (
      <section className="py-24 relative" ref={beamContainerRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">How It Works</Badge>
            <h2 className="text-section mb-6">
              Architecture That Powers Innovation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our intelligent API gateway connects your applications to the world's best LLMs 
              while maintaining complete data sovereignty.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
            {/* Animated Beams between components */}

            {/* API Gateway */}
            <ShineBorder className="h-full">
              <Card ref={apiRef} className="glass border-border/50 shadow-card hover:shadow-primary/20 transition-all duration-500 group h-full text-center">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Unified API</CardTitle>
                  <CardDescription>
                    Single endpoint for all LLM models with intelligent routing
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    • OpenAI-compatible API
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Automatic load balancing
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Model fallback & retry
                  </div>
                </CardContent>
              </Card>
            </ShineBorder>

            {/* Model Pool */}
            <ShineBorder className="h-full">
              <Card ref={modelsRef} className="glass border-border/50 shadow-card hover:shadow-accent/20 transition-all duration-500 group h-full text-center">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Brain className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle>Model Pool</CardTitle>
                  <CardDescription>
                    Access to 50+ leading language models and custom fine-tuned variants
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    • GPT-4, Claude, LLaMA
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Arabic-optimized models
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Custom fine-tuned models
                  </div>
                </CardContent>
              </Card>
            </ShineBorder>

            {/* Security Layer */}
            <ShineBorder className="h-full">
              <Card ref={securityRef} className="glass border-border/50 shadow-card hover:shadow-success/20 transition-all duration-500 group h-full text-center">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="h-8 w-8 text-success" />
                  </div>
                  <CardTitle>Security Layer</CardTitle>
                  <CardDescription>
                    Enterprise-grade security with complete data sovereignty
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    • End-to-end encryption
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Morocco-hosted infrastructure
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Zero-trust architecture
                  </div>
                </CardContent>
              </Card>
            </ShineBorder>

            {/* Analytics */}
            <ShineBorder className="h-full">
              <Card ref={analyticsRef} className="glass border-border/50 shadow-card hover:shadow-warning/20 transition-all duration-500 group h-full text-center">
                <CardHeader>
                  <div className="h-16 w-16 rounded-full bg-warning/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <BarChart3 className="h-8 w-8 text-warning" />
                  </div>
                  <CardTitle>Real-time Analytics</CardTitle>
                  <CardDescription>
                    Comprehensive insights and monitoring for optimal performance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    • Usage & cost tracking
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Performance metrics
                  </div>
                  <div className="text-sm text-muted-foreground">
                    • Custom dashboards
                  </div>
                </CardContent>
              </Card>
            </ShineBorder>
          </div>
        </div>
      </section>
    );
  };

  // Use Cases Section
  const UseCasesSection = () => (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Use Cases</Badge>
          <h2 className="text-section mb-6">
            Powering Innovation Across Industries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From financial services to government applications, SovereignAI enables 
            AI transformation while respecting Moroccan data sovereignty requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Monitor className="h-8 w-8" />,
              title: "Financial Services",
              description: "Risk assessment, fraud detection, and customer service automation with Arabic language support.",
              features: ["Credit scoring models", "Real-time fraud detection", "Multilingual chatbots"]
            },
            {
              icon: <Smartphone className="h-8 w-8" />,
              title: "Government & Public Sector",
              description: "Citizen services, document processing, and policy analysis with complete data sovereignty.",
              features: ["Document digitization", "Citizen query handling", "Policy impact analysis"]
            },
            {
              icon: <Layers className="h-8 w-8" />,
              title: "Healthcare & Research",
              description: "Medical research, patient care optimization, and Arabic medical text processing.",
              features: ["Medical record analysis", "Research acceleration", "Patient care automation"]
            },
            {
              icon: <Globe className="h-8 w-8" />,
              title: "Education & Training",
              description: "Personalized learning, content generation, and Arabic language education tools.",
              features: ["Adaptive learning systems", "Content personalization", "Language assessment"]
            },
            {
              icon: <Code className="h-8 w-8" />,
              title: "Technology & Startups",
              description: "AI-powered applications, content generation, and intelligent automation solutions.",
              features: ["API integrations", "Content creation", "Process automation"]
            },
            {
              icon: <Database className="h-8 w-8" />,
              title: "Enterprise & Manufacturing",
              description: "Predictive maintenance, supply chain optimization, and quality control automation.",
              features: ["Predictive analytics", "Supply chain AI", "Quality assurance"]
            }
          ].map((useCase, index) => (
            <Card key={index} className="glass border-border/50 shadow-card hover:shadow-primary/20 transition-all duration-500 group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-primary">
                  {useCase.icon}
                </div>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
                <CardDescription className="text-base">
                  {useCase.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // Pricing Section
  const PricingSection = () => (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Pricing</Badge>
          <h2 className="text-section mb-6">
            Transparent, Fair Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, no vendor lock-in. 
            Pay only for what you use with our competitive pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Developer Plan */}
          <Card className="glass border-border/50 shadow-card">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">Developer</CardTitle>
              <CardDescription>Perfect for individual developers and small projects</CardDescription>
              <div className="mt-6">
                <span className="text-4xl font-bold">Free</span>
                <span className="text-muted-foreground"> / month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {[
                  "10,000 API calls/month",
                  "Access to 20+ models",
                  "Community support",
                  "Basic analytics",
                  "Standard rate limits"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-3" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-8">
                Get Started Free
              </Button>
            </CardContent>
          </Card>

          {/* Professional Plan */}
          <Card className="glass border-primary/50 shadow-primary/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
            <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
              Most Popular
            </Badge>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">Professional</CardTitle>
              <CardDescription>Ideal for growing businesses and teams</CardDescription>
              <div className="mt-6">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-muted-foreground"> / month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {[
                  "1M API calls/month",
                  "Access to all 50+ models",
                  "Priority support",
                  "Advanced analytics",
                  "Fine-tuning capabilities",
                  "Custom rate limits",
                  "Team collaboration"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-3" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" className="w-full mt-8">
                Start Professional
              </Button>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="glass border-border/50 shadow-card">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>For large organizations with custom needs</CardDescription>
              <div className="mt-6">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-muted-foreground"> pricing</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                {[
                  "Unlimited API calls",
                  "Dedicated infrastructure",
                  "24/7 enterprise support",
                  "Custom model training",
                  "On-premises deployment",
                  "SLA guarantees",
                  "Compliance assistance"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-3" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-8">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Enterprise Features */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Enterprise-Ready Features</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Shield className="h-6 w-6" />, title: "SOC 2 Compliant" },
              { icon: <Lock className="h-6 w-6" />, title: "Data Encryption" },
              { icon: <Clock className="h-6 w-6" />, title: "99.99% Uptime" },
              { icon: <Users className="h-6 w-6" />, title: "Dedicated Support" }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3 text-primary">
                  {feature.icon}
                </div>
                <span className="font-medium">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  // CTA Section
  const CTASection = () => (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        <Meteors number={20} />
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-hero mb-6">
            Ready to Build the Future of AI in Morocco?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join the sovereign AI revolution. Start building with complete data sovereignty, 
            enterprise-grade security, and Arabic language expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="xl" className="group">
              Start Building Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl">
              Schedule Demo
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Sales Inquiries</h3>
              <p className="text-muted-foreground">sales@sovereignai.ma</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Technical Support</h3>
              <p className="text-muted-foreground">support@sovereignai.ma</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Partnerships</h3>
              <p className="text-muted-foreground">partners@sovereignai.ma</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Footer
  const Footer = () => (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              {/* TODO: Add actual logo here: <img src="/logo.png" alt="SovereignAI" className="h-8 w-8" /> */}
              <Bot className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">SovereignAI</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Morocco's premier LLM API gateway, built for data sovereignty and enterprise excellence.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">API Gateway</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors">Fine-tuning</Link></li>
              <li><Link to="/analytics" className="hover:text-primary transition-colors">Analytics</Link></li>
              <li><Link to="/playground" className="hover:text-primary transition-colors">Playground</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Data Processing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 SovereignAI. All rights reserved. Made with ❤️ in Morocco.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gradient-hero">
      <HeroSection />
      <TrustedCompanies />
      <FeaturesSection />
      <ArchitectureBeamSection />
      <IntegrationSection />
      <ArchitectureSection />
      <UseCasesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;