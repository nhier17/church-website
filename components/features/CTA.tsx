
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="section-padding bg-gray-50">
    <div className="container-custom text-center">
      <h2 className="heading-2 mb-6">Ready to Take Your Next Step?</h2>
      <p className="body-large max-w-2xl mx-auto mb-8">
        Whether you're new to faith or looking to grow deeper, we're here to 
        walk alongside you on your spiritual journey.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
          <Link href="/visit">Plan a Visit</Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link href="/contact">Get Connected</Link>
        </Button>
      </div>
    </div>
  </section>
  )
}

export default CTA