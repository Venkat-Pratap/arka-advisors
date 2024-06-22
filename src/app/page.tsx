import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">


<div className="hero pb-24 mb-8 bg-gray-100">
    <div className="hero-content flex flex-col justify-center items-center  px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Revolutionize Your Supply Chain with Intelligent Demand Forecasting (IDF)
      </h1>
      <p className="text-xl text-center text-gray-600 mt-4">
        Gain real-time insights, optimize inventory, and deliver exceptional customer experiences.
      </p>
      <div className="flex justify-center mt-8">
        <button type="button" className="btn btn-primary">Get a Free Demo</button>
        <button type="button" className="btn btn-outline ml-4">Start Your Free Trial</button>
      </div>
    </div>
  </div>
      <div className="grid h-full gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

      </div>
      <div className="mt-2">Test page</div>
</main>
)
}
