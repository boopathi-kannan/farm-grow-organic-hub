
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Leaf, ArrowLeft } from "lucide-react";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="min-h-screen bg-farm-green-100 flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-farm-green-600 hover:text-farm-green-500 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2">
              <Leaf className="h-8 w-8 text-farm-green-500" />
              <span className="font-bold text-2xl text-farm-green-600">FarmGrow</span>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <Tabs defaultValue="login" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                
                <CardTitle>{activeTab === "login" ? "Welcome Back" : "Create an Account"}</CardTitle>
                <CardDescription>
                  {activeTab === "login" 
                    ? "Sign in to access your farm planner and resources." 
                    : "Join our community of farmers and start growing better."}
                </CardDescription>
              </Tabs>
            </CardHeader>
            <CardContent>
              <TabsContent value="login" className="mt-0">
                <form>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="name@example.com" required type="email" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link to="/" className="text-sm text-farm-green-600 hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input id="password" required type="password" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember" className="text-sm">Remember me</Label>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-farm-green-500 hover:bg-farm-green-600">Sign In</Button>
                </form>
              </TabsContent>
              
              <TabsContent value="register" className="mt-0">
                <form>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="name@example.com" required type="email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" required type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input id="confirmPassword" required type="password" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the <Link to="/" className="text-farm-green-600 hover:underline">Terms of Service</Link> and <Link to="/" className="text-farm-green-600 hover:underline">Privacy Policy</Link>
                      </Label>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-farm-green-500 hover:bg-farm-green-600">Create Account</Button>
                </form>
              </TabsContent>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              {activeTab === "login" ? (
                <p className="text-sm text-center">
                  Don't have an account?{" "}
                  <a href="#" onClick={() => setActiveTab("register")} className="text-farm-green-600 hover:underline">
                    Sign up
                  </a>
                </p>
              ) : (
                <p className="text-sm text-center">
                  Already have an account?{" "}
                  <a href="#" onClick={() => setActiveTab("login")} className="text-farm-green-600 hover:underline">
                    Sign in
                  </a>
                </p>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;
